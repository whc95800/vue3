<template>
  <div id="win-result" v-show=" win !== 'false'">{{win}}</div>
</template>

<script>
import {inject} from "vue";

export default {
  name: "WinResult",
  setup(){
    let win =inject('win')

    return{win}
  }
}

</script>

<style scoped>
#win-result {
  text-align: center;
  font-size: 26px;
}
</style>
