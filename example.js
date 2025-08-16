/**
 * @shixinde/apifox-swagger 使用示例
 * 
 * 这个示例展示了如何在项目中使用 @shixinde/apifox-swagger 包
 */

import { exportSwagger } from '@shixinde/apifox-swagger';

// 示例 1: 从 Apifox 云端导出 Swagger 文档
async function exportFromCloud() {
  try {
    const result = await exportSwagger({
      projectId: '2364643', // 替换为你的项目 ID
      token: 'your-apifox-access-token', // 替换为你的访问令牌
      outdir: './output', // 输出目录
      useLocal: false // 使用云端 API
    });
    
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

// 示例 2: 从本地 Apifox 客户端导出 Swagger 文档
async function exportFromLocal() {
  try {
    const result = await exportSwagger({
      outdir: './output', // 输出目录
      useLocal: true // 使用本地客户端
    });
    
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

// 示例 3: 使用环境变量配置
// 在 .env 文件中设置: APIFOX_ACCESS_TOKEN=your-token
async function exportWithEnvToken() {
  try {
    const result = await exportSwagger({
      projectId: process.env.APIFOX_PROJECT_ID,
      outdir: './output',
      useLocal: false
    });
    
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

// 运行示例
// exportFromCloud();
// exportFromLocal();
// exportWithEnvToken();