import { union } from './union.js' // Function import kiya

test('Primitive values correctly merged', () => {
  expect(union([1, 2, 3], [3, 4, 5])).toEqual([1, 2, 3, 4, 5])
})

test('Handles duplicate values', () => {
  expect(union([1, 1, 2], [2, 3, 3])).toEqual([1, 2, 3])
})

test('Handles objects comparison', () => {
  expect(union([{ a: 1 }], [{ a: 1 }])).toEqual([{ a: 1 }])
})

test('Handles mixed data types', () => {
  expect(union([1, 'a', true], [true, 'a', 2])).toEqual([1, 'a', true, 2])
})
