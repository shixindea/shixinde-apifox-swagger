import * as theCheck from '../src/check-validate'

// 测试 check-validate 中的函数
describe('my-app:isNullObject', () => {
    test('idCardCheck(): true', () => {
        expect(
            theCheck.checkUrl("www.baidu.com")
        ).toBe(true)
    })
    test('idCardCheck(): true', () => {
        expect(
            theCheck.checkUrl("yuanguoguo")
        ).toBe(true)
    })
  



})


