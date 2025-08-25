# @shixinde/apifox-swagger

一个用于从 Apifox 导出 Swagger/OpenAPI 文档并生成 TypeScript 类型定义的工具。

## 功能特性

- 🚀 支持从 Apifox 云端 API 导出文档
- 🏠 支持从本地 Apifox 客户端导出文档
- 📝 自动生成 TypeScript 类型定义
- 🔧 支持命令行工具和编程接口
- ⚙️ 支持配置文件
- 🛠️ 自动处理 OpenAPI 格式兼容性

## 安装

```bash
npm install @shixinde/apifox-swagger
# 或
yarn add @shixinde/apifox-swagger
# 或
pnpm add @shixinde/apifox-swagger
```

## 使用方法

### 1. 命令行工具

安装后可以直接使用 `apifox-swagger` 命令：

#### 云端模式（推荐）

```bash
# 基本用法 - 导出整个项目
apifox-swagger apifox-swagger --projectId 266643 --outdir ./output

# 导出指定文件夹
apifox-swagger apifox-swagger --projectId 266643 --folderId 123456 --folderName "用户模块" --outdir ./output

# 使用 token 参数
apifox-swagger apifox-swagger --projectId 266643 --outdir ./output --token your-access-token

# 生成类型安全的 API 工具
apifox-swagger apifox-swagger --projectId 266643 --outdir ./output --types

# 或使用环境变量
APIOFX_ACCESS_TOKEN=your-token apifox-swagger apifox-swagger --projectId 266643 --outdir ./output --types
```

<!-- #### 本地模式（）

```bash
# 从本地 Apifox 客户端导出（需要 Apifox 客户端运行）
apifox-swagger apifox-swagger --local --outdir ./output

# 诊断本地客户端状态
./diagnose-local.sh
``` -->

#### 命令行选项

- `--projectId <projectId>`: Apifox 项目 ID（云端导出时必需）
- `--outdir <outdir>`: 输出目录（默认：`./apifox`）
- `--token <token>`: 访问令牌（可替代环境变量）
- `--local`: 从本地 Apifox 客户端导出
- `--folderId <folderId>`: 指定文件夹 ID
- `--folderName <folderName>`: 指定文件夹名称
<!-- - `--types`: 生成类型安全的 API 工具（生成 types 文件夹） -->

### 2. 编程接口

#### 基本用法

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';

// 从云端导出
const result = await exportSwagger({
  projectId: '266643',
  token: 'your-access-token',
  outdir: './output',
  useLocal: false
});

// 从云端导出并生成类型文件
const result = await exportSwagger({
  projectId: '266643',
  token: 'your-access-token',
  outdir: './output',
  useLocal: false,
  // generateTypes: true
});

// 从本地客户端导出
const result = await exportSwagger({
  outdir: './output',
  useLocal: true
});
```

#### 使用配置文件

创建 `apifox.config.js`：

```javascript
export default {
  projectId: '266643',
  outdir: './src/types',
  useLocal: false,
  // token: 'your-token', // 可选，也可通过环境变量设置
};
```

创建导出脚本 `scripts/export-api.js`：

```javascript
import { exportSwagger } from '@shixinde/apifox-swagger';
import config from '../apifox.config.js';

async function runExport() {
  try {
    const result = await exportSwagger({
      ...config,
      token: config.token || process.env.APIFOX_ACCESS_TOKEN
    });
    console.log('导出成功:', result);
  } catch (error) {
    console.error('导出失败:', error.message);
  }
}

