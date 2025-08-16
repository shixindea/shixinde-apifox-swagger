import { getDate } from '../src/date'

describe('my-app:getDate', () => {
    test('getDate(): 2024年7月4日 星期四', () => {
        expect(
            getDate(),
        )
        // .toBe('2024年7月4日 星期四')
    })
})

