<template>
  <div class="moments">
    <div class="video-container">
      <video ref="video" width="100%" height="300" class="video" :src="currVideoSrc" preload="auto" @click="tagglePlay"></video>
      <i v-if="isPlay === 'play'" class="iconfont icon-bofang" @click="play"></i>
      <i v-else-if="isPlay === 'pause'" class="iconfont icon-zanting" @click="pause"></i>
    </div>
    <div class="header-box">
      <input type="file" name="" class="video_uplaod" @change="previewVideo" />
      <span class="name">枫桥夜泊</span>
      <img class="header-img" :src="currImg" alt="" />
      <input type="file" name="" class="header-img_upload" @change="uploadImg" />
    </div>
    <div class="content-box">
      <div class="people-box">
        <div>
          <img class="other-header-img" :src="currImg" alt="" />
          <input type="file" name="" class="other-header-img_upload" @change="uploadImg" />
        </div>
        <p class="name-info">
          <span class="other-name">枫桥夜泊</span>
          <span class="text">世界那么大我想世界那么大我想去看看世界那么大我想去看看世界那么大我想去看看世界那么大我想去看看去看看</span>
          <video ref="video" width="100%" height="500" class="video" :src="currVideoSrc" preload="auto"></video>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const currImg = ref(new URL("../assets/img/self.jpg", import.meta.url).href);
const currVideoSrc = ref("");

const video = ref();

let isPlay = ref("play");

onMounted(() => {
  //监听播放开始
  video.value.addEventListener("play", function () {
    console.log("开始播放");
    isPlay.value = "";
  });

  //监听播放结束
  video.value.addEventListener("pause", function () {
    console.log("播放暂停");
    isPlay.value = "pause";
  });

  //监听播放结束
  video.value.addEventListener("ended", function () {
    console.log("播放结束");
    isPlay.value = "play";
  });
});

const tagglePlay = () => {
  if (video.value.paused) {
    video.value.play();
  } else {
    video.value.pause();
  }
};

const uploadImg = (event: Event) => {
  let file = event.target.files[0];
  if (file.type !== "image/png" && file.type !== "image/jpg" && file.type !== "image/jpeg") return;
  // if (file.size / 1024 / 1024 > 2) return; // 超过2M
  const windowURL = window.URL || window.webkitURL;
  const url = windowURL.createObjectURL(file);
  console.log(file);
  currImg.value = url;
};

const previewVideo = (event: Event) => {
  let file = event.target.files[0];
  // 建议判断下视频大小及格式，太大的可能会有问题
  const reader = new FileReader();
  reader.onload = (evt: Event) => {
    currVideoSrc.value = evt.target?.result;
    // video.value.src = evt.target?.result;
  };
  reader.readAsDataURL(file);
  console.log(file);
};

const play = () => {
  if (!currVideoSrc.value) return;
  video.value.play();
};

const pause = () => {
  video.value.play();
};
</script>

<style lang="scss" scoped>
.moments {
  .video-container {
    height: 300px;
    width: 100%;
    background-color: #000;
    .video {
      height: 100%;
      width: 100%;
    }
    .icon-bofang {
      font-size: 60px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
    .icon-zanting {
      font-size: 60px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: #fff;
    }
  }
  .header-box {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: absolute;
    right: 10px;
    margin-top: -30px;
    .name {
      font-size: 16px;
      margin-right: 10px;
      color: #fff;
      margin-top: -35px;
    }
    .video_uplaod {
      opacity: 0;
    }
    .header-img {
      display: inline-block;
      height: 60px;
      width: 60px;
      border-radius: 4px;
      background-color: #fff;
    }
    .header-img_upload {
      display: inline-block;
      height: 60px;
      width: 60px;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }
  }
  .content-box {
    margin: 40px 20px 0px;
    .people-box {
      display: flex;
      // align-items: center;
      .other-header-img {
        height: 40px;
        height: 40px;
        border-radius: 2px;
        display: inline-block;
      }
      .other-header-img_upload {
        width: 40px;
        height: 40px;
        position: absolute;
        left: 0;
        opacity: 0;
      }
      .name-info {
        display: inline-block;
        margin-left: 7px;
        .other-name {
          font-size: 15px;
          color: #5c6b8c;
          display: block;
        }
        .text {
          display: block;
          font-size: 16px;
          color: #000;
        }
      }
    }
  }
}
</style>
