# 云端 API 读取（需要 APIFOX_ACCESS_TOKEN）
APIFOX_ACCESS_TOKEN=your_token node test-cli.js apifox-swagger --projectId <项目ID> --outdir ./output

# 本地读取（需要运行 Apifox 客户端）
node test-cli.js apifox-swagger --local --outdir ./output

