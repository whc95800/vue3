<template>
  <div class="field">
    <table id="field-table">
      <tr v-for="(arr,j) in arr" :key="j">
        <td v-for="(arr,i) in arr" :key="i">
          <div @click="draw" class="chip" innerHTML=0></div>
          <div @click="draw" v-if="i===14" class="chip last-in-row" innerHTML=0></div>
          <div @click="draw" v-if="j===14" class="chip last-in-column" innerHTML=0></div>
          <div @click="draw" v-if="(i===14)&&(j===14)" class="chip last-in-row last-in-column" innerHTML=0></div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import drawChips from "@/hooks/drawChips";

export default {
  name: "Field",

  created() {
    this.addData();
  },

  setup() {
    let arr =[]
    let draw =drawChips()

    function addData() {
      for (let i = 0; i < 15; i++) {
        this.arr.push([])
        for (let j = 0; j < 15; j++) {
          this.arr[i].push("0")
        }
      }
    }

    return {arr,addData,draw}
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
  left: -18px;
  top: -18px;
  transition: background-color 0.2s ease;
  font-size: 0;
}

.chip.last-in-row {
  right: -18px;
  left: inherit;
}

.chip.last-in-column {
  bottom: -18px;
  top: inherit;
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
