

#!/bin/bash

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 开始执行打包和发布流程...${NC}"

# 1. 执行构建
echo -e "${YELLOW}📦 正在执行构建...${NC}"
npx vite build

if [ $? -ne 0 ]; then
    echo -e "${RED}😭😭😭 构建失败！${NC}"
    exit 1
fi

echo -e "${GREEN}✅ 构建成功！${NC}"

# 2. 添加文件到 git
echo -e "${YELLOW}📝 添加文件到 git...${NC}"
git add .

if [ $? -ne 0 ]; then
    echo -e "${RED}😭😭😭 git add 失败！${NC}"
    exit 1
fi

# 3. 提交代码
echo -e "${YELLOW}💾 提交代码...${NC}"
git commit -m "update:更新文档$(date +%F\ %T)"

if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️  没有新的更改需要提交${NC}"
else
    echo -e "${GREEN}😀😀😀 💨💨💨 commit成功${NC}"
fi

# 4. 推送代码
echo -e "${YELLOW}🚀 推送代码到远程仓库...${NC}"
git push

if [ $? -eq 0 ]; then
    echo -e "${GREEN}😀😀😀 💨 Push 成功！${NC}"
else
    echo -e "${RED}😭😭😭 💨 Push 失败！${NC}"
    exit 1
fi

echo -e "${GREEN}🎉 所有操作完成！${NC}"