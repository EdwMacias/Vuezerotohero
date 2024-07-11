import { computed, ref } from "vue";

// const counter = ref(4);

export const useCounter = (initialValue: number = 0) => {
    
    const counter = ref(initialValue);
    const increment = () => counter.value++;
    const decrement = () => counter.value--;
    const reset = () => counter.value = initialValue;


    return{
        counter, 
        squaredCounter: computed(() => counter.value * counter.value),
        increment,
        decrement,
        reset
    }
}