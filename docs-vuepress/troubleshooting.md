# 故障排除

本文档帮助你解决使用 @shixinde/apifox-swagger 时可能遇到的常见问题。

## 常见错误

### 1. 认证相关错误

#### 错误：`401 Unauthorized`

**原因**：访问令牌无效或已过期

**解决方案**：
```bash
# 检查令牌是否正确设置
echo $APIFOX_ACCESS_TOKEN

# 重新获取令牌
# 1. 登录 Apifox 网页版
# 2. 进入个人设置 > 访问令牌
# 3. 生成新的令牌
# 4. 更新环境变量
export APIFOX_ACCESS_TOKEN="your-new-token"
```

#### 错误：`403 Forbidden`

**原因**：令牌权限不足或项目访问受限

**解决方案**：
1. 确认你有项目的访问权限
2. 检查令牌是否有足够的权限
3. 联系项目管理员添加权限

### 2. 网络相关错误

#### 错误：`ECONNREFUSED` 或 `ETIMEDOUT`

**原因**：网络连接问题或防火墙阻止

**解决方案**：
```javascript
// apifox.config.js - 增加超时时间和重试次数
export default {
  projectId: 'your-project-id',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  // 网络配置
  timeout: 60000,  // 增加到 60 秒
  retries: 5,      // 增加重试次数
  
  // 如果在企业网络环境中，可能需要配置代理
  proxy: process.env.HTTP_PROXY
};
```

#### 错误：`SSL certificate problem`

**原因**：SSL 证书验证失败

**解决方案**：
```bash
# 临时禁用 SSL 验证（不推荐用于生产环境）
export NODE_TLS_REJECT_UNAUTHORIZED=0

# 或者更新 Node.js 和 npm 到最新版本
npm update -g npm
```

### 3. 文件系统错误

#### 错误：`ENOENT: no such file or directory`

**原因**：输出目录不存在

**解决方案**：
```bash
# 手动创建目录
mkdir -p ./src/types

# 或者在配置中启用自动创建
```

```javascript
// 在代码中自动创建目录
import { mkdirSync } from 'fs';
import { dirname } from 'path';

const outdir = './src/types';
mkdirSync(dirname(outdir), { recursive: true });
```

#### 错误：`EACCES: permission denied`

**原因**：文件权限不足

**解决方案**：
```bash
# 检查文件权限
ls -la ./src/types

# 修改权限
chmod 755 ./src/types

# 或者使用 sudo（不推荐）
sudo npx apifox-swagger export
```

### 4. TypeScript 相关错误

#### 错误：`Cannot find module '@shixinde/apifox-swagger/types'`

**原因**：类型文件未生成或路径错误

**解决方案**：
```bash
# 1. 确保已导出类型文件
npx apifox-swagger export --project-id your-project-id

# 2. 检查文件是否存在
ls -la ./src/types/

# 3. 检查 TypeScript 配置
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/types/*": ["./src/types/*"]
    }
  }
}
```

#### 错误：`Type 'never' is not assignable to type`

**原因**：类型推断失败或路径参数不匹配

**解决方案**：
```typescript
// 错误的用法
type BadURL = MakeURL<typeof makeURL<UserPaths, '/user/{id}', 'GET'>>;

// 正确的用法
type GoodURL = MakeURL<UserPaths, '/user/{id}', 'GET'>;

// 检查路径是否在类型定义中存在
type UserPaths = {
  '/user/{id}': {
    GET: {
      // ... 接口定义
    }
  }
};
```

### 5. 本地模式错误

#### 错误：`Local Apifox client not found`

**原因**：本地 Apifox 客户端未安装或未运行

**解决方案**：
1. 下载并安装 Apifox 客户端
2. 启动 Apifox 客户端
3. 确保客户端版本支持 API 导出

```bash
# 检查本地服务是否运行
curl http://localhost:4523/api/v1/projects

# 如果无响应，启动 Apifox 客户端
```

#### 错误：`Project not found in local client`

**原因**：项目未在本地客户端中打开

**解决方案**：
1. 在 Apifox 客户端中打开对应项目
2. 确保项目已同步到本地
3. 检查项目 ID 是否正确

## 调试技巧

### 1. 启用详细日志

