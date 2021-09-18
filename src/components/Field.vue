<template>
  <div class="field">
    <table id="field-table">
      <tr v-for="(item,j) in arr" :key="j">
        <td v-for="(item,i) in arr" :key="i">
          <div @click="drawChip(j,i)" class="chip" v-bind:class="color(j,i)"></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import {reactive, ref} from "vue";

export default {
  name: "Field",
  created() {
    this.addData();
  },
  setup(props,context) {
    let arr =reactive([])
    let turn = ref(0)
    let win = ref("false")

    function addData() {
      for (let j = 0; j < 15; j++) {
        this.arr.push([])
        for (let i = 0; i < 15; i++) {
          this.arr[j].push("0")
        }
      }
    }

    function color (j,i){
      if(arr[j][i]==="1"){
        return "black"
      }else if(arr[j][i]==="2"){
        return "white"
      }
    }

    function drawChip(j,i) {
      if (win.value !== "false"){
        return false;
      }

      if ((turn.value % 2 === 0) && (arr[j][i] === "0")) {
        arr[j][i] = "1"
        turn.value++
      } else if (turn.value % 2 === 1 && (arr[j][i] === "0")) {
        arr[j][i] = "2"
        turn.value++
      }

      //纵向｜
      for(let y=0;y<=14;y++){
        for(let x=0;x<=10;x++){
          let winConditions =(arr[x][y])*(arr[x+1][y])*(arr[x+2][y])*(arr[x+3][y])*(arr[x+4][y]);
          if(winConditions===1){
            win.value ="black win!!!"
          }
          if(winConditions===32){
            win.value ="white win!!!"
          }
        }
      }
      //横向ー
      for(let x=0;x<=14;x++){
        for(let y=0;y<=10;y++){
          let winConditions = (arr[x][y])*(arr[x][y+1])*(arr[x][y+2])*(arr[x][y+3])*(arr[x][y+4]);
          if(winConditions===1){
            win.value ="black win!!!"
          }
          if(winConditions===32){
            win.value ="white win!!!"
          }
        }
      }
      //  右斜/
      for(let y=4;y<=14;y++) {
        for (let x = 0; x <=10; x++) {
          let winConditions = (arr[x][y])*(arr[x+1][y-1])*(arr[x+2][y-2])*(arr[x+3][y-3])*(arr[x+4][y-4]);
          if(winConditions===1){
            win.value ="black win!!!"
          }
          if(winConditions===32){
            win.value ="white win!!!"
          }
        }
      }
      //  左斜\
      for(let x=10; x>=0; x--) {
        for (let y=0; y<=10; y++) {
          let winConditions = (arr[x][y])*(arr[x+1][y+1])*(arr[x+2][y+2])*(arr[x+3][y+3])*(arr[x+4][y+4]);
          if(winConditions===1){
            win.value ="black win!!!"
          }
          if(winConditions===32){
            win.value ="white win!!!"
          }
        }
      }

      context.emit('send', [turn.value,win.value])
    }



    return {arr,addData,turn,drawChip,color,win}
  }
}

</script>

<style scoped>
.field {
  width: 640px;
  height: 640px;
  background-color: #966f54;
  padding: 0.05px;
}

#field-table {
  border: 2px solid #4d3420;
  margin: 40px;
  border-collapse: collapse;
  width: 560px;
  height: 560px;
}

#field-table td {
  border: 2px solid #4d3420;
  border-spacing: 0;
  padding: 0;
  position: relative;
}

.chip {
  border-radius: 17px;
  height: 34px;
  width: 34px;
  position: absolute;
  left: 0.5px;
  top: 0.5px;
  transition: background-color 0.2s ease;
}

.chip:hover {
  background-color: rgba(255, 255, 255,0.5);
}

.chip.black {
  background: radial-gradient(
    farthest-side at 34px 34px,
    #ffffff 0%,
    #000000 70%
  );
  box-shadow: -3px -3px 10px black;
}

.chip.white {
  background: radial-gradient(
    farthest-side at 34px 34px,
    #ffffff 0%,
    #d0cfcd 70%
  );
  box-shadow: -3px -3px 10px black;
}
</style>
