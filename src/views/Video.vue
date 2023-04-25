<template>
  <div class="content-box">
    <div class="people-box">
      <div>
        <img class="other-header-img" :src="otherImg" alt="" />
        <input type="file" name="" accept="image/*" class="other-header-img_upload" @change="uploadOtherImg" />
      </div>
      <div class="name-info">
        <span v-if="isEdit" class="other-name" @click="intoEdit">{{ otherName }}</span>
        <input v-else type="text" v-model="otherName" @blur="intoExit" />
        <span v-if="isContentEdit" class="text" @click="intoContentEdit">{{ content }}</span>
        <input v-else type="text" v-model="content" @blur="intoContentExit" />
        <div style="width: 100%">
          <div v-if="type === 'video'">
            <video ref="video" class="video" :src="currVideoSrc" preload="auto"></video>
            <i v-if="isPlay === 'play'" class="iconfont icon-bofang" @click="play"></i>
            <i v-else-if="isPlay === 'pause'" class="iconfont icon-zanting" @click="pause"></i>
          </div>
          <img v-else class="content-img" :src="currVideoSrc" alt="" />
          <input type="file" accept="video/*" name="" class="other-header-img_upload" @change="uploadVideo" />
        </div>
        <div class="desc-box">
          <span v-if="isTimeEdit" class="other-name" @click="intoTimeEdit">{{ time }}</span>
          <input v-else type="text" v-model="time" @blur="intoTimeExit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useUpload, useTaggleEdit } from "@/hooks";
const [otherImg, uploadOtherImg] = useUpload();
const [isEdit, otherName, intoEdit, intoExit] = useTaggleEdit();
const [isTimeEdit, time, intoTimeEdit, intoTimeExit] = useTaggleEdit("5分钟");
const [currVideoSrc, uploadVideo, type] = useUpload();
const [isContentEdit, content, intoContentEdit, intoContentExit] = useTaggleEdit("世界那么大我想去看看");

const isPlay = ref("play");

const video = ref();

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

const play = () => {
  if (!currVideoSrc.value) return;
  video.value.play();
  video.value.play();
};

const pause = () => {
  video.value.play();
  video.value.play();
};
</script>

<style lang="scss" scoped>
.content-box {
  margin: 20px 20px 0px;
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
      top: 0;
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
      .content-img {
        height: 100%;
        width: 100%;
      }
      .desc-box {
        display: flex;
        align-items: center;
        height: 25px;
        color: #333741;
        font-weight: 600;
      }
    }
  }
}
</style>
