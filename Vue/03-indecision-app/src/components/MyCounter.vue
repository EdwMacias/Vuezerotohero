<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square: {{ squaredCounter }}</h3>

        <div>
            <button class="btn"  @:click="increment">+1</button>
            <button class="btn" @:click="decrement">-1</button>
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


<style>
.btn{
    @apply btn btn-primary p-5 rounded bg-blue-200 hover:bg-blue-700 mr-2;
}
</style>