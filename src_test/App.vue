<template>
  <div>
    <button @click="changeColor()">点我变颜色</button>
    <div id="app" v-bind:class="color"></div>
  </div>
</template>

<script>


import {ref} from "vue";

export default {
  name: 'App',
  setup(){
    let color = ref("red")

    function changeColor(){
      color.value = "green"
    }

    return{color,changeColor}
  }
}
</script>

<style>
#app{
  width: 400px;
  height: 400px;
}

.red{
  background-color: red;
}
.green{
  background-color: green;
}
.blue{
  background-color: blue;
}

</style>
