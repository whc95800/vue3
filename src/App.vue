<template>
  <Turns></Turns>
  <WinResult></WinResult>
  <Field></Field>
</template>

<script>
import {ref} from 'vue'
import Turns from "@/components/Turns";
import WinResult from "@/components/WinResult";
import Field from "@/components/Field";

export default {
  name: 'App',
  components: {Field, WinResult, Turns},
  setup() {
    let isShowDemo = ref(true)
    return {isShowDemo}
  }
}
</script>

<style>
body {
  width: 640px;
  margin: 0 auto;
}
h1 {
  text-align: center;
}
</style>
