<template>
  <div>
    <button style="margin-right: 5px" @click="router.push('/chatRecord')">聊天记录</button>
    <button @click="router.push('/wechatMoments')">朋友圈</button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>
