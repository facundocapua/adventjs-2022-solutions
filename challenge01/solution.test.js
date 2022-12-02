import { describe, it } from 'mocha'
import assert from 'assert'
import wrapping from './solution.mjs'

describe('Challenge #1: Automating Christmas gift wrapping!', () => {
  it('should return an array', () => {
    assert.equal(Array.isArray(wrapping([])), true)
  })

  it('should wrap gifts', () => {
    const gifts = ['cat', 'game', 'socks']
    const wrapped = wrapping(gifts)
    const expected = [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ]
    assert.deepEqual(wrapped, expected)
  })

  it('should wrap a single gift', () => {
    const gifts = ['midu']
    const wrapped = wrapping(gifts)
    const expected = ['******\n*midu*\n******']
    assert.deepEqual(wrapped, expected)
  })

  it('should wrap a single letter gift', () => {
    const gifts = ['a']
    const wrapped = wrapping(gifts)
    const expected = ['***\n*a*\n***']
    assert.deepEqual(wrapped, expected)
  })

  it('should wrap an empty array', () => {
    const gifts = []
    const wrapped = wrapping(gifts)
    const expected = []
    assert.deepEqual(wrapped, expected)
  })
})
