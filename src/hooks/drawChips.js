import {onMounted, ref} from "vue";

export default function () {
  onMounted(()=> {
    let TURN = ref(0)
    function hasClass(obj, cn) {
      let reg = new RegExp("\\b" + cn + "\\b");
      return reg.test(obj.className);
    }

    function drawChip() {
      if (TURN.value % 2 === 0 && !hasClass(this, "white") && !hasClass(this, "black")) {
        this.className += " black";
        this.innerHTML = "1";
        TURN.value++

      } else if (TURN.value % 2 === 1 && !hasClass(this, "black") && !hasClass(this, "white")) {
        this.className += " white";
        this.innerHTML = "2";
        TURN.value++
      }
    }
    return drawChip
  })
}
