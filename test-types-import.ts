// 测试类型导入
import { 
  makeURL, 
  type MakeURL, 
  type MakeRequest, 
  type MakeResponse,
  type InferMethodFromPaths 
} from '@shixinde/apifox-swagger/types'

// 测试类型是否可用
type TestPaths = {
  '/api/test': {
    get: {
      responses: {
        200: {
          content: {
            'application/json': { message: string }
          }
        }
      }
    }
  }
}

// 测试类型使用
type TestRequest = MakeRequest<TestPaths, '/api/test', 'get'>
type TestResponse = MakeResponse<TestPaths, '/api/test', 'get'>
type TestURL = MakeURL<TestPaths, '/api/test', 'get'>

// 测试函数调用
const testUrl = makeURL<TestPaths, '/api/test', 'get'>('/api/test', 'get')

console.log('Types import test successful')
console.log('Test URL:', testUrl)