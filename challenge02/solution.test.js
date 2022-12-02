import { describe, it } from 'mocha'
import assert from 'assert'
import countHours from './solution.mjs'

describe('Challenge #2: Nobody wants to do extra hours at work', () => {
  it('should return an a number', () => {
    assert.equal(typeof (countHours('2022', [])), 'number')
  })

  it('should count extra hours for 2023', () => {
    const holidays = ['01/06', '04/01', '12/25']
    const year = 2023
    const expected = 4

    assert.strictEqual(countHours(year, holidays), expected)
  })

  it('should count extra hours for 2022', () => {
    const holidays = ['01/06', '04/01', '12/25']
    const year = 2022
    const expected = 4

    assert.strictEqual(countHours(year, holidays), expected)
  })

  it('should count extra hours for 1985', () => {
    const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']
    const year = 1985
    const expected = 10

    assert.strictEqual(countHours(year, holidays), expected)
  })

  it('should count extra hours for 2000', () => {
    const holidays = ['01/01']
    const year = 2000
    const expected = 0

    assert.strictEqual(countHours(year, holidays), expected)
  })
})
