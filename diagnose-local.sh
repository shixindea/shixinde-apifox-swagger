#!/bin/bash

# Apifox 本地客户端诊断脚本
# 用于检查本地 Apifox 客户端是否正确配置并可以导出 API 文档

echo "🔍 Apifox 本地客户端诊断工具"
echo "================================="
echo ""

# 检查 Apifox 进程
echo "1. 检查 Apifox 进程..."
apifox_processes=$(ps aux | grep -i apifox | grep -v grep)
if [ -n "$apifox_processes" ]; then
    echo "✅ Apifox 客户端正在运行"
    echo "进程信息:"
    echo "$apifox_processes" | head -2
else
    echo "❌ Apifox 客户端未运行"
    echo "请启动 Apifox 桌面应用程序"
    exit 1
fi
echo ""

# 检查端口连接
echo "2. 检查本地 API 端口..."
ports=(4523 4524 4525 4526 4527)
active_port=""

for port in "${ports[@]}"; do
    echo -n "   端口 $port: "
    if nc -z localhost $port 2>/dev/null; then
        echo "✅ 可连接"
        active_port=$port
        break
    else
        echo "❌ 无法连接"
    fi
done

if [ -z "$active_port" ]; then
    echo "❌ 所有默认端口都无法连接"
    echo "请检查 Apifox 设置中的本地服务端口配置"
    exit 1
fi
echo ""

# 检查 API 导出端点
echo "3. 检查 API 导出功能..."
echo "使用端口: $active_port"

found_project=false
for i in {0..10}; do
    echo -n "   项目索引 $i: "
    response=$(curl -s --connect-timeout 3 "http://localhost:$active_port/export/openapi/$i?version=3.0")
    http_code=$(curl -s --connect-timeout 3 -o /dev/null -w "%{http_code}" "http://localhost:$active_port/export/openapi/$i?version=3.0")
    
    if [ "$http_code" = "200" ] && [ -n "$response" ] && [ "$response" != "null" ]; then
        echo "✅ 找到项目数据"
        echo "     响应长度: $(echo "$response" | wc -c) 字符"
        # 检查是否是有效的 JSON
        if echo "$response" | jq . >/dev/null 2>&1; then
            echo "     ✅ 有效的 JSON 格式"
            # 检查是否包含 OpenAPI 结构
            if echo "$response" | jq -e '.openapi or .swagger' >/dev/null 2>&1; then
                echo "     ✅ 包含 OpenAPI/Swagger 结构"
                found_project=true
                break
            else
                echo "     ⚠️  不是 OpenAPI/Swagger 格式"
            fi
        else
            echo "     ❌ 无效的 JSON 格式"
        fi
    elif [ "$http_code" = "204" ]; then
        echo "❌ 无内容 (可能没有项目或 API)"
    elif [ "$http_code" = "404" ]; then
        echo "❌ 端点不存在"
    else
        echo "❌ HTTP $http_code"
    fi
done
echo ""

# 总结
echo "4. 诊断结果"
echo "============"
if [ "$found_project" = true ]; then
    echo "✅ 本地 Apifox 客户端配置正确，可以导出 API 文档"
    echo ""
    echo "建议的导出命令:"
    echo "apifox-swagger apifox-swagger --local --outdir ./output"
else
    echo "❌ 本地 Apifox 客户端无法提供 API 文档"
    echo ""
    echo "可能的原因:"
    echo "- Apifox 中没有打开任何项目"
    echo "- 项目中没有定义任何 API 接口"
    echo "- Apifox 版本不支持本地 API 导出"
    echo "- 需要在 Apifox 设置中启用本地 API 服务"
    echo ""
    echo "建议的解决步骤:"
    echo "1. 在 Apifox 中打开或创建一个项目"
    echo "2. 确保项目中至少有一个 API 接口"
    echo "3. 检查 Apifox 设置中的本地服务配置"
    echo "4. 重新运行此诊断脚本"
fi
echo ""

# 提供额外信息
echo "5. 额外信息"
echo "============"
echo "如果问题仍然存在，请尝试:"
echo "- 重启 Apifox 应用程序"
echo "- 使用云端模式: apifox-swagger apifox-swagger --projectId YOUR_PROJECT_ID --outdir ./output"
echo "- 查看详细文档: cat LOCAL_USAGE.md"
echo ""
echo "诊断完成。"