```bash
# 设置调试模式
export DEBUG=apifox:*

# 运行命令
npx apifox-swagger export --project-id your-project-id
```

```javascript
// 在代码中启用调试
import { exportSwagger } from '@shixinde/apifox-swagger';

const result = await exportSwagger({
  projectId: 'your-project-id',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  debug: true  // 启用调试模式
});
```

### 2. 检查网络请求

```javascript
// 添加请求拦截器
import axios from 'axios';

axios.interceptors.request.use(request => {
  console.log('发送请求:', request.method?.toUpperCase(), request.url);
  return request;
});

axios.interceptors.response.use(
  response => {
    console.log('收到响应:', response.status, response.statusText);
    return response;
  },
  error => {
    console.error('请求失败:', error.message);
    return Promise.reject(error);
  }
);
```

### 3. 验证配置

```javascript
// scripts/debug-config.js
import config from '../apifox.config.js';

console.log('当前配置:');
console.log(JSON.stringify(config, null, 2));

// 检查环境变量
console.log('\n环境变量:');
console.log('APIFOX_ACCESS_TOKEN:', process.env.APIFOX_ACCESS_TOKEN ? '已设置' : '未设置');
console.log('NODE_ENV:', process.env.NODE_ENV);

// 检查文件系统
import { existsSync } from 'fs';
console.log('\n文件系统:');
console.log('输出目录存在:', existsSync(config.outdir));
```

### 4. 测试连接

```javascript
// scripts/test-connection.js
import axios from 'axios';

async function testConnection() {
  try {
    const response = await axios.get('https://api.apifox.cn/api/v1/projects', {
      headers: {
        'Authorization': `Bearer ${process.env.APIFOX_ACCESS_TOKEN}`
      },
      timeout: 10000
    });
    
    console.log('连接成功:', response.status);
    console.log('项目数量:', response.data.data?.length || 0);
  } catch (error) {
    console.error('连接失败:', error.message);
    
    if (error.response) {
      console.error('响应状态:', error.response.status);
      console.error('响应数据:', error.response.data);
    }
  }
}

testConnection();
```

## 性能问题

### 1. 导出速度慢

**原因**：项目过大或网络延迟

**解决方案**：
```javascript
// 使用模块化导出
export default {
  projectId: 'your-project-id',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: './src/types',
  
  // 只导出需要的模块
  modules: [
    {
      name: '核心模块',
      folderId: 'core-folder-id'
    }
  ],
  
  // 并行导出
  parallel: true,
  maxConcurrency: 3
};
```

### 2. 内存使用过高

**原因**：大型项目或并发过高

**解决方案**：
```bash
# 增加 Node.js 内存限制
node --max-old-space-size=4096 node_modules/.bin/apifox-swagger export
```

```javascript
// 降低并发数
export default {
  // ... 其他配置
  maxConcurrency: 1,  // 降低并发数
  batchSize: 10       // 减少批处理大小
};
```

### 3. 文件过大

**原因**：生成的类型文件过大

**解决方案**：
```javascript
// 分模块导出
export default {
  projectId: 'your-project-id',
  token: process.env.APIFOX_ACCESS_TOKEN,
  
  modules: [
    {
      name: '用户模块',
      folderId: 'user-folder-id',
      outdir: './src/types/user'
    },
    {
      name: '订单模块',
      folderId: 'order-folder-id',
      outdir: './src/types/order'
    }
  ]
};
```

## 环境相关问题

### 1. Windows 环境

#### 路径分隔符问题

```javascript
// 使用 path.join 而不是硬编码路径
import { join } from 'path';

export default {
  projectId: 'your-project-id',
  token: process.env.APIFOX_ACCESS_TOKEN,
  outdir: join(process.cwd(), 'src', 'types')  // 跨平台路径
};
```

#### PowerShell 执行策略

```powershell
# 如果遇到执行策略错误
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# 或者使用 npx
npx apifox-swagger export --project-id your-project-id
```

### 2. Docker 环境

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

# 安装依赖
COPY package*.json ./
RUN npm ci --only=production

# 复制源码
COPY . .

# 导出类型
RUN npx apifox-swagger export --project-id $PROJECT_ID

# 构建应用
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

