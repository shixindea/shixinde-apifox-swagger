## 安装

```sh
npm install @shixinde/utils
```

## 基础使用

```js
import { mobileCheck, copy } from '@shixinde/utils'

console.log('result ===>', mobileCheck('15512659886')) //结果返回true
console.log('result ===>', mobileCheck('666')) //结果返回false
console.log('result ===>', copy('复制文本'))  //结果返回true 文本内容已存在剪贴板
```

## 专业人士请看下图

```sh
/**
 * 复制
 */
export declare const copy: (value: string) => boolean;

/**
 * 邮箱校验
 */
export declare const emailCheck: (value: string) => boolean;

/**
 * 身份证校验
 */
export declare const idCardCheck: (value: string) => boolean;

/**
 * 手机号校验
 */
export declare const mobileCheck: (value: string) => boolean;

/**
 * @description 类型解释
 * @param value 关键字
 * @param options 类型
 * @param v 匹配的关键字
 * @param l 返回的字段
 * @returns {string|*}
 */
export declare const paraphrase: (value: string | number, options?: any[], v?: string, l?: string) => string;

export { }
```
