# 命令行工具

`apifox-swagger` 提供了强大的命令行工具，支持多种导出模式和配置选项。

## 基本语法

```bash
apifox-swagger [选项]
```

## 命令行选项

### 必需选项

| 选项 | 类型 | 描述 | 示例 |
|------|------|------|------|
| `--projectId <id>` | string | Apifox 项目 ID | `--projectId 2364643` |
| `--outdir <path>` | string | 输出目录路径 | `--outdir ./output` |

### 认证选项

| 选项 | 类型 | 描述 | 示例 |
|------|------|------|------|
| `--token <token>` | string | 访问令牌（可选，优先级高于环境变量） | `--token abc123` |

### 导出范围选项

| 选项 | 类型 | 描述 | 示例 |
|------|------|------|------|
| `--folderId <id>` | string | 指定文件夹 ID | `--folderId 123456` |
| `--folderName <name>` | string | 指定文件夹名称 | `--folderName "用户模块"` |

### 其他选项

| 选项 | 类型 | 描述 | 示例 |
|------|------|------|------|
| `--local` | boolean | 从本地 Apifox 客户端导出 | `--local` |
| `--help` | boolean | 显示帮助信息 | `--help` |
| `--version` | boolean | 显示版本信息 | `--version` |

## 使用示例

### 1. 基本导出

导出整个项目的 API 文档：

```bash
apifox-swagger --projectId 2364643 --outdir ./output
```

### 2. 使用访问令牌

直接在命令中指定访问令牌：

```bash
apifox-swagger --projectId 2364643 --token your-access-token --outdir ./output
```

### 3. 导出指定文件夹

只导出特定文件夹的 API：

```bash
# 使用文件夹 ID
apifox-swagger --projectId 2364643 --folderId 123456 --outdir ./output

# 使用文件夹名称
apifox-swagger --projectId 2364643 --folderName "用户模块" --outdir ./output

# 同时指定文件夹 ID 和名称
apifox-swagger --projectId 2364643 --folderId 123456 --folderName "用户模块" --outdir ./output
```

### 4. 环境变量配合使用

设置环境变量后简化命令：

```bash
# 设置环境变量
export APIFOX_ACCESS_TOKEN=your-access-token
export APIFOX_PROJECT_ID=2364643

# 简化的命令
apifox-swagger --projectId $APIFOX_PROJECT_ID --outdir ./output
```

### 5. 在 package.json 中使用

将命令添加到 npm scripts：

```json
{
  "scripts": {
    "export-api": "apifox-swagger --projectId 2364643 --outdir ./src/types",
    "export-user-api": "apifox-swagger --projectId 2364643 --folderName \"用户模块\" --outdir ./src/types/user",
    "export-order-api": "apifox-swagger --projectId 2364643 --folderName \"订单模块\" --outdir ./src/types/order"
  }
}
```

然后使用 npm 运行：

```bash
npm run export-api
npm run export-user-api
npm run export-order-api
```

## 高级用法

### 1. 批量导出多个模块

创建批量导出脚本：

```bash
#!/bin/bash
# export-all.sh

echo "开始导出 API 文档..."

# 导出用户模块
apifox-swagger --projectId 2364643 --folderName "用户模块" --outdir ./src/types/user
echo "用户模块导出完成"

# 导出订单模块
apifox-swagger --projectId 2364643 --folderName "订单模块" --outdir ./src/types/order
echo "订单模块导出完成"

# 导出产品模块
apifox-swagger --projectId 2364643 --folderName "产品模块" --outdir ./src/types/product
echo "产品模块导出完成"

echo "所有模块导出完成！"
```

运行脚本：

```bash
chmod +x export-all.sh
./export-all.sh
```

### 2. 与 CI/CD 集成

在 GitHub Actions 中使用：

```yaml
# .github/workflows/export-api.yml
name: Export API Documentation

on:
  schedule:
    - cron: '0 2 * * *'  # 每天凌晨 2 点运行
  workflow_dispatch:     # 手动触发

jobs:
  export:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Export API documentation
        env:
          APIFOX_ACCESS_TOKEN: ${{ secrets.APIFOX_ACCESS_TOKEN }}
        run: |
          npx apifox-swagger --projectId 2364643 --outdir ./src/types
          
      - name: Commit changes
        run: |
          git config --local user.email "action@github.com"
          git config --local user.name "GitHub Action"
          git add .
          git diff --staged --quiet || git commit -m "Update API documentation"
          git push
```

### 3. 监听文件变化自动导出

使用 `nodemon` 监听配置文件变化：

```bash
# 安装 nodemon
npm install -g nodemon

# 监听 apifox.config.js 变化
nodemon --watch apifox.config.js --exec "npm run export-api"
```

## 错误处理

### 常见错误码

| 错误码 | 描述 | 解决方案 |
|--------|------|----------|
| `401` | 认证失败 | 检查访问令牌是否正确 |
| `403` | 权限不足 | 确保有项目访问权限 |
| `404` | 项目或文件夹不存在 | 检查项目 ID 和文件夹 ID |
| `500` | 服务器错误 | 稍后重试或联系支持 |

### 调试模式

启用详细日志输出：

```bash
# 设置调试环境变量
export DEBUG=apifox-swagger:*

# 运行命令
apifox-swagger --projectId 2364643 --outdir ./output
```

## 性能优化

### 1. 并行导出

对于大型项目，可以并行导出不同模块：

```bash
# 使用 GNU parallel（如果可用）
parallel -j 4 ::: \
  "apifox-swagger --projectId 2364643 --folderName '用户模块' --outdir ./types/user" \
  "apifox-swagger --projectId 2364643 --folderName '订单模块' --outdir ./types/order" \
  "apifox-swagger --projectId 2364643 --folderName '产品模块' --outdir ./types/product" \
  "apifox-swagger --projectId 2364643 --folderName '支付模块' --outdir ./types/payment"
```

### 2. 缓存策略

实现简单的缓存机制：

```bash
#!/bin/bash
# export-with-cache.sh

CACHE_FILE=".api-cache"
CURRENT_TIME=$(date +%s)
CACHE_DURATION=3600  # 1小时

if [ -f "$CACHE_FILE" ]; then
  CACHE_TIME=$(cat "$CACHE_FILE")
  TIME_DIFF=$((CURRENT_TIME - CACHE_TIME))
  
  if [ $TIME_DIFF -lt $CACHE_DURATION ]; then
    echo "使用缓存的 API 文档（${TIME_DIFF}秒前更新）"
    exit 0
  fi
fi

echo "导出新的 API 文档..."
apifox-swagger --projectId 2364643 --outdir ./output

if [ $? -eq 0 ]; then
  echo $CURRENT_TIME > "$CACHE_FILE"
  echo "API 文档导出完成并已缓存"
fi
```

## 下一步

- [编程接口使用](./api.md)
- [配置文件详解](./configuration.md)
- [TypeScript 类型工具](./typescript.md)
- [故障排除指南](./troubleshooting.md)