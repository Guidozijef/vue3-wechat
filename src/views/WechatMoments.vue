<template>
  <div class="moments">
    <div class="video-container">
      <video ref="video" width="100%" height="300" class="video" :src="currVideoSrc" preload="auto" @click="tagglePlay"></video>
      <i v-if="isPlay === 'play'" class="iconfont icon-bofang" @click="play"></i>
      <i v-else-if="isPlay === 'pause'" class="iconfont icon-zanting" @click="pause"></i>
    </div>
    <div class="header-box">
      <input type="file" name="" accept="video/*" class="video_uplaod" @change="uploadVideo" />
      <div class="name-box">
        <span class="name">晓枫残月</span>
        <!-- <span class="desc">晓枫残月</span> -->
      </div>
      <img class="header-img" :src="selfImg" alt="" />
      <input type="file" name="" accept="image/*" class="header-img_upload" @change="uploadSelfImg" />
    </div>
    <p v-if="isSelfEdit" class="desc" @click="intoSelfEdit">{{ selfName }}</p>
    <input v-else style="width:100%" class="desc" type="text" v-model="selfName" @blur="intoSelfExit">
    <div class="content-box">
      <div class="people-box">
        <div>
          <img class="other-header-img" :src="otherImg" alt="" />
          <input type="file" name="" accept="image/*" class="other-header-img_upload" @change="uploadOtherImg" />
        </div>
        <p class="name-info">
          <span v-if="isEdit" class="other-name" @click="intoEdit">{{ otherName }}</span>
          <input v-else type="text" v-model="otherName" @blur="intoExit">
          <span v-if="isContentEdit" class="text" @click="intoContentEdit">{{ content }}</span>
          <input v-else type="text" v-model="content" @blur="intoContentExit" >
          <div style="width:100%;height:200px">
            <video ref="video1" class="video" :src="currVideoSrc" preload="auto"></video>
          </div>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useUpload, useTaggleEdit } from "@/hooks";

const [selfImg, uploadSelfImg] = useUpload();

const [otherImg, uploadOtherImg] = useUpload('other');

const [currVideoSrc, uploadVideo] = useUpload();

const [isEdit, otherName, intoEdit, intoExit] = useTaggleEdit("Mandy")

const [isContentEdit, content, intoContentEdit, intoContentExit] = useTaggleEdit("世界那么大我想去看看")

const [isSelfEdit, selfName, intoSelfEdit, intoSelfExit] = useTaggleEdit("长剑在黑夜呤唱悲歌，岁月如斑驳铜镜经年")


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


watch(currVideoSrc, () => {
  isPlay.value = "play"
})

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
    height: calc(100vw * 3/4);
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
    right: 20px;
    margin-top: -30px;
    .name-box {
      height: 60px;
      .name {
        display: block;
        line-height: 30px;
        font-size: 16px;
        margin-right: 10px;
        color: #fff;
        width: 100px;
        text-align: right;
      }
      .desc{
        line-height: 30px;
        display: block;
        font-size: 14px;
        margin-right: 10px;
        color: #000;
        width: 100px;
        text-align: right;
      }
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
  .desc{
    text-align: right;
    margin-top: 35px;
    margin-right: 20px;
    color: rgb(120, 120, 120);
    font-size: 12px;
  }
  .content-box {
    margin: 20px 20px 0px;
    .people-box {
      display: flex;
      // align-items: center;
      .other-header-img {
        width: 45px;
        height: 45px;
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