```yaml
# docker-compose.yml
version: '3.8'
services:
  app:
    build: .
    environment:
      - APIFOX_ACCESS_TOKEN=${APIFOX_ACCESS_TOKEN}
      - PROJECT_ID=${PROJECT_ID}
    volumes:
      - ./src/types:/app/src/types
```

### 3. CI/CD 环境

#### GitHub Actions

```yaml
# .github/workflows/api-types.yml
name: Update API Types

on:
  schedule:
    - cron: '0 2 * * *'  # 每天凌晨 2 点
  workflow_dispatch:

jobs:
  update-types:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Export API types
        env:
          APIFOX_ACCESS_TOKEN: ${{ secrets.APIFOX_ACCESS_TOKEN }}
        run: |
          npx apifox-swagger export --project-id ${{ vars.PROJECT_ID }}
      
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add src/types/
          git diff --staged --quiet || git commit -m "chore: update API types"
          git push
```

#### GitLab CI

```yaml
# .gitlab-ci.yml
stages:
  - update-types

update-api-types:
  stage: update-types
  image: node:18-alpine
  script:
    - npm ci
    - npx apifox-swagger export --project-id $PROJECT_ID
    - |
      if [ -n "$(git status --porcelain src/types/)" ]; then
        git config user.email "gitlab-ci@example.com"
        git config user.name "GitLab CI"
        git add src/types/
        git commit -m "chore: update API types"
        git push origin $CI_COMMIT_REF_NAME
      fi
  variables:
    APIFOX_ACCESS_TOKEN: $APIFOX_ACCESS_TOKEN
  only:
    - schedules
    - web
```

## 版本兼容性

### Node.js 版本

| Node.js 版本 | 支持状态 | 说明 |
|-------------|----------|------|
| 18.x | ✅ 推荐 | 完全支持 |
| 16.x | ✅ 支持 | 需要 16.14+ |
| 14.x | ⚠️ 有限支持 | 需要 14.18+ |
| 12.x | ❌ 不支持 | 请升级 Node.js |

### TypeScript 版本

| TypeScript 版本 | 支持状态 | 说明 |
|----------------|----------|------|
| 5.x | ✅ 推荐 | 完全支持 |
| 4.9+ | ✅ 支持 | 完全支持 |
| 4.5-4.8 | ⚠️ 有限支持 | 部分功能受限 |
| < 4.5 | ❌ 不支持 | 请升级 TypeScript |

## 获取帮助

### 1. 检查文档

- [安装指南](./installation.md)
- [快速开始](./quick-start.md)
- [配置参考](./configuration.md)
- [TypeScript 类型工具](./typescript.md)

### 2. 社区支持

- GitHub Issues: [提交问题](https://github.com/shixinde/apifox-swagger/issues)
- 讨论区: [参与讨论](https://github.com/shixinde/apifox-swagger/discussions)

### 3. 提交 Bug 报告

提交 Bug 时请包含以下信息：

```bash
# 收集系统信息
node --version
npm --version
npx apifox-swagger --version

# 收集错误信息
DEBUG=apifox:* npx apifox-swagger export --project-id your-project-id 2>&1 | tee debug.log
```

**Bug 报告模板**：

```markdown
## 环境信息
- Node.js 版本: 
- npm 版本: 
- @shixinde/apifox-swagger 版本: 
- 操作系统: 

## 问题描述
[详细描述遇到的问题]

## 重现步骤
1. 
2. 
3. 

## 期望行为
[描述期望的正确行为]

## 实际行为
[描述实际发生的行为]

## 错误日志
```
[粘贴完整的错误日志]
```

## 配置文件
```javascript
[粘贴相关的配置文件内容]
```

## 其他信息
[任何其他可能有用的信息]
```

### 4. 常见问题快速检查清单

在提交问题前，请检查以下项目：

- [ ] Node.js 版本是否支持（>= 16.14）
- [ ] 访问令牌是否正确设置
- [ ] 项目 ID 是否正确
- [ ] 网络连接是否正常
- [ ] 输出目录是否有写入权限
- [ ] 配置文件语法是否正确
- [ ] 是否尝试了最新版本
- [ ] 是否查看了相关文档

## 下一步

- [配置参考](./configuration.md)
- [TypeScript 类型工具](./typescript.md)
- [编程接口使用](./api.md)
- [命令行工具使用](./cli.md)