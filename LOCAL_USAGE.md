# 本地 Apifox 客户端导出使用指南

## 概述

本工具支持从本地运行的 Apifox 客户端直接导出 API 文档，无需使用云端 API 和访问令牌。

## 前置条件

### 1. 确保 Apifox 客户端正在运行

- 启动 Apifox 桌面应用程序
- 确保应用程序完全加载完成
- **重要：必须打开或创建至少一个项目，并确保项目中有 API 接口**
- 确保项目处于活跃状态（在 Apifox 界面中可以看到项目内容）

### 2. 检查 Apifox 本地 API 服务

Apifox 客户端会在本地启动一个 HTTP 服务，默认监听以下端口之一：
- 4523 (主要端口)
- 4524
- 4525
- 4526
- 4527

## 使用方法

### 基本命令

```bash
# 从本地 Apifox 客户端导出所有项目
apifox-swagger apifox-swagger --local --outdir ./output
```

### 命令参数说明

- `--local`: 启用本地模式，从 Apifox 客户端获取数据
- `--outdir <目录>`: 指定输出目录（可选，默认为 `./apifox-swagger/apifox`）

### 输出文件

成功执行后，会在指定目录下生成：
- `swagger/all.json`: OpenAPI/Swagger JSON 格式文档
- `swagger/all.ts`: TypeScript 类型定义文件

## 故障排除

### 常见错误及解决方案

#### 1. "Failed to fetch swagger from local Apifox client"

**原因：**
- Apifox 客户端未运行
- Apifox 客户端未完全启动
- 没有打开任何项目
- 项目中没有 API 接口
- 本地 API 服务未启动
- Apifox 版本不支持本地 API 导出

**解决方案：**
1. 确保 Apifox 客户端正在运行
2. 在 Apifox 中打开或创建一个项目
3. **确保项目中至少有一个 API 接口**
4. 等待应用程序完全加载
5. 检查 Apifox 版本是否支持本地 API 导出功能
6. 重新执行命令

#### 2. 连接超时

**原因：**
- 网络防火墙阻止本地连接
- Apifox 使用了非默认端口

**解决方案：**
1. 检查防火墙设置，允许本地连接
2. 在 Apifox 设置中查看实际使用的端口
3. 确保没有其他程序占用相关端口

### 调试步骤

1. **检查 Apifox 是否运行：**
   ```bash
   # 检查进程
   ps aux | grep -i apifox
   ```

2. **检查端口占用：**
   ```bash
   # 检查默认端口是否被占用
   lsof -i :4523
   lsof -i :4524
   lsof -i :4525
   ```

3. **手动测试连接：**
   ```bash
   # 测试本地 API 是否可访问
   curl http://localhost:4523/export/openapi/0?version=3.0
   ```

## 工作原理

本工具通过以下步骤获取本地数据：

1. 遍历可能的主机地址（127.0.0.1, localhost）
2. 遍历可能的端口（4523-4527）
3. 尝试连接到 Apifox 本地 API 端点
4. 获取 OpenAPI 格式的文档数据
5. 转换为 TypeScript 类型定义
6. 保存到指定目录

## 与云端模式的区别

| 特性 | 本地模式 | 云端模式 |
|------|----------|----------|
| 需要网络 | 否 | 是 |
| 需要访问令牌 | 否 | 是 |
| 需要项目 ID | 否 | 是 |
| 数据来源 | 本地客户端 | Apifox 云端 API |
| 实时性 | 实时 | 取决于云端同步 |

## 注意事项

1. **确保 Apifox 版本兼容：** 本功能需要较新版本的 Apifox 客户端支持
2. **项目必须打开：** Apifox 客户端中必须有打开的项目
3. **权限要求：** 确保有足够的文件系统权限写入输出目录
4. **防火墙设置：** 某些安全软件可能阻止本地端口访问

## 示例

```bash
# 导出到当前目录的 output 文件夹
apifox-swagger apifox-swagger --local --outdir ./output

# 导出到自定义目录
apifox-swagger apifox-swagger --local --outdir /path/to/my/docs

# 使用默认输出目录
apifox-swagger apifox-swagger --local
```

执行成功后的输出示例：
```
Fetching apifox client from local Apifox application...
Trying to connect to local Apifox client on hosts: 127.0.0.1, localhost and ports: 4523, 4524, 4525, 4526, 4527
Checking 127.0.0.1:4523...
Trying URL: http://127.0.0.1:4523/export/openapi/0?version=3.0
Response status: 200
Successfully fetched swagger from http://127.0.0.1:4523/export/openapi/0?version=3.0
Swagger format: 3.0.0
Exported swagger [json] to ./output/swagger/all.json
Exported swagger [type] to ./output/swagger/all.ts
```