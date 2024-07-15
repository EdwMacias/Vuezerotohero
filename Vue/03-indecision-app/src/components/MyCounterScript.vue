<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squaredCounter }}</h3>
        <div>
            <button @:click="increment">+1</button>
            <button @:click="decrement">-1</button>
        </div>
    </section>
</template>


<script lang="ts">
import { useCounter } from '../composables/useCounter';
const { counter, squaredCounter, increment, decrement } = useCounter();

export default {
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    emits: {

    },

    setup() {

        return {
            counter,
            squaredCounter,
            increment,
            decrement
        }
    }
}
</script>
