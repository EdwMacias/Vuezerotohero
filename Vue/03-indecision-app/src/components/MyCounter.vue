<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squaredCounter }}</h3>

        <div>
            <button class="btn"  @:click="increment">+1</button>
            <button class="btn" @:click="decrement">-1</button>
            <button class="btn" @:click="reset">Reset</button>
        </div>
    </section>
</template>


<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';
const {counter, squaredCounter, increment, decrement, reset} = useCounter();

</script>


<style>
.btn{
    @apply p-5 rounded bg-blue-200 hover:bg-blue-700 mr-2;
}
</style>