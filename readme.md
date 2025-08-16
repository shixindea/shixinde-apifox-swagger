# @shixinde/apifox-swagger

一个用于从 Apifox 导出 Swagger/OpenAPI 文档并生成 TypeScript 类型定义的工具。

## 功能特性

- 🚀 支持从 Apifox 云端 API 导出文档
- 🏠 支持从本地 Apifox 客户端导出文档
- 📝 自动生成 TypeScript 类型定义
- 🔧 支持命令行工具和编程接口
- ⚙️ 支持配置文件
- 🛠️ 自动处理 OpenAPI 格式兼容性

## 安装

```bash
npm install @shixinde/apifox-swagger
# 或
yarn add @shixinde/apifox-swagger
# 或
pnpm add @shixinde/apifox-swagger
```

## 使用方法

### 1. 命令行工具

安装后可以直接使用 `apifox-swagger` 命令：

#### 云端模式（推荐）

```bash
# 基本用法 - 导出整个项目
apifox-swagger apifox-swagger --projectId 2364643 --outdir ./output

# 导出指定文件夹
apifox-swagger apifox-swagger --projectId 2364643 --folderId 123456 --folderName "用户模块" --outdir ./output

# 使用 token 参数
apifox-swagger apifox-swagger --projectId 2364643 --outdir ./output --token your-access-token

# 或使用环境变量
APIFOX_ACCESS_TOKEN=your-token apifox-swagger apifox-swagger --projectId 2364643 --outdir ./output
```

#### 本地模式

```bash
# 从本地 Apifox 客户端导出（需要 Apifox 客户端运行）
apifox-swagger apifox-swagger --local --outdir ./output

# 诊断本地客户端状态
./diagnose-local.sh
```

#### 命令行选项

- `--projectId <projectId>`: Apifox 项目 ID（云端导出时必需）
- `--outdir <outdir>`: 输出目录（默认：`./apifox`）
- `--token <token>`: 访问令牌（可替代环境变量）
- `--local`: 从本地 Apifox 客户端导出
- `--folderId <folderId>`: 指定文件夹 ID
- `--folderName <folderName>`: 指定文件夹名称

### 2. 编程接口

#### 基本用法

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';

// 从云端导出
const result = await exportSwagger({
  projectId: '2364643',
  token: 'your-access-token',
  outdir: './output',
  useLocal: false
});

// 从本地客户端导出
const result = await exportSwagger({
  outdir: './output',
  useLocal: true
});
```

#### 使用配置文件

创建 `apifox.config.js`：

```javascript
export default {
  projectId: '2364643',
  outdir: './src/types',
  useLocal: false,
  // token: 'your-token', // 可选，也可通过环境变量设置
};
```

创建导出脚本 `scripts/export-api.js`：

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';
import config from '../apifox.config.js';

async function runExport() {
  try {
    const result = await exportSwagger({
      ...config,
      token: config.token || process.env.APIFOX_ACCESS_TOKEN
    });
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

runExport();
```

在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "export-api": "node scripts/export-api.js"
  }
}
```

### 3. 环境变量

可以通过环境变量设置访问令牌：

```bash
export APIFOX_ACCESS_TOKEN=your-access-token
```

或在 `.env` 文件中：

```
APIFOX_ACCESS_TOKEN=your-access-token
APIFOX_PROJECT_ID=2364643
```

## 输出文件

工具会在指定的输出目录下创建 `swagger` 文件夹，包含：

- `all.json`: OpenAPI/Swagger JSON 文档
- `all.ts`: TypeScript 类型定义文件

如果指定了文件夹名称，文件名会使用文件夹名称替代 `all`。

## API 参考

### exportSwagger(options)

导出 Swagger 文档的主要函数。

#### 参数

- `options.projectId` (string): Apifox 项目 ID（云端导出时必需）
- `options.token` (string): 访问令牌（可选，优先级高于环境变量）
- `options.outdir` (string): 输出目录
- `options.useLocal` (boolean): 是否使用本地客户端（默认：false）
- `options.folderId` (string): 文件夹 ID（可选）
- `options.folderName` (string): 文件夹名称（可选）

#### 返回值

返回一个 Promise，解析为包含导出信息的对象。

## 获取 Apifox 访问令牌

1. 登录 [Apifox 网页版](https://www.apifox.cn/)
2. 进入个人设置 → API 访问令牌
3. 创建新的访问令牌
4. 复制令牌并妥善保存

## 获取项目 ID

1. 在 Apifox 中打开你的项目
2. 查看浏览器地址栏，URL 中包含项目 ID
3. 例如：`https://www.apifox.cn/web/project/2364643` 中的 `2364643` 就是项目 ID

## 故障排除

### 本地模式问题

如果本地模式导出失败，请按以下步骤排查：

1. **运行诊断脚本**：
   ```bash
   ./diagnose-local.sh
   ```

2. **确保 Apifox 客户端正确配置**：
   - Apifox 客户端正在运行
   - 已打开至少一个项目
   - 项目中有 API 接口定义
   - 本地 API 服务已启用（端口 4523-4527）

3. **查看详细文档**：
   ```bash
   cat LOCAL_USAGE.md
   ```

4. **常见解决方案**：
   - 重启 Apifox 应用程序
   - 确保项目中至少有一个 API 接口
   - 检查防火墙是否阻止本地连接

### 云端模式问题

1. **检查访问令牌**：
   - 确保 `APIFOX_ACCESS_TOKEN` 环境变量已设置
   - 或使用 `--token` 参数传递令牌

2. **检查项目信息**：
   - 验证项目 ID 是否正确
   - 确保有项目访问权限

3. **网络连接**：
    - 验证网络连接是否正常
    - 检查是否有代理或防火墙限制
    - 确保有项目的访问权限

### TypeScript 类型生成失败

1. 检查 OpenAPI 文档格式是否正确
2. 确保安装了所有必需的依赖

## 许可证

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！