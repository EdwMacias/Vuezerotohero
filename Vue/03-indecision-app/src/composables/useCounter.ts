import { computed, ref } from 'vue';

// const counter = ref(4);

export const useCounter = (initialValue: number = 5) => {
  const counter = ref(initialValue);

  return {
    counter,

    //read-only
    squaredCounter: computed(() => counter.value * counter.value),
  };
};
