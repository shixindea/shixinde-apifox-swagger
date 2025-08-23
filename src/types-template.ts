// 类型安全的 API 工具
// 用户需要手动导入 paths 类型，例如：
// import type { paths } from '../swagger/all'
// 然后使用这些工具函数

// 过滤 method
type FilterMethodKeys<T> = {
  [K in keyof T as T[K] extends never | undefined
    ? never
    : K extends 'parameters'
      ? never
      : K]: T[K]
}

// 过滤 data
type FilterData<T> = {
  [K in keyof T as T[K] extends never | undefined ? never : K]: T[K]
}

// 找出所有可用的 method
export type InferMethodFromPaths<TPaths, U extends keyof TPaths> =
  keyof FilterMethodKeys<TPaths[U]>

// 找出 request query
export type ExtractRequestQuery<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = TPaths[U][M] extends infer O
  ? O extends {
      parameters: {
        query?: infer Query
      }
    }
    ? FilterData<Query>
    : never
  : never

// 找出 request path params
export type ExtractRequestPathParams<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = TPaths[U][M] extends infer O
  ? O extends {
      parameters: {
        path?: infer PathParams
      }
    }
    ? FilterData<PathParams>
    : never
  : never

// 找出 request body (form-data)
export type ExtractRequestFormData<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = TPaths[U][M] extends infer O
  ? O extends {
      requestBody?: {
        content: {
          'multipart/form-data': infer FormData
        }
      }
    }
    ? FilterData<FormData>
    : never
  : never

// 找出 request body (json)
export type ExtractRequestJsonData<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = TPaths[U][M] extends infer O
  ? O extends {
      requestBody?: {
        content: {
          'application/json': infer JsonData
        }
      }
    }
    ? JsonData
    : never
  : never

// 找出 response data
export type ExtractResponseData<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = TPaths[U][M] extends infer O
  ? O extends {
      responses: {
        200: {
          content: {
            'application/json': infer Data
          }
        }
      }
    }
    ? FilterData<Data>
    : never
  : never

/**
 * 创建URL和方法的元组
 * @param url API路径
 * @param method HTTP方法
 * @returns 只读元组 [url, method]
 */
export function makeURL<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
>(url: U, method: M): readonly [U, M] {
  return [url, method] as const
}

/**
 * MakeURL类型，包含所有相关的类型信息
 */
export type MakeURL<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = {
  url: readonly [U, M]
  pathParams: ExtractRequestPathParams<TPaths, U, M>
  query: ExtractRequestQuery<TPaths, U, M>
  formData: ExtractRequestFormData<TPaths, U, M>
  jsonData: ExtractRequestJsonData<TPaths, U, M>
  responseData: ExtractResponseData<TPaths, U, M>
}

/**
 * 请求类型
 */
export type MakeRequest<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = {
  pathParams?: ExtractRequestPathParams<TPaths, U, M>
  query?: ExtractRequestQuery<TPaths, U, M>
  formData?: ExtractRequestFormData<TPaths, U, M>
  jsonData?: ExtractRequestJsonData<TPaths, U, M>
}

/**
 * 响应类型
 */
export type MakeResponse<
  TPaths,
  U extends keyof TPaths,
  M extends InferMethodFromPaths<TPaths, U>
> = ExtractResponseData<TPaths, U, M>