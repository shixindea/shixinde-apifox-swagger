# 构建和发布脚本使用说明

本项目提供了两个主要的脚本来简化构建和发布流程：

## 📦 构建和提交脚本 (release.sh)

### 使用方法
```bash
# 方式一：直接运行脚本
./release.sh

# 方式二：通过 pnpm 命令
pnpm build
# 或
pnpm release
```

### 功能说明
该脚本会自动执行以下操作：
1. 🏗️ 使用 Vite 构建项目
2. 📝 将所有更改添加到 Git
3. 💾 提交代码（自动生成时间戳）
4. 🚀 推送到远程仓库

### 提交信息格式
```
update:更新文档2025-08-16 22:59:28
```

## 📤 NPM 发布脚本 (publish.sh)

### 使用方法
```bash
# 方式一：直接运行脚本
./publish.sh

# 方式二：通过 pnpm 命令
pnpm publish
```

### 功能说明
该脚本会自动执行以下操作：
1. 🧹 清理 dist 目录
2. 🏗️ 使用 Vite 构建项目
3. 🔢 自动更新版本号（patch 版本）
4. 📤 发布到 NPM 仓库

## 🎯 推荐工作流程

### 日常开发
```bash
# 开发完成后，构建并提交代码
pnpm build
```

### 发布新版本
```bash
# 发布到 NPM
pnpm publish
```

## ⚠️ 注意事项

1. **权限要求**：确保脚本有执行权限
   ```bash
   chmod +x release.sh
   chmod +x publish.sh
   ```

2. **Git 配置**：确保已配置 Git 用户信息
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

3. **NPM 登录**：发布前确保已登录 NPM
   ```bash
   npm login
   ```

4. **远程仓库**：确保已配置远程仓库
   ```bash
   git remote -v
   ```

## 🔧 自定义配置

如果需要修改提交信息格式或其他行为，可以直接编辑对应的脚本文件：
- `release.sh` - 构建和提交脚本
- `publish.sh` - NPM 发布脚本

## 🎨 输出样式

脚本使用彩色输出来提供清晰的状态反馈：
- 🟡 黄色：进行中的操作
- 🟢 绿色：成功完成的操作
- 🔴 红色：失败的操作
- ⚠️ 橙色：警告信息