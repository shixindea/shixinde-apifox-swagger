// 从生成的swagger文件中导入paths类型
import type { paths } from '../output/swagger/all'

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
export type InferMethodFromPaths<U extends keyof paths> =
  keyof FilterMethodKeys<paths[U]>

// 找出 request query
export type ExtractRequestQuery<
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = paths[U][M] extends infer O
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
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = paths[U][M] extends infer O
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
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = paths[U][M] extends infer O
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
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = paths[U][M] extends infer O
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
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = paths[U][M] extends infer O
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
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
>(url: U, method: M): readonly [U, M] {
  return [url, method] as const
}

/**
 * MakeURL类型，包含所有相关的类型信息
 */
export type MakeURL<
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = {
  url: readonly [U, M]
  pathParams: ExtractRequestPathParams<U, M>
  query: ExtractRequestQuery<U, M>
  formData: ExtractRequestFormData<U, M>
  jsonData: ExtractRequestJsonData<U, M>
  responseData: ExtractResponseData<U, M>
}

/**
 * 请求类型
 */
export type MakeRequest<
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = {
  pathParams?: ExtractRequestPathParams<U, M>
  query?: ExtractRequestQuery<U, M>
  formData?: ExtractRequestFormData<U, M>
  jsonData?: ExtractRequestJsonData<U, M>
}

/**
 * 响应类型
 */
export type MakeResponse<
  U extends keyof paths,
  M extends InferMethodFromPaths<U>
> = ExtractResponseData<U, M>

// 导出paths类型
export type { paths }