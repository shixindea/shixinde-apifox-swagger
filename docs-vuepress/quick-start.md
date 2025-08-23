# 快速开始

本指南将帮助你快速上手 @shixinde/apifox-swagger，从 Apifox 导出 Swagger 文档并生成 TypeScript 类型定义。

## 前置准备

### 1. 获取 Apifox 访问令牌

1. 登录 [Apifox 网页版](https://www.apifox.cn/)
2. 进入个人设置 → API 访问令牌
3. 创建新的访问令牌
4. 复制令牌并妥善保存

### 2. 获取项目 ID

1. 在 Apifox 中打开你的项目
2. 查看浏览器地址栏，URL 中包含项目 ID
3. 例如：`https://www.apifox.cn/web/project/2364643` 中的 `2364643` 就是项目 ID

## 第一次使用

### 方式一：命令行工具（推荐新手）

```bash
# 基本导出
apifox-swagger --projectId 2364643 --outdir ./output

# 使用环境变量设置令牌
export APIFOX_ACCESS_TOKEN=your-access-token
apifox-swagger --projectId 2364643 --outdir ./output

# 或直接在命令中指定令牌
apifox-swagger --projectId 2364643 --token your-access-token --outdir ./output
```

### 方式二：编程接口

创建一个简单的导出脚本：

```javascript
// export-api.js
import { exportSwagger } from '@shixinde/apifox-swagger';

async function main() {
  try {
    const result = await exportSwagger({
      projectId: '2364643',
      token: 'your-access-token', // 或使用环境变量
      outdir: './output'
    });
    
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

main();
```

运行脚本：

```bash
node export-api.js
```

## 查看输出结果

导出成功后，你会在输出目录下看到：

```
output/
└── swagger/
    ├── all.json    # OpenAPI/Swagger JSON 文档
    └── all.ts      # TypeScript 类型定义文件
```

## 使用生成的类型

```typescript
// 导入生成的类型
import type { paths } from './output/swagger/all';
import { makeURL, type MakeURL } from '@shixinde/apifox-swagger/types';

// 定义 API 类型
type UserLoginAPI = MakeURL<paths, '/api/user/login', 'post'>;

// 提取请求和响应类型
type LoginRequest = UserLoginAPI['jsonData'];
type LoginResponse = UserLoginAPI['responseData'];

// 创建类型安全的 URL
const loginUrl = makeURL<paths, '/api/user/login', 'post'>('/api/user/login', 'post');
```

## 常见问题

### 1. 令牌认证失败

确保你的访问令牌是有效的，并且有项目的访问权限。

### 2. 项目 ID 错误

检查项目 ID 是否正确，确保你有该项目的访问权限。

### 3. 网络连接问题

确保网络连接正常，没有代理或防火墙限制。

## 下一步

- [命令行工具详细用法](./cli.md)
- [编程接口完整指南](./api.md)
- [TypeScript 类型安全工具](./typescript.md)
- [配置文件使用](./configuration.md)
- [故障排除指南](./troubleshooting.md)