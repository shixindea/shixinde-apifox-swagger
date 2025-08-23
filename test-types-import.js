// 测试类型导入
import { makeURL } from '@shixinde/apifox-swagger/types';
// 测试函数调用
const testUrl = makeURL('/api/test', 'get');
console.log('Types import test successful');
console.log('Test URL:', testUrl);
