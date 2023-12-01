import { describe, test } from 'node:test'
import assert from 'node:assert'
import findFirstRepeated from './solution.js'

describe('Challange-01 tests', () => {
    test('Test: return type', () => {
        const result = findFirstRepeated([2, 1, 3, 5, 3, 2])
        assert.strictEqual(typeof result, 'number')
    })

    test('Test: findFirstRepeated([2, 1, 3, 5, 3, 2])', () => {
        const result = findFirstRepeated([2, 1, 3, 5, 3, 2])
        assert.strictEqual(result, 3)
    })

    test('Test: findFirstRepeated([2, 2])', () => {
        const result = findFirstRepeated([2, 2])
        assert.strictEqual(result, 2)
    })

    test('Test: findFirstRepeated([2, 4, 3, 5, 1])', () => {
        const result = findFirstRepeated([2, 4, 3, 5, 1])
        assert.strictEqual(result, -1)
    })

    test('Test: findFirstRepeated([1])', () => {
        const result = findFirstRepeated([1])
        assert.strictEqual(result, -1)
    })

    test('Test: findFirstRepeated([])', () => {
        const result = findFirstRepeated([])
        assert.strictEqual(result, -1)
    })

    test('Test: findFirstRepeated([10, 20, 30])', () => {
        const result = findFirstRepeated([10, 20, 30])
        assert.strictEqual(result, -1)
    })

    test('Test: findFirstRepeated([5, 1, 2, 3, 2, 5, 1])', () => {
        const result = findFirstRepeated([5, 1, 2, 3, 2, 5, 1])
        assert.strictEqual(result, 2)
    })

    test('Test: findFirstRepeated([12, 20, 30, 11, 20, 12])', () => {
        const result = findFirstRepeated([12, 20, 30, 11, 20, 12])
        assert.strictEqual(result, 20)
    })
})
