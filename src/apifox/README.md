# Apifox API 文档导出工具

## 概述

`apifox` 模块是一个专门用于从 Apifox 平台导出 Swagger/OpenAPI 文档并生成 TypeScript 类型定义的工具。它支持从本地 Apifox 客户端和云端 API 两种方式获取文档。

## 主要功能

### 1. 本地文档获取
- 从本地运行的 Apifox 客户端获取 Swagger 文档
- 自动检测常用端口和主机地址
- 支持多项目 ID 批量获取

### 2. 云端文档获取
- 通过 Apifox 云端 API 获取项目文档
- 支持指定文件夹范围导出
- 需要配置访问令牌

### 3. TypeScript 类型生成
- 自动将 Swagger 文档转换为 TypeScript 类型定义
- 生成 `.d.ts` 文件供项目使用
- 保持类型安全和代码提示

## 核心函数

### `fetchSwaggerLocal(projectIds)`

从本地 Apifox 客户端获取 Swagger 文档。

**参数：**
- `projectIds` (string[]): 项目 ID 数组

**返回值：**
- `Promise<object | null>`: Swagger 文档对象或 null

**示例：**
```javascript
const swagger = await fetchSwaggerLocal(['project-id-1', 'project-id-2']);
```

### `fetchSwagger(projectId, folderId?)`

从 Apifox 云端 API 获取 Swagger 文档。

**参数：**
- `projectId` (string): 项目 ID
- `folderId` (string, 可选): 文件夹 ID，用于限制导出范围

**返回值：**
- `Promise<object>`: Swagger 文档对象

**环境变量要求：**
- `APIFOX_ACCESS_TOKEN`: Apifox 访问令牌

**示例：**
```javascript
// 导出整个项目
const swagger = await fetchSwagger('project-id');

// 导出指定文件夹
const swagger = await fetchSwagger('project-id', 'folder-id');
```

### `exportSwagger(projectId, outputDir, folderId?, name?)`

导出 Swagger 文档并生成 TypeScript 类型定义文件。

**参数：**
- `projectId` (string): 项目 ID
- `outputDir` (string): 输出目录路径
- `folderId` (string, 可选): 文件夹 ID
- `name` (string, 可选): 输出文件名前缀，默认为 'swagger'

**输出文件：**
- `{name}.json`: Swagger 文档 JSON 文件
- `{name}.d.ts`: TypeScript 类型定义文件

**示例：**
```javascript
// 基本用法
await exportSwagger('project-id', './api');
// 生成: ./api/swagger.json 和 ./api/swagger.d.ts

// 自定义文件名
await exportSwagger('project-id', './api', undefined, 'user-api');
// 生成: ./api/user-api.json 和 ./api/user-api.d.ts

// 导出指定文件夹
await exportSwagger('project-id', './api', 'folder-id', 'auth-api');
```

## 使用场景

1. **前端开发**: 自动生成 API 类型定义，提供类型安全和代码提示
2. **CI/CD 集成**: 在构建流程中自动更新 API 文档和类型
3. **团队协作**: 确保前后端 API 接口定义同步
4. **文档管理**: 将 Apifox 文档集成到项目中

## 注意事项

1. **本地客户端**: 使用 `fetchSwaggerLocal` 时需要确保 Apifox 客户端正在运行
2. **访问令牌**: 使用云端 API 时必须配置 `APIFOX_ACCESS_TOKEN` 环境变量
3. **网络连接**: 云端 API 调用需要稳定的网络连接
4. **文件权限**: 确保输出目录具有写入权限
5. **项目 ID**: 需要从 Apifox 项目设置中获取正确的项目 ID

## 依赖项

- `fs-extra`: 文件系统操作
- `openapi-typescript`: OpenAPI 到 TypeScript 转换
- `tiny-invariant`: 参数验证
- `undici`: HTTP 客户端