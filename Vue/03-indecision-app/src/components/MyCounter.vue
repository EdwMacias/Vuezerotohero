<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3 data-testid="square-label">Square: {{ squaredCounter }}</h3>
        <div>
            <button class="btn" @:click="counter++">+1</button>

            <button class="btn" id="btn-decrement" @:click="counter--">-1</button>
        </div>
    </section>
</template>


<script lang="ts" setup>
import { useCounter } from '../composables/useCounter';

interface Props {
    value: number;
}
const props = defineProps<Props>();
const { counter, squaredCounter } = useCounter(props.value);

</script>


<style scoped>
.btn {
    @apply p-5 rounded bg-blue-200 hover:bg-blue-700 mr-2;
}
</style>