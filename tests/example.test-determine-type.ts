import * as theCheck from '../src/check-validate'


// 测试 check-validate 中的函数
describe('my-app:isNullObject', () => {
    test('isNullObject(): true', () => {
        expect(
            theCheck.checkNum('11111')
        ).toBe(true)
    })
    test('isNullObject(): true', () => {
        expect(
            theCheck.checkNum('aaa')
        ).toBe(false)
    })
    test('isNullObject(): true', () => {
        expect(
            theCheck.checkNum('aaa111')
        ).toBe(false)
    })

})


