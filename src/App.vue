<template>
  <h2></h2>
  <Turns :turn="turn"></Turns>
  <WinResult></WinResult>
  <Field @send="getTurn"></Field>
</template>

<script>
import Turns from "@/components/Turns";
import WinResult from "@/components/WinResult";
import Field from "@/components/Field";
import {ref, provide} from "vue";

export default {
  name: 'App',
  components: {Field, WinResult, Turns},
  setup(){
    let turn = ref(0)
    let result = ref("false")

    provide('set',turn)
    provide('win',result)

    function getTurn (data) {
      turn.value = data[0]
      result.value = data[1]
    }


    return{turn,getTurn,result}
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
