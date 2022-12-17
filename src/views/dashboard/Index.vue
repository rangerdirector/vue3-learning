<script lang="ts" setup>
import _ from 'lodash'
import { reactive } from 'vue';
const ddd = _.debounce(()=>{
  console.log(11111);
},300,{
  leading:true,
  trailing:false
})
let a:any = reactive([
  {aa:{aaa:'aaaa'}},
  {bb:''}
])
function fdsfdsfds(){
  console.log('赋值前',JSON.parse(JSON.stringify(a)));
  a[0].aa.aaa = 'jiojfioewjiof'
  console.log('赋值后',JSON.parse(JSON.stringify(a)));
}
</script>

<template>
  <div>dashboard</div>
  <button @click="ddd">ffffff</button>
  <button @click="fdsfdsfds">sfdsfdsf</button>
</template>

<style lang="scss" scoped></style>
