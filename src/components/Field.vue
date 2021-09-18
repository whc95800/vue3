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

    function drawChip(j,i){
      if ((turn.value % 2 === 0)&&(arr[j][i]==="0")) {
        arr[j][i]="1"
        turn.value++
      } else if (turn.value % 2 === 1&&(arr[j][i]==="0")) {
        arr[j][i]="2"
        turn.value++
      }

      //横
      if ((arr[j][i])*(arr[j][i+1])*(arr[j][i+2])*(arr[j][i+3])*(arr[j][i+4])===1||
          (arr[j][i-1])*(arr[j][i])*(arr[j][i+1])*(arr[j][i+2])*(arr[j][i+3])===1||
          (arr[j][i-2])*(arr[j][i-1])*(arr[j][i])*(arr[j][i+1])*(arr[j][i+2])===1||
          (arr[j][i-3])*(arr[j][i-2])*(arr[j][i-1])*(arr[j][i])*(arr[j][i+1])===1||
          (arr[j][i-4])*(arr[j][i-3])*(arr[j][i-2])*(arr[j][i-1])*(arr[j][i])===1
      ){
        win.value="blackWin"
      }

      if((arr[j][i])*(arr[j][i+1])*(arr[j][i+2])*(arr[j][i+3])*(arr[j][i+4])===32||
        (arr[j][i-1])*(arr[j][i])*(arr[j][i+1])*(arr[j][i+2])*(arr[j][i+3])===32||
        (arr[j][i-2])*(arr[j][i-1])*(arr[j][i])*(arr[j][i+1])*(arr[j][i+2])===32||
        (arr[j][i-3])*(arr[j][i-2])*(arr[j][i-1])*(arr[j][i])*(arr[j][i+1])===32||
        (arr[j][i-4])*(arr[j][i-3])*(arr[j][i-2])*(arr[j][i-1])*(arr[j][i])===32
      ){
        win.value="whiteWin"
      }

      //竖
      if ((arr[j][i])*(arr[j+1][i])*(arr[j+2][i])*(arr[j+3][i])*(arr[j+4][i])===1||
          (arr[j-1][i])*(arr[j][i])*(arr[j+1][i])*(arr[j+2][i])*(arr[j+3][i])===1||
          (arr[j-2][i])*(arr[j-1][i])*(arr[j][i])*(arr[j+1][i])*(arr[j+2][i])===1||
          (arr[j-3][i])*(arr[j-2][i])*(arr[j-1][i])*(arr[j][i])*(arr[j+1][i])===1||
          (arr[j-4][i])*(arr[j-3][i])*(arr[j-2][i])*(arr[j-1][i])*(arr[j][i])===1
      ){
        win.value="blackWin"
      }
      if((arr[j][i])*(arr[j+1][i])*(arr[j+2][i])*(arr[j+3][i])*(arr[j+4][i])===32||
          (arr[j-1][i])*(arr[j][i])*(arr[j+1][i])*(arr[j+2][i])*(arr[j+3][i])===32||
          (arr[j-2][i])*(arr[j-1][i])*(arr[j][i])*(arr[j+1][i])*(arr[j+2][i])===32||
          (arr[j-3][i])*(arr[j-2][i])*(arr[j-1][i])*(arr[j][i])*(arr[j+1][i])===32||
          (arr[j-4][i])*(arr[j-3][i])*(arr[j-2][i])*(arr[j-1][i])*(arr[j][i])===32
      ){
        win.value="whiteWin"
      }
      console.log(j,i)
      context.emit('send',turn.value)
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
