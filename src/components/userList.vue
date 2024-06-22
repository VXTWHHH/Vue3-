<style></style>

<template>
    <div>
        <h3>用户管理页面</h3>
        <div class="table-responsive">
            <table class="table table-light">
                <thead>
                    <tr>
                        <th scope="col">编号</th>
                        <th scope="col">姓名</th>
                        <th scope="col">等级</th>
                        <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="" v-for="user in users" :key="user.id">
                        <td scope="row">{{user.id}}</td>
                        <td>{{user.username}}</td>
                        <td>{{user.priority}}</td>
                        <td><a name="" id="" class="btn btn-outline-success" href="#" role="button" @click="toDetail(user.id)">详情</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    </div>
</template>

<script setup>
defineProps(['users'])
const emit = defineEmits(['toDetail'])
const toDetail = (id)=>{
    emit('toDetail',id)
}
</script>