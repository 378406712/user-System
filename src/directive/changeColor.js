import Vue from 'vue'
//自定义指令

const changeColor =Vue.directive("changeColor",function (el,binding) {
    el.style.color="#"+Math.random().toString(16).slice(2,8)
    el.style.fontSize=binding.value.font
if(binding.arg=='weight'){
    el.style.fontWeight=100
}
  })
  export default changeColor