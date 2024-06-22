<style scoped>
.user-container {
    height: 100%;
}

a{
    color: var(--bs-success);
}

.left-bar {
    background-color: #304156;
    height: 100%;
}

.left-bar button {
    padding: 20px 0;
    color: #bfcbd9;
}

.left-bar button:hover {
    background-color: #263445
}

.btn.selected{
    color: var(--bs-success);
}

.main-content {
    padding: 20px;
}
</style>

<template>
    <div class="user-container d-flex">
        <div class="left-bar col-lg-2 col-md-3 overflow-y-scroll">
            <div class="btn-group-vertical w-100" role="group" aria-label="">
                <button v-for="(name,index) in buttons" :key="index" @click="changePage(index)" type="button" class="btn" :class="{selected:selectButtonIndex===index}">{{name}}</button>
            </div>

        </div>
        <div class="content w-100">
            <div class="breadcrumb-container shadow-sm">
                <nav aria-label="breadcrumb" class="d-flex justify-content-between px-3">
                    <ol class="breadcrumb py-3 mb-0 d-flex align-items-center">
                        <li class="breadcrumb-item"><a href="#" @click="changePage(0)">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">{{selectButtonText}}</li>
                    </ol>
                    <div class="bar-right">
                        <img src="../assets/vue.svg" class="img-fluid rounded-top py-3" alt="" />
                        <a name="" id="" class="btn mx-3" href="#" role="button" @click="quit">退出</a>

                    </div>

                </nav>


            </div>
            <component :is="currentComponent" :users="users" :id="detailId" :pageName="pageNames" @back="back" @toDetail="toDetail" class="main-content w-100"></component>
        </div>
    </div>
</template>

<script setup>
import { computed, ref, shallowRef } from 'vue';
import detail from './detail.vue';
import userList from './userList.vue';
import { useRouter } from 'vue-router';
import stillWorking from './stillWorking.vue';

const router = useRouter()
const currentComponent = shallowRef(userList)
const detailId = ref(0)
const pageNames = ref('')
const selectButtonIndex = ref(0)
const users = ref([
    {
        id:1,
        username: '小明',
        priority: '一级用户'

    },
    {
        id:2,
        username: '小红',
        priority: '二级用户'

    },
    {
        id:3,
        username: '小蓝',
        priority: '三级用户'
    },
    {
        id:4,
        username: '小方',
        priority: '四级用户'
    }
])

const buttons = ref([
    '用户管理',
    '权限管理',
    '商品管理',
    '订单管理',
    '系统设置',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
    'PlaceHolder for test',
])

const selectButtonText = computed(()=>{
    return buttons.value[selectButtonIndex.value]
})

const back = ()=>{
    currentComponent.value = userList
}

const toDetail = (id)=>{
    detailId.value = id
    currentComponent.value = detail
}

const quit = ()=>{
    router.push('Login')
}

const changePage = (id)=>{
    selectButtonIndex.value = id
    switch (id) {
        case 0:
            currentComponent.value = userList
            break;
        case 1:
            pageNames.value = '权限管理'
            currentComponent.value = stillWorking
            break;
        case 2:
            pageNames.value = '商品管理'
            currentComponent.value = stillWorking
            break;
        case 3:
            pageNames.value = '订单管理'
            currentComponent.value = stillWorking
            break;
        case 4:
            pageNames.value = '系统设置'
            currentComponent.value = stillWorking
            break;
        default:
            pageNames.value = '没想好名字'
            currentComponent.value = stillWorking
            break;
    }
}
</script>