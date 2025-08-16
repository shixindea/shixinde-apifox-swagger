/**
 * Apifox Swagger 导出配置文件示例
 * 
 * 用户可以在项目根目录创建此配置文件，然后通过脚本调用
 */

export default {
  // Apifox 项目 ID（必需，当使用云端 API 时）
  projectId: '2364643',
  
  // 访问令牌（可选，也可以通过环境变量 APIFOX_ACCESS_TOKEN 设置）
  // token: 'your-apifox-access-token',
  
  // 输出目录（必需）
  outdir: './src/types',
  
  // 是否使用本地 Apifox 客户端（可选，默认 false）
  useLocal: false,
  
  // 其他可选配置
  options: {
    // 生成的文件名前缀
    filePrefix: 'api-',
    
    // 是否生成 TypeScript 类型定义
    generateTypes: true,
    
    // 是否生成 JSON 文件
    generateJson: true
  }
};