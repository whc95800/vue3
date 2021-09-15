import {onMounted, reactive} from "vue";

export default function (){
  let arr = reactive([])
  let drawChips = document.getElementsByClassName("chip")

    onMounted(()=>{
      for (let i=0;i<drawChips.length;i++){
        if(i>=224){
          arr[224]=drawChips[224].innerHTML;
          arr[225]=drawChips[226].innerHTML;
          arr[226]=drawChips[228].innerHTML;
          arr[227]=drawChips[230].innerHTML;
          arr[228]=drawChips[232].innerHTML;
          arr[229]=drawChips[234].innerHTML;
          arr[230]=drawChips[236].innerHTML;
          arr[231]=drawChips[238].innerHTML;
          arr[232]=drawChips[240].innerHTML;
          arr[233]=drawChips[242].innerHTML;
          arr[234]=drawChips[244].innerHTML;
          arr[235]=drawChips[246].innerHTML;
          arr[236]=drawChips[248].innerHTML;
          arr[237]=drawChips[250].innerHTML;
          arr[238]=drawChips[252].innerHTML;
          arr[239]=drawChips[253].innerHTML;
          arr[240]=drawChips[225].innerHTML;
          arr[241]=drawChips[227].innerHTML;
          arr[242]=drawChips[229].innerHTML;
          arr[243]=drawChips[231].innerHTML;
          arr[244]=drawChips[233].innerHTML;
          arr[245]=drawChips[235].innerHTML;
          arr[246]=drawChips[237].innerHTML;
          arr[247]=drawChips[239].innerHTML;
          arr[248]=drawChips[241].innerHTML;
          arr[249]=drawChips[243].innerHTML;
          arr[250]=drawChips[245].innerHTML;
          arr[251]=drawChips[247].innerHTML;
          arr[252]=drawChips[249].innerHTML;
          arr[253]=drawChips[251].innerHTML;
          arr[254]=drawChips[255].innerHTML;
          arr[255]=drawChips[254].innerHTML;
        }
        else {
          arr[i]=drawChips[i].innerHTML;
        }
      }
    })

  return arr
}
