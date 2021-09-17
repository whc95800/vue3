<template>
  <Turns></Turns>
  <WinResult></WinResult>
  <Field @sendTurn="getTurn($event)"></Field>
</template>

<script>
import Turns from "@/components/Turns";
import WinResult from "@/components/WinResult";
import Field from "@/components/Field";

export default {
  name: 'App',
  components: {Field, WinResult, Turns},
  setup(){
    let turns = 0

    function getTurn(data){
      turns=data
      console.log(data)
    }

    console.log(data)

    return{turns,getTurn}
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
