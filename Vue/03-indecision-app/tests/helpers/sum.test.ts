// sum.test.js
import { expect, test } from 'vitest';
import { sum } from '../../src/helpers/sum';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
  // if (sum(1, 2) !== 3) {
  //   throw new Error('test failed');
  // }
});
