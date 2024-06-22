<style scoped>
  .main{
    /* background-color: var(--bs-tertiary-bg); */
    height: 100%;
    background-color: #304156;
  }
</style>

<template>
  <div class="main">
    <div class="container col-sm-9 col-lg-3 m-auto d-flex flex-column justify-content-center h-100">
    <form class="card" @submit.prevent="login">
      <div class="card-body">
        <h4 class="card-title text-center">Login</h4>
        <p class="card-text">
        <div class="mb-3">
          <label for="" class="form-label">用户名</label>
          <input type="text" class="form-control" name="" id="username" aria-describedby="emailHelpId" placeholder="用户名" v-model="username">
        </div>

        <div class="mb-3">
          <label for="" class="form-label">密码</label>
          <input type="password" class="form-control" pageName="" id="password" placeholder="密码" v-model="password"/>
        </div>
        <button type="submit" class="btn btn-success d-block w-100 mt-4">
          登录
        </button>
        </p>
      </div>
    </form>


  </div>
  </div>
</template>

<script setup>
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router';
const auth = inject('auth')
const router = useRouter()
const loginInfo = {
  username: 'admin',
  password: '123456'
}
const username = ref('')
const password = ref('')
const login = () => {
  if (username.value === '' || password.value === '') {
    return
  }
  if (username.value === loginInfo.username && password.value === loginInfo.password) {
    auth.value = true
    router.push({name:'Admin'})
  } else {
    alert('用户名或密码错误')
    username.value = ''
    password.value = ''
  }
}
</script>