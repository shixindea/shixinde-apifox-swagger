/**
 * 使用配置文件运行 Apifox Swagger 导出的脚本示例
 * 
 * 用户可以将此脚本复制到自己的项目中使用
 */

import { exportSwagger } from '@shixinde/apifox-swagger';
import config from './apifox.config.js';

async function runExport() {
  try {
    console.log('开始导出 Apifox Swagger 文档...');
    console.log('配置:', config);
    
    const result = await exportSwagger({
      projectId: config.projectId,
      token: config.token || process.env.APIFOX_ACCESS_TOKEN,
      outdir: config.outdir,
      useLocal: config.useLocal || false
    });
    
    console.log('✅ 导出成功!');
    console.log('生成的文件:', result);
    
  } catch (error) {
    console.error('❌ 导出失败:', error.message);
    process.exit(1);
  }
}

// 运行导出
runExport();