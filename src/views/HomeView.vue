<template>
  <div>
    <button class="button" @click="router.push('/chatRecord')">聊天记录</button>
    <button class="button" @click="router.push('/wechatMoments')">朋友圈</button>
    <button class="button" @click="router.push('/nickname')">昵称</button>
    <button class="button" @click="router.push('/video')">单个视频</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
.button {
  margin-right: 5px;
}
</style>