runExport();
```

在 `package.json` 中添加脚本：

```json
{
  "scripts": {
    "export-api": "node scripts/export-api.js"
  }
}
```

### 3. 环境变量

可以通过环境变量设置访问令牌：

```bash
export APIFOX_ACCESS_TOKEN=your-access-token
```

或在 `.env` 文件中：

```
APIFOX_ACCESS_TOKEN=your-access-token
APIFOX_PROJECT_ID=266643
```

## 输出文件

工具会在指定的输出目录下创建 `swagger` 文件夹，包含：

- `all.json`: OpenAPI/Swagger JSON 文档
- `all.ts`: TypeScript 类型定义文件

<!-- 如果启用了 `--types` 选项或 `generateTypes: true`，还会创建 `types` 文件夹，包含： -->

- `index.ts`: 类型安全的 API 工具，包含 `makeURL` 函数和相关类型定义

如果指定了文件夹名称，文件名会使用文件夹名称替代 `all`。

## API 参考

### exportSwagger(options)

导出 Swagger 文档的主要函数。

#### 参数

- `options.projectId` (string): Apifox 项目 ID（云端导出时必需）
- `options.token` (string): 访问令牌（可选，优先级高于环境变量）
- `options.outdir` (string): 输出目录
- `options.useLocal` (boolean): 是否使用本地客户端（默认：false）
- `options.folderId` (string): 文件夹 ID（可选）
- `options.folderName` (string): 文件夹名称（可选）
<!-- - `options.generateTypes` (boolean): 是否生成类型安全的 API 工具（默认：false） -->

#### 返回值

返回一个 Promise，解析为包含导出信息的对象。

## 获取 Apifox 访问令牌

1. 登录 [Apifox 网页版](https://www.apifox.cn/)
2. 进入个人设置 → API 访问令牌
3. 创建新的访问令牌
4. 复制令牌并妥善保存

## 获取项目 ID

1. 在 Apifox 中打开你的项目
2. 查看浏览器地址栏，URL 中包含项目 ID
3. 例如：`https://www.apifox.cn/web/project/266643` 中的 `266643` 就是项目 ID

## 故障排除

<!-- ### 本地模式问题

如果本地模式导出失败，请按以下步骤排查：

1. **运行诊断脚本**：
   ```bash
   ./diagnose-local.sh
   ```

2. **确保 Apifox 客户端正确配置**：
   - Apifox 客户端正在运行
   - 已打开至少一个项目
   - 项目中有 API 接口定义
   - 本地 API 服务已启用（端口 4523-4527）

3. **查看详细文档**：
   ```bash
   cat LOCAL_USAGE.md
   ```

4. **常见解决方案**：
   - 重启 Apifox 应用程序
   - 确保项目中至少有一个 API 接口
   - 检查防火墙是否阻止本地连接 -->

### 云端模式问题

1. **检查访问令牌**：
   - 确保 `APIFOX_ACCESS_TOKEN` 环境变量已设置
   - 或使用 `--token` 参数传递令牌

2. **检查项目信息**：
   - 验证项目 ID 是否正确
   - 确保有项目访问权限

3. **网络连接**：
    - 验证网络连接是否正常
    - 检查是否有代理或防火墙限制
    - 确保有项目的访问权限

### TypeScript 类型生成失败

1. 检查 OpenAPI 文档格式是否正确
2. 确保安装了所有必需的依赖

<!-- ## 类型安全的 API 工具

### 功能介绍

通过 `--types` 选项或 `generateTypes: true` 参数，工具会生成类型安全的 API 工具，让你可以：

- 🔒 **类型安全**：自动推断请求参数和响应数据的类型
- 🚀 **智能提示**：IDE 中获得完整的类型提示和自动补全
- 🛡️ **编译时检查**：在编译阶段发现类型错误，避免运行时问题
- 📝 **自动文档**：类型即文档，无需额外维护

### 配置类型导出

在项目根目录创建 `apifox.config.js` 配置文件：

```javascript
export default {
  projectId: '266643',
  outdir: './src/types',
  
  // 类型导出配置
  types: {
    // 类型文件输出目录
    outdir: './src/swagger',
    
    // 类型文件名（不包含扩展名）
    filename: 'all'
  }
};
``` -->

### 基本用法

```bash
# 生成类型文件
apifox-swagger apifox-swagger --projectId 266643 --outdir ./output --types
```

#### 单个类型文件使用

```typescript
// 1. 导入生成的 paths 类型
import type { paths } from '../swagger/all'

// 2. 导入类型工具
import { 
  makeURL, 
  type MakeURL, 
  type MakeRequest, 
  type MakeResponse,
  type InferMethodFromPaths 
} from '@shixinde/apifox-swagger/types'

// 3. 创建类型安全的 URL（传入 paths 类型）
const orderUrl = makeURL<paths, '/api/omo/course/order/new', 'post'>('/api/omo/course/order/new', 'post')

// 4. 提取类型信息
type OrderAPI = MakeURL<paths, '/api/omo/course/order/new', 'post'>
type RequestData = OrderAPI['jsonData']     // 请求体类型
type ResponseData = OrderAPI['responseData'] // 响应体类型
type QueryParams = OrderAPI['query']        // 查询参数类型
type PathParams = OrderAPI['pathParams']    // 路径参数类型
```

#### 多个类型文件使用

如果你有多个 API 模块，可以配置多个类型文件：

```javascript
// apifox.config.js
export default {
  types: {
    outdir: './src/swagger',
    // 多个类型文件配置
    files: [
      { filename: 'user', projectId: '266643' },
      { filename: 'order', projectId: '2364644' },
      { filename: 'product', projectId: '2364645' }
    ]
  }
};
```

##### 方式一：统一类型导入（推荐）

为了简化使用，建议创建一个统一的类型导入文件：

```typescript
// src/types/api.ts - 创建统一的类型导入文件
import type { paths as UserPaths } from '../swagger/user'
import type { paths as OrderPaths } from '../swagger/order'
import type { paths as ProductPaths } from '../swagger/product'

// 合并所有 API 路径类型
export type AllPaths = UserPaths & OrderPaths & ProductPaths

// 重新导出工具类型
export { 
  makeURL, 
  type MakeURL, 
  type MakeRequest, 
  type MakeResponse,
  type InferMethodFromPaths 
} from '@shixinde/apifox-swagger/types'
```

然后在业务代码中直接使用：

```typescript
// 在业务代码中使用
import { makeURL, type MakeURL, type AllPaths } from '../types/api'

// 现在可以直接使用所有 API 路径，无需指定具体的 paths 类型
const userLogin = makeURL<AllPaths, '/api/user/login', 'post'>('/api/user/login', 'post')
const orderCreate = makeURL<AllPaths, '/api/order/create', 'post'>('/api/order/create', 'post')
const productList = makeURL<AllPaths, '/api/product/list', 'get'>('/api/product/list', 'get')

// 类型推断也会正常工作
type UserLoginAPI = MakeURL<AllPaths, '/api/user/login', 'post'>
type OrderCreateAPI = MakeURL<AllPaths, '/api/order/create', 'post'>
type ProductListAPI = MakeURL<AllPaths, '/api/product/list', 'get'>
```

##### 方式二：分别导入

如果需要明确区分不同模块的类型，也可以分别导入：

```typescript
// 分别导入不同模块的类型
import type { paths as UserPaths } from '../swagger/user'
import type { paths as OrderPaths } from '../swagger/order'
import type { paths as ProductPaths } from '../swagger/product'

import { 
  makeURL, 
  type MakeURL, 
  type MakeRequest, 
  type MakeResponse 
} from '@shixinde/apifox-swagger/types'

// 用户相关 API
type UserLoginAPI = MakeURL<UserPaths, '/api/user/login', 'post'>
const userLogin = makeURL<UserPaths, '/api/user/login', 'post'>('/api/user/login', 'post')

// 订单相关 API
type OrderCreateAPI = MakeURL<OrderPaths, '/api/order/create', 'post'>
const orderCreate = makeURL<OrderPaths, '/api/order/create', 'post'>('/api/order/create', 'post')

// 产品相关 API
type ProductListAPI = MakeURL<ProductPaths, '/api/product/list', 'get'>
const productList = makeURL<ProductPaths, '/api/product/list', 'get'>('/api/product/list', 'get')
```

### 高级用法

#### 1. 创建类型安全的 API 客户端

```typescript
// 使用统一的类型导入
import { 
  makeURL, 
  type MakeRequest, 
  type MakeResponse, 
  type InferMethodFromPaths,
  type AllPaths 
} from '../types/api'

// 通用 API 调用函数
function apiCall<
  U extends keyof AllPaths,
  M extends InferMethodFromPaths<AllPaths, U>
>(
  url: U,
  method: M,
  data?: MakeRequest<AllPaths, U, M>
): Promise<MakeResponse<AllPaths, U, M>> {
  // 实现 API 调用逻辑
  return fetch(url, {
    method: method as string,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data?.jsonData ? JSON.stringify(data.jsonData) : undefined,
  }).then(res => res.json())
}

// 使用示例
async function createOrder() {
  const result = await apiCall('/api/omo/course/order/new', 'post', {
    jsonData: {
      // 这里会有完整的类型提示
      courseId: '123',
      quantity: 1
    }
  })
  
  // result 也有正确的类型
  console.log(result.orderId)
}
```

#### 2. React Hook 集成

```typescript
import { useState, useEffect } from 'react'
import { 
  makeURL, 
  type MakeRequest, 
  type MakeResponse, 
  type InferMethodFromPaths,
  type AllPaths 
} from '../types/api'

function useAPI<U extends keyof AllPaths, M extends InferMethodFromPaths<AllPaths, U>>(
  url: U,
  method: M,
  data?: MakeRequest<AllPaths, U, M>
) {
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<MakeResponse<AllPaths, U, M> | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    apiCall(url, method, data)
      .then(setResult)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [url, method, data])

  return { loading, result, error }
}

// 在组件中使用
function OrderComponent() {
  const { loading, result, error } = useAPI('/api/omo/course/order/list', 'get', {
    query: { page: 1, size: 10 }
  })

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return (
    <div>
      {result?.orders.map(order => (
        <div key={order.id}>{order.title}</div>
      ))}
    </div>
  )
}
```

### 类型说明

- **`makeURL<TPaths, U, M>(url, method)`**: 创建类型安全的 URL 和方法组合，返回只读元组 `[url, method]`
- **`MakeURL<TPaths, U, M>`**: 包含完整 API 信息的类型，包括请求参数和响应数据
- **`MakeRequest<TPaths, U, M>`**: 请求参数类型，包括 query、pathParams、formData、jsonData
- **`MakeResponse<TPaths, U, M>`**: 响应数据类型
- **`InferMethodFromPaths<TPaths, U>`**: 从路径推断可用的 HTTP 方法
- **`paths`**: 从 Swagger 文档生成的所有 API 路径的类型定义

**重要提示**：
- `makeURL` 函数主要用于运行时 URL 构建，返回元组类型
- 进行类型推断时，应直接使用 `MakeURL<TPaths, U, M>` 类型，而不是从 `makeURL` 函数返回值推断
- 错误用法：`type API = MakeURL<UserPaths, (typeof makeURL(...))[0], (typeof makeURL(...))[1]>`
- 正确用法：`type API = MakeURL<UserPaths, '/api/path', 'get'>`

其中：
- `TPaths`: 从 Swagger 文档导入的 paths 类型
- `U`: API 路径，如 `/api/user/login`
- `M`: HTTP 方法，如 `get`、`post` 等

### 最佳实践

1. **统一类型导入**：创建 `src/types/api.ts` 文件，统一导入和导出所有 API 类型，避免在每个业务文件中重复导入多个 paths 类型
2. **统一的 API 客户端**：创建一个统一的 API 调用函数，所有接口调用都通过它进行
3. **类型复用**：将常用的类型定义导出，在多个文件中复用
4. **错误处理**：结合 TypeScript 的联合类型，优雅地处理 API 错误
5. **自动更新**：将类型生成集成到构建流程中，确保类型定义始终是最新的
6. **模块化管理**：对于大型项目，可以按业务模块分别生成类型文件，然后通过统一的类型文件合并导出

## 许可证

MIT

## 完整使用示例

以下是一个完整的使用示例，展示如何在实际项目中使用类型安全的 API 工具：

