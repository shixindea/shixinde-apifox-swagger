#!/bin/bash

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 开始执行 npm 发布流程...${NC}"

# 1. 清理 dist 目录
echo -e "${YELLOW}🧹 清理 dist 目录...${NC}"
rm -rf dist

# 2. 执行构建
echo -e "${YELLOW}📦 正在执行构建...${NC}"
npx vite build

if [ $? -ne 0 ]; then
    echo -e "${RED}😭😭😭 构建失败！${NC}"
    exit 1
fi

echo -e "${GREEN}✅ 构建成功！${NC}"

# 3. 提交构建文件
echo -e "${YELLOW}📝 提交构建文件...${NC}"
git add .
git diff --staged --quiet || git commit -m "build: 构建文件更新 $(date +%F\ %T)"
