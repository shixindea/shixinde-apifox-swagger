/**
 * 手机号校验
 */
export const mobileCheck = (value: string) => /^[1][3,4,5,7,8][0-9]{9}$/.test(value)
/**
 * 类型判断字符是不是  空对象
 * @param value 
 * @returns 
 */
export function isNullObject(value: Object) {
	return Object.keys(value).length === 0;
}

/**
 * 身份证校验
 */
export const idCardCheck = (value: string) =>
	/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
		value
	)

/**
 * 邮箱校验
 */
export const emailCheck = (value: string) =>
	/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value)


/**
 *  判断是否是数字
 * @param {Number} data
 */
export const checkNum = (data: any) => {
	const reg = /^\d{1,}$/g
	return reg.test(data)
}

/**
 *  判断是否是字母
 * @param {Number} data
 */
export const checkLetter = (data: any) => {
	const reg = /^[a-zA-Z]+$/g
	return reg.test(data)
}

/**
 *  判断是否全部是小写字母
 * @param {Number} data
 */
export const checkLowercaseLetter = (data: string) => {
	const reg = /^[a-z]+$/g
	return reg.test(data)

}


/**
 *  判断是否是大写字母
 * @param {Number} data
 */
export const checkCapitalLetter = (data: string) => {
	const reg = /^[A-Z]+$/g
	return reg.test(data)

}

/**
 * 判断是否是字母或数字
 * @param {Number || String} data  字符或数字
 */
export const checkNumOrLetter = (data: any): boolean => {
	const reg = /^[0-9a-zA-Z]*$/g
	return reg.test(data)

}

/**
 * 判断是否是中文
 * @param {String} data  中文
 */
export const checkChinese = (data: string) => {
	const reg = /^[\u4E00-\u9FA5]+$/g
	return reg.test(data)

}

/**
 * 判断是否是中文，数字或字母
 * @param {String} data  中文，数字或字母
 */

export const checkChineseNumberLettter = (data: string) => {
	const reg = /^[a-zA-Z0-9\u4e00-\u9fa5]+$/g
	return reg.test(data)

}
/**
 * 判断是否是正确的网址
 * @param {String} url 网址
 */
export const checkUrl = (url: string) => {
	const a = document.createElement('a')
	a.href = url
	return [
		/^(http|https):$/.test(a.protocol),
		a.host,
		a.pathname !== url,
		a.pathname !== `/${url}`
	].find(x => !x) === undefined
}

/**
 * 判断是浏览器内核*
 */
export const checkBrowser = () => {
	const u = navigator.userAgent;
	const obj = {
		trident: u.indexOf("Trident") > -1, //IE内核
		presto: u.indexOf("Presto") > -1, //opera内核
		webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
		gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
	}
	return Object.keys(obj)[Object.values(obj).indexOf(true)]
};


/**
 * 判断是终端类型,值有ios,android,iPad
 */
export const checkIosAndroidIpad = () => {
	const u = navigator.userAgent;
	const obj = {
		ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
		android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
		iPad: u.indexOf("iPad") > -1, //是否iPad
	}
	return Object.keys(obj)[Object.values(obj).indexOf(true)]
};


