import {onBeforeUpdate, reactive} from "vue";
export default function (){
  let arr = reactive([])
  let chips = document.getElementsByClassName("chip")

  onBeforeUpdate(()=>{
    for (let i=0;i<chips.length;i++){
      if(i>=224){
          arr[224]=chips[224].innerHTML;
          arr[225]=chips[226].innerHTML;
          arr[226]=chips[228].innerHTML;
          arr[227]=chips[230].innerHTML;
          arr[228]=chips[232].innerHTML;
          arr[229]=chips[234].innerHTML;
          arr[230]=chips[236].innerHTML;
          arr[231]=chips[238].innerHTML;
          arr[232]=chips[240].innerHTML;
          arr[233]=chips[242].innerHTML;
          arr[234]=chips[244].innerHTML;
          arr[235]=chips[246].innerHTML;
          arr[236]=chips[248].innerHTML;
          arr[237]=chips[250].innerHTML;
          arr[238]=chips[252].innerHTML;
          arr[239]=chips[253].innerHTML;
          arr[240]=chips[225].innerHTML;
          arr[241]=chips[227].innerHTML;
          arr[242]=chips[229].innerHTML;
          arr[243]=chips[231].innerHTML;
          arr[244]=chips[233].innerHTML;
          arr[245]=chips[235].innerHTML;
          arr[246]=chips[237].innerHTML;
          arr[247]=chips[239].innerHTML;
          arr[248]=chips[241].innerHTML;
          arr[249]=chips[243].innerHTML;
          arr[250]=chips[245].innerHTML;
          arr[251]=chips[247].innerHTML;
          arr[252]=chips[249].innerHTML;
          arr[253]=chips[251].innerHTML;
          arr[254]=chips[255].innerHTML;
          arr[255]=chips[254].innerHTML;
        }
        else {
          arr[i]=chips[i].innerHTML;
        }
      }
    })

  return arr
}
