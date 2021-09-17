<template>
  <h2></h2>
  <Turns></Turns>
  <WinResult></WinResult>
  <Field @send="getTurn"></Field>
</template>

<script>
import Turns from "@/components/Turns";
import WinResult from "@/components/WinResult";
import Field from "@/components/Field";
import {ref} from "vue";

export default {
  name: 'App',
  components: {Field, WinResult, Turns},
  setup(){
    let turn = ref(0)

    function getTurn (data) {
      turn.value = data
    }

    return{turn,getTurn}
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
