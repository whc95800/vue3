<template>
  <h1>一个人的信息</h1>
  姓:<input type="text" v-model="person.lastName">
  <br>
  名:<input type="text" v-model="person.firstName">
  <br>
  <span>全名:{{person.fullName}}</span>
  <br>
  全名:<input type="text" v-model="person.fullName">

</template>

<script>
import {reactive,computed} from "vue";

export default {
  name: 'Demo',
  setup(){
    let person = reactive({
      firstName : '三',
      lastName:'张'
    })

    person.fullName = computed({
        get(){
         return person.lastName + '-' + person.firstName
        },
        set(value){
          const nameArr = value.split('-')
          person.lastName = nameArr[0]
          person.firstName = nameArr[1]
        }
    })

    return{
      person
    }
  }
}
</script>

<style>

</style>
