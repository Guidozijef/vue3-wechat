<template>
  <div class="moments">
    <div class="video-container">
      <video ref="video" width="100%" height="300" class="video" :src="currVideoSrc" preload="auto" @click="tagglePlay"></video>
      <i v-if="isPlay === 'play'" class="iconfont icon-bofang" @click="play"></i>
      <i v-else-if="isPlay === 'pause'" class="iconfont icon-zanting" @click="pause"></i>
    </div>
    <div class="header-box">
      <input type="file" name="" class="video_uplaod" @change="uploadVideo" />
      <span class="name">枫桥夜泊</span>
      <img class="header-img" :src="selfImg" alt="" />
      <input type="file" name="" class="header-img_upload" @change="uploadSelfImg" />
    </div>
    <div class="content-box">
      <div class="people-box">
        <div>
          <img class="other-header-img" :src="otherImg" alt="" />
          <input type="file" name="" class="other-header-img_upload" @change="uploadOtherImg" />
        </div>
        <p class="name-info">
          <span v-if="isEdit" class="other-name" @click="intoEdit">{{ otherNme }}</span>
          <input v-else type="text" v-model="otherNme" @blur="intoExit">
          <span class="text">世界那么大我想世界那么大我想去看看世界那么大我想去看看世界那么大我想去看看世界那么大我想去看看去看看</span>
          <div style="width:100%;height:200px">
            <video ref="video1" class="video" :src="currVideoSrc" preload="auto"></video>
          </div>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUpload, useTaggleEdit } from "@/hooks";

const [selfImg, uploadSelfImg] = useUpload();

const [otherImg, uploadOtherImg] = useUpload();

const [currVideoSrc, uploadVideo] = useUpload();

const [isEdit, intoEdit, intoExit] = useTaggleEdit()

const otherNme = ref("涵枫雪")

const video = ref();
const video1 = ref();

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
    video1.value.play();
  } else {
    video.value.pause();
    video1.value.pause();
  }
};

const play = () => {
  if (!currVideoSrc.value) return;
  video.value.play();
  video1.value.play();
};

const pause = () => {
  video.value.play();
  video1.value.play();
};
</script>

<style lang="scss" scoped>
.moments {
  height: 100%;
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
      width: 100px;
      text-align: right;
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
        width: 40px;
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
        .video {
          height: 100%;
          width: 100%;
          background-color: #000;
        }
      }
    }
  }
}
</style>
