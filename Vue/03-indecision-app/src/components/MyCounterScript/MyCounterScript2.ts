import { ref, computed, defineComponent } from 'vue';

export default defineComponent({
props: {
    value: {type: Number, required: true},
},
setup(props){    
    const counter = ref(props.value ?? 10); 
    const squaredCounter = computed(() => counter.value * counter.value);

        return {
            counter,
            squaredCounter
        }
    }
})