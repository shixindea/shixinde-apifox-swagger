import { exportSwagger } from '@shixinde/apifox-swagger';
import config from '../apifox.config.js';

async function runExport() {
  try {
    // 测试云端模式
    const result = await exportSwagger({
      ...config,
      useLocal: false, // 使用云端模式
      token: "APS-8y8U8vDaqRHHSXGdcl7nhmuYJLzMahiU" // 使用用户提供的 token
    });
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

runExport();