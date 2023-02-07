<template>
  <main class="main-container">
    <header class="header-container">
      <i class="iconfont icon-zuojiantou" @click="router.push('/')"></i>
      <h2 class="title">TKey.</h2>
      <i class="iconfont icon-icon_more"></i>
    </header>
    <div class="content-container">
      <div :class="`${item.type}-people`" v-for="(item, index) in contentData" :key="index">
        <div class="text-container">
          <img class="head-portrait" :src="imgState[item.type as TType]" alt="" />
          <input ref="file" type="file" class="upload" name="" @change="uploadImg($event, item.type as TType)" />
          <div class="people-content">
            {{ item.content }}
            <i class="delete-content" @click="deleteContent(item.id)">×</i>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer-container">
      <div class="curr-role">
        <img class="curr-portrait" :src="imgState[currRole]" alt="" @click="changeCurrRole" />
      </div>
      <div class="control-box">
        <!-- <i class="iconfont icon-yuyin-copy"></i> -->
        <i class="icon-locat icon-yuyin1"></i>
        <input v-model="value" class="input-content" type="text" @keyup.enter="sendMsg" />
        <span>
          <i class="icon-locat icon-xiaolian mr-10"></i>
          <i class="icon-locat icon-jia" @click="addControl"></i>
          <!-- <i class="iconfont icon-xianxingwode-copy-copy mr-10"></i> -->
          <!-- <i class="iconfont icon-zengjiatianjiajiahao-copy"></i> -->
        </span>
      </div>
      <div class="more-control" v-show="isMore">
        <div>发红包</div>
        <div>收红包</div>
        <div>发语音</div>
      </div>
      <span class="control-bar"></span>
    </footer>
  </main>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { contentData } from "./data";
import { useTaggleRole } from "@/hooks";
import { useRouter } from "vue-router";

const router = useRouter();

const imgState = reactive({
  left: new URL(`../assets/img/logo.svg`, import.meta.url).href, // import.meta.glob("../assets/logo.svg"),
  right: new URL(`../assets/img/role.png`, import.meta.url).href,
});

const [currRole, changeCurrRole] = useTaggleRole();

const value = ref("");

const isMore = ref(false);

type TType = "left" | "right";

const uploadImg = (event: Event, type: TType) => {
  let file = event.target.files[0];
  if (file.type !== "image/png" && file.type !== "image/jpg") return;
  // if (file.size / 1024 / 1024 > 2) return; // 超过2M
  const windowURL = window.URL || window.webkitURL;
  const url = windowURL.createObjectURL(file);
  imgState[type] = url;
};

const sendMsg = () => {
  contentData.value.push({
    type: currRole.value,
    content: value.value,
    id: new Date().valueOf(),
  });
  value.value = "";
};

const deleteContent = (id: number) => {
  const index = contentData.value.findIndex((f) => f.id === id);
  contentData.value.splice(index, 1);
};

const addControl = () => {
  isMore.value = !isMore.value;
};
</script>

<style scoped lang="scss">
.main-container {
  width: 100%;
  height: 100%;
  // position: absolute;
  // right: 100px;
  // width: 368px;
  // height: 780px;
  display: flex;
  flex-direction: column;
  background-color: #ededed;
  .header-container {
    padding: 0 10px;
    height: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    .title {
      font-size: 20px;
      color: #000;
      font-weight: 600;
    }
  }
  .content-container {
    &::-webkit-scrollbar {
      width: 0 !important;
    }
    padding: 10px;
    flex: 1;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    .head-portrait {
      display: inline-block;
      height: 45px;
      width: 45px;
      border-radius: 4px;
      background-color: #fff;
    }
    .upload {
      display: inline-block;
      height: 45px;
      width: 45px;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }
    .text-container {
      .people-content {
        margin-bottom: 10px;
        display: inline-block;
        min-height: 45px;
        padding: 10px;
        font-size: 16px;
        max-width: 70%;
        font-weight: 500;
        white-space: inherit;
        border-radius: 4px;
        &::before {
          content: "";
          width: 0px;
          height: 0px;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          position: absolute;
          top: 14.5px;
          border-radius: 4px;
        }
        .delete-content {
          position: absolute;
          top: 0px;
          display: none;
          background-color: rgb(29, 29, 210);
          border-radius: 50%;
          width: 15px;
          height: 15px;
          text-align: center;
          line-height: 11px;
          color: #fff;
          cursor: pointer;
        }
        &:hover {
          .delete-content {
            display: inline;
          }
        }
      }
    }

    .left-people {
      .text-container {
        display: flex;
        .people-content {
          background-color: #fff;
          margin-left: 10px;
          &::before {
            border-right: 8px solid #fff;
            border-left: 8px solid transparent;
            left: -14px;
          }
          &:hover {
            .delete-content {
              display: inline;
              right: 0px;
            }
          }
        }
      }
    }
    .right-people {
      .text-container {
        display: flex;
        justify-content: flex-start;
        flex-direction: row-reverse;
        .people-content {
          background-color: #94eb6c;
          margin-right: 10px;
          &::before {
            border-right: 8px solid transparent;
            border-left: 8px solid #94eb6c;
            right: -14px;
          }
          &:hover {
            .delete-content {
              display: inline;
              left: 0px;
            }
          }
        }
      }
    }
  }

  .footer-container {
    border-top: 1px solid #e4e4e4;
    background-color: #f7f7f7;
    position: relative;
    .curr-role {
      position: absolute;
      left: 0;
      bottom: 100%;
      height: 45px;
      width: 45px;
      .curr-portrait {
        display: inline-block;
        height: 45px;
        width: 45px;
      }
    }
    .control-box {
      padding: 0 10px;
      height: 48px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .icon-yuyin1 {
        background: url("../assets/img/yuyin.png") no-repeat 100% / cover;
      }
      .icon-jia {
        background: url("../assets/img/jia.png") no-repeat 100% / cover;
      }
      .icon-xiaolian {
        background: url("../assets/img/xiaolian.png") no-repeat 100% / cover;
      }
      .input-content {
        font-size: 20px;
        padding: 10px;
        height: 33px;
        border: none;
        outline: none;
        background: #fff;
        border-radius: 2px;
        width: 228px;
        margin: 0 10px;
      }
    }
    .more-control {
      height: 150px;
      width: 100%;
      padding: 10px;
    }
    .control-bar {
      display: block;
      margin: 0 auto;
      margin-top: 5px;
      height: 4px;
      width: 100px;
      background-color: #303030;
      border-radius: 3px;
    }
  }
}

.iconfont {
  font-size: 30px;
  cursor: pointer;
}
.icon-locat {
  display: inline-block;
  height: 30px;
  width: 30px;
}
.icon-xianxingwode-copy-copy {
  color: rgba(0, 0, 0, 0.82);
}
</style>
