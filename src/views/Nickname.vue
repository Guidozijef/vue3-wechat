<template>
  <div class="nickname-container"></div>
  <div class="nickname-box">
    <div class="video-box" @click="clickVideo">
      <video ref="video" class="video" :src="currVideoSrc" autoplay loop preload="auto"></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const video = ref();
let currVideoSrc = ref(new URL("../assets/img/ai.mp4", import.meta.url).href);

const clickVideo = () => {
  video.value.play();
};
</script>

<style lang="scss" scoped>
.nickname-container {
  height: 100%;
  background-image: url("../assets/img/bg.jpg");
  background-size: cover;
}

.nickname-box {
  position: absolute;
  top: 49px;
  left: 97px;
  overflow: hidden;
  width: 109px;
  height: 82px;
}
.video-box {
  position: absolute;
  left: -78px;
  top: -137px;
  width: 290px;
  .video {
    width: 100%;
    height: 100%;
  }
}
</style>
