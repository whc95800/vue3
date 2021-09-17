<template>
  <div class="turns">
    <div id="turn-black" v-bind:class="changeBlack()">Black</div>
    <div id="turn-white" v-bind:class="changeWhite()">White</div>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  name: "Turns",
  setup(){
    let turns = ref(0)

    function changeBlack (){
      if(turns.value % 2 === 0){
        return "turn turn-current"
      }else{
        return "turn"
      }
    }

    function changeWhite (){
      if(turns.value % 2 === 1){
        return "turn turn-current"
      }else{
        return "turn"
      }
    }

    return{changeBlack,changeWhite,turns}
  }


}
</script>

<style scoped>
.turns {
  display: flex;
  font-weight: bold;
  font-size: 24px;
  margin: 20px;
}

.turn {
  flex-grow: 1;
}

.turn.turn-current {
  text-decoration: underline;
}

.turn:nth-child(2) {
  text-align: end;
}
</style>
