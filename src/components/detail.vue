<style scoped></style>

<template>
    <div>
        <div class="d-grid gap-2 mx-auto" style="width: 100px;">
        <button type="button" name="" id="" class="btn btn-secondary my-3" @click="back">
            后退
        </button>
    </div>
    <h1 class="text-center">用户{{id}}的详情页面</h1>

    </div>
</template>

<script setup>
import { useRoute, useRouter} from 'vue-router';
const route = useRoute()
const router = useRouter()
const id = route.params.id
const back = ()=>{
    router.go(-2)
}
</script>