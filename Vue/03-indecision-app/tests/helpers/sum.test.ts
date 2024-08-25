// sum.test.js
import { describe, expect, test } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add function', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    const numberArray: number[] = [];
    const result = addArray(numberArray);
    expect(result).toBe(0);
  });
  
  test('should return the proper value of the addArray function', () => {
    const numberArray = [1, 2, 3, 4, 5];
    const result = addArray(numberArray);
    expect(result).toBe(15);
  });
});