```typescript
// src/api/types.ts - 导入生成的类型
// 第一步：导入生成的 paths 类型
import type { paths as UserPaths } from '../../output/swagger/all'

// 第二步：导入类型工具
import { 
  makeURL, 
  type MakeURL, 
  type MakeRequest, 
  type MakeResponse,
  type InferMethodFromPaths 
} from '@shixinde/apifox-swagger/types'

// 第三步：定义具体的 API 类型
type ClassListAPI = MakeURL<UserPaths, '/api/org/class/list', 'get'>
type ClassCreateAPI = MakeURL<UserPaths, '/api/org/class/create', 'post'>
type ClassUpdateAPI = MakeURL<UserPaths, '/api/org/class/update', 'put'>

// 注意：如果出现 "类型不能赋给类型never的参数" 错误，请检查：
// 1. 是否正确导入了 paths 类型：import type { paths as UserPaths } from '../../output/swagger/all'
// 2. 路径是否存在于 Swagger 文档中
// 3. HTTP 方法是否正确
// 4. 是否已经运行了代码生成命令：npx apifox-swagger

// 创建类型安全的 URL
const classListUrl = makeURL<UserPaths, '/api/org/class/list', 'get'>('/api/org/class/list', 'get')
const classCreateUrl = makeURL<UserPaths, '/api/org/class/create', 'post'>('/api/org/class/create', 'post')
const classUpdateUrl = makeURL<UserPaths, '/api/org/class/update', 'put'>('/api/org/class/update', 'put')

// 更简洁的类型推断方式
// 注意：makeURL 函数返回的是元组，不能直接用于类型推断
// 正确的方式是直接使用 MakeURL 类型
type ClassListURL = MakeURL<UserPaths, '/api/org/class/list', 'get'>;

// 如果需要运行时的 URL 构建，可以这样使用：
const url = makeURL<UserPaths, '/api/org/class/list', 'get'>('/api/org/class/list', 'get');

// 提取各种类型
type Response = ClassListURL['responseData'];        // 响应数据类型
type Query = ClassListURL['query'];                  // 查询参数类型
type PathParams = ClassListURL['pathParams'];        // 路径参数类型
type FormData = ClassListURL['formData'];            // 表单数据类型
type JsonData = ClassListURL['jsonData'];            // JSON 数据类型

// 导出具体的业务类型
export type Classes = Response['data'];     // 班级列表数据类型
export type ClassItem = Classes[0];        // 单个班级数据类型

// 示例：不同 API 的类型提取
// 正确的方式：直接使用 MakeURL 类型
type CreateURL = MakeURL<UserPaths, '/api/org/class/create', 'post'>;
type CreateRequest = CreateURL['jsonData']; // 创建班级的请求数据类型
type CreateResponse = CreateURL['responseData']; // 创建班级的响应数据类型

type UpdateURL = MakeURL<UserPaths, '/api/org/class/update', 'put'>;
type UpdateRequest = UpdateURL['jsonData']; // 更新班级的请求数据类型
type UpdatePathParams = UpdateURL['pathParams']; // 更新班级的路径参数类型（如 id）

// 带查询参数的 API 示例
type SearchURL = MakeURL<UserPaths, '/api/org/class/search', 'get'>;
type SearchQuery = SearchURL['query'];      // 搜索查询参数类型（如 keyword, page, size）
type SearchResponse = SearchURL['responseData']; // 搜索响应数据类型

// 文件上传 API 示例
type UploadURL = MakeURL<UserPaths, '/api/org/class/upload', 'post'>;
type UploadFormData = UploadURL['formData']; // 文件上传表单数据类型
type UploadResponse = UploadURL['responseData']; // 文件上传响应数据类型

// 如果需要运行时 URL 构建，可以这样使用：
const createUrl = makeURL<UserPaths, '/api/org/class/create', 'post'>('/api/org/class/create', 'post');
const updateUrl = makeURL<UserPaths, '/api/org/class/update', 'put'>('/api/org/class/update', 'put');

// 通用 API 调用函数
function apiCall<
  U extends keyof UserPaths,
  M extends InferMethodFromPaths<UserPaths, U>
>(
  url: U,
  method: M,
  data?: MakeRequest<UserPaths, U, M>
): Promise<MakeResponse<UserPaths, U, M>> {
  const baseURL = 'https://api.example.com'
  
  return fetch(`${baseURL}${url}`, {
    method: method as string,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${getToken()}`
    },
    body: data?.jsonData ? JSON.stringify(data.jsonData) : undefined,
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`)
    }
    return res.json()
  })
}

// 实际使用示例
async function examples() {
  // 1. 获取班级列表（GET 请求，带查询参数）
  const classList = await apiCall('/api/org/class/list', 'get', {
    query: {
      page: 1,
      size: 10,
      keyword: '高一'
    }
  });
  // classList 的类型会被自动推断为对应的响应类型
  console.log(classList.data); // 类型安全的访问

  // 2. 创建班级（POST 请求，带 JSON 数据）
  const newClass = await apiCall('/api/org/class/create', 'post', {
    jsonData: {
      name: '高一(1)班',
      teacherId: 123,
      capacity: 50
    }
  });
  console.log(newClass.data.id); // 新创建班级的 ID

  // 3. 更新班级（PUT 请求，带路径参数和 JSON 数据）
  const updatedClass = await apiCall('/api/org/class/update', 'put', {
    pathParams: {
      id: 456
    },
    jsonData: {
      name: '高一(2)班',
      capacity: 45
    }
  });
  console.log(updatedClass.message); // 更新结果消息

  // 4. 文件上传（POST 请求，带表单数据）
  const uploadResult = await apiCall('/api/org/class/upload', 'post', {
    formData: {
      file: new File([''], 'students.xlsx'),
      classId: 789
    }
  });
  console.log(uploadResult.data.uploadedCount); // 上传的学生数量
}

// 类型提取的高级用法
type ApiEndpoints = {
  // 班级相关 API
  classList: MakeURL<UserPaths, '/api/org/class/list', 'get'>;
  classCreate: MakeURL<UserPaths, '/api/org/class/create', 'post'>;
  classUpdate: MakeURL<UserPaths, '/api/org/class/update', 'put'>;
  classUpload: MakeURL<UserPaths, '/api/org/class/upload', 'post'>;
};

// 提取所有响应类型
type ApiResponses = {
  [K in keyof ApiEndpoints]: ApiEndpoints[K]['responseData'];
};

// 提取所有请求类型
type ApiRequests = {
  [K in keyof ApiEndpoints]: {
    query: ApiEndpoints[K]['query'];
    pathParams: ApiEndpoints[K]['pathParams'];
    jsonData: ApiEndpoints[K]['jsonData'];
    formData: ApiEndpoints[K]['formData'];
  };
};

// 业务层类型定义
export type ClassListResponse = ApiResponses['classList'];
export type ClassCreateRequest = ApiRequests['classCreate']['jsonData'];
export type ClassUpdateRequest = ApiRequests['classUpdate']['jsonData'];
export type ClassUploadFormData = ApiRequests['classUpload']['formData'];

// 具体的 API 调用函数
export const classAPI = {
  // 获取班级列表
  async getList(params?: MakeRequest<UserPaths, '/api/org/class/list', 'get'>['query']) {
    return apiCall('/api/org/class/list', 'get', { query: params })
  },
  
  // 创建班级
  async create(data: MakeRequest<UserPaths, '/api/org/class/create', 'post'>['jsonData']) {
    return apiCall('/api/org/class/create', 'post', { jsonData: data })
  },
  
  // 更新班级
  async update(
    id: string, 
    data: MakeRequest<UserPaths, '/api/org/class/update', 'put'>['jsonData']
  ) {
    return apiCall('/api/org/class/update', 'put', { 
      pathParams: { id },
      jsonData: data 
    })
  }
}

// React Hook 示例
import { useState, useEffect } from 'react'

export function useClassList(params?: MakeRequest<UserPaths, '/api/org/class/list', 'get'>['query']) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<MakeResponse<UserPaths, '/api/org/class/list', 'get'> | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    classAPI.getList(params)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [params])

  return { loading, data, error, refetch: () => classAPI.getList(params) }
}

// 在组件中使用
function ClassListComponent() {
  const { loading, data, error } = useClassList({ page: 1, size: 10 })
  
  const handleCreate = async (formData: any) => {
    try {
      await classAPI.create({
        name: formData.name,
        description: formData.description
        // TypeScript 会提供完整的类型提示
      })
      // 重新获取列表
    } catch (err) {
      console.error('创建失败:', err)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  
  return (
    <div>
      {data?.list?.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

// 工具函数
function getToken(): string {
  return localStorage.getItem('token') || ''
}
```

## 贡献

欢迎提交 Issue 和 Pull Request！






