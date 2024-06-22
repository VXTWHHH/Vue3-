import {onMounted, onUnmounted, ref,watch} from 'vue'
const isLogin = ref(localStorage.getItem('isLogin')==='true')

watch(isLogin,(newValue)=>{
    localStorage.setItem('isLogin',newValue)
})

window.addEventListener('beforeunload',()=>{
    localStorage.setItem('isLogin',false)
})

export default isLogin
    