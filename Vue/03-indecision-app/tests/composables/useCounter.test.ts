import { useCounter } from '@/composables/useCounter';

describe('useCounter', () => {
  test('Initializes counter with provided default value', () => {
    const { counter, squaredCounter } = useCounter();

    expect(counter.value).toBe(5);
    expect(squaredCounter.value).toBe(25);
  });

  test('Initializes counter with provided initial value', () => {
    const initialValue = 10;
    const { counter, squaredCounter } = useCounter(initialValue);

    expect(counter.value).toBe(initialValue);
    expect(squaredCounter.value).toBe(initialValue * initialValue);
  });

  test('Increments counter correctly', () => {
    const { counter, squaredCounter } = useCounter();
    counter.value++;

    expect(counter.value).toBe(6);
    expect(squaredCounter.value).toBe(36);
  });
});
