<template>
    <h1>mi primera app</h1>
    <MyCounter :value="5"/>
    <MyCounterScript :value="10"/>
    <MyCounterScript2 :value="15"/>
</template>
<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/MyCounterScript/MyCounterScript2.vue';
</script>
