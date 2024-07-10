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


<script lang="ts" setup>
import { ref, computed } from 'vue';
interface Props {
    value?:number;
}

const props =defineProps<Props>();
const increment = () => {
    counter.value++;
};

const decrement = () => {
    counter.value--;
};
const counter = ref(props.value ?? 10);
const squaredCounter = computed(() => counter.value * counter.value);

</script>
