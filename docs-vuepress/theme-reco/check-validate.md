---
title: 校验规则
date: 2024-7-10
---

### 手机号校验

> export declare const mobileCheck: (value: string) => boolean;

**方法名** 

`mobileCheck`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { mobileCheck } from '@shixinde/utils'

mobileCheck('15512666996') //返回布尔型 true
mobileCheck('369') //返回布尔型 false
```

### 类型判断字符是不是纯数值
> export declare function isNumber(value: string): boolean;

**方法名** 

`isNumber`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { isNumber } from '@shixinde/utils'

isNumber('123') //返回布尔型 true
isNumber('a123') //返回布尔型 false
```

### 判断字符是不是 空对象
> export declare function isNullObject(value: Object): boolean;

**方法名** 

`isNullObject`

**参数**

`Object`

**返回**

`Boolean`

**例子**

```ts
import { isNullObject } from '@shixinde/utils'

isNullObject({}) //返回布尔型 true
isNullObject({ a: 1 }) //返回布尔型 false
```

### 身份证校验
> export declare const idCardCheck: (value: string) => boolean;

**方法名** 

`idCardCheck`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { idCardCheck } from '@shixinde/utils'

idCardCheck('正确身份证号') //返回布尔型 true
idCardCheck('369') //返回布尔型 false
```

### 邮箱校验
> export declare const emailCheck: (value: string) => boolean;

**方法名** 

`emailCheck`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { emailCheck } from '@shixinde/utils'

emailCheck('26666662@qq.com') //返回布尔型 true
emailCheck('1315') //返回布尔型 false
```

### 判断是浏览器内核\*
> export declare const checkBrowser: () => string;

**方法名** 

`checkBrowser`

**值**

`IE` `opera` `苹果` `谷歌` `火狐`

**参数**

无

**返回**

`Boolean`

**例子**

```ts
import { checkBrowser } from '@shixinde/utils'

checkBrowser() //返回字符型 IE opera 苹果 谷歌 火狐
```

### 判断是否是大写字母
> export declare const checkCapitalLetter: (data: string) => boolean;

**方法名** 

`checkCapitalLetter`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { checkCapitalLetter } from '@shixinde/utils'

checkCapitalLetter('10086') //返回布尔型 false
checkCapitalLetter('AA11') //返回布尔型 false
checkCapitalLetter('aa11') //返回布尔型 false
checkCapitalLetter('aa') //返回布尔型 false
checkCapitalLetter('AA') //返回布尔型 true
checkCapitalLetter('AAbb') //返回布尔型 false
checkCapitalLetter('AAbb11') //返回布尔型 false
```

### 判断全部是小写字母
> export declare const checkLowercaseLetter: (data: string) => boolean;

**方法名** 

`checkLowercaseLetter`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { checkLowercaseLetter } from '@shixinde/utils'

checkLowercaseLetter('10086') //返回布尔型 false
checkLowercaseLetter('AA11') //返回布尔型 false
checkLowercaseLetter('aa11') //返回布尔型 false
checkLowercaseLetter('aa') //返回布尔型 true
checkLowercaseLetter('AA') //返回布尔型 false
checkLowercaseLetter('AAbb') //返回布尔型 false
checkLowercaseLetter('AAbb11') //返回布尔型 false
```

### 判断是否是中文
> export declare const checkChinese: (data: string) => boolean;

**方法名** 

`checkChinese`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { checkChinese } from '@shixinde/utils'

checkChinese('10086') //返回布尔型 false
checkChinese('袁果锅') //返回布尔型 true
checkChinese('袁Guoguo') //返回布尔型 false
```

### 判断是否是中文，数字或字母
> export declare const checkChineseNumberLettter: (data: string) => boolean;

**方法名** 

`checkChineseNumberLettter`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { checkChineseNumberLettter } from '@shixinde/utils'

checkChineseNumberLettter('10086') //返回布尔型 true
checkChineseNumberLettter('袁果锅') //返回布尔型 true
checkChineseNumberLettter('袁Guoguo') //返回布尔型 true
checkChineseNumberLettter('10086@qq.com') //返回布尔型 false
```

### 判断是终端类型,值有 ios,android,iPad

> export declare const checkIosAndroidIpad: () => string;

**方法名** 

`checkIosAndroidIpad`

**值**

ios android iPad

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { checkIosAndroidIpad } from '@shixinde/utils'

checkIosAndroidIpad() //返回字符型 ios | android | iPad
```

### 判断是否是字母

> export declare const checkLetter: (data: any) => boolean;

**方法名** 

`checkLetter`

**参数**

`data`

**返回**

`Boolean`

**例子**

```ts
import { checkLetter } from '@shixinde/utils'

checkLetter('10086') //返回布尔型 false
checkLetter('袁果锅') //返回布尔型 false
checkLetter('袁Guoguo') //返回布尔型 false
checkLetter('YuanGuoGuo') //返回布尔型 true
checkLetter('10086@qq.com') //返回布尔型 false
checkLetter({ name: "袁果锅" }) //返回布尔型 false
checkLetter(10086) //返回布尔型 false
```



### 判断是否是数字

> export declare const checkNum: (data: any) => boolean;

**方法名** 

`checkNum`

**参数**

`data`

**返回**

`Boolean`

**例子**

```ts
import { checkNum } from '@shixinde/utils'

checkNum('10086') //返回布尔型 true
checkNum('袁果锅') //返回布尔型 false
checkNum('袁Guoguo') //返回布尔型 false
checkNum('YuanGuoGuo') //返回布尔型 false
checkNum('10086@qq.com') //返回布尔型 false
checkNum(10086) //返回布尔型 true
```

### 判断是否是字母或数字

> export declare const checkNumOrLetter: (data: string) => boolean;

**方法名** 

`checkNumOrLetter`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { checkNumOrLetter } from '@shixinde/utils'

checkNumOrLetter('10086') //返回布尔型 true
checkNumOrLetter('袁果锅') //返回布尔型 false
checkNumOrLetter('袁Guoguo') //返回布尔型 false
checkNumOrLetter('YuanGuoGuo') //返回布尔型 true
checkNumOrLetter('10086@qq.com') //返回布尔型 false
checkNumOrLetter(10086) //返回布尔型 true
```

### 判断是否是正确的网址

> export declare const checkUrl: (url: string) => boolean;

**方法名** 

`checkUrl`

**参数**

`String`

**返回**

`Boolean`

**例子**

```ts
import { checkUrl } from '@shixinde/utils'

checkUrl('www.baidu.com') //返回布尔型 true
checkUrl('yuanguoguo') //返回布尔型 false
```
