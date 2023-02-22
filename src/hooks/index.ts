import { ref } from "vue";
import type { Ref } from "vue";
import { getUrlByFile } from "@/utils";

export function useTaggleRole(): [Ref<string>, () => void] {
  const currRole = ref("right");
  const changeCurrRole = () => {
    currRole.value = currRole.value === "left" ? "right" : "left";
  };
  return [currRole, changeCurrRole];
}

export function useUpload(): [Ref<string>, (event: Event) => void, Ref<string>] {
  const url = ref(new URL("../assets/img/self.jpg", import.meta.url).href);
  const type = ref("video");
  const upload = (event: Event) => {
    const file = event.target.files[0];
    if (file.type.includes("image")) {
      type.value = "image";
    } else {
      type.value = "video";
    }
    url.value = getUrlByFile(file);
  };
  return [url, upload, type];
}

export function useTaggleEdit(name: string = "涵枫雪"): [Ref<boolean>, Ref<string>, () => void, () => void] {
  const text = ref(name);
  const isEdit = ref(true);
  const intoEdit = () => {
    isEdit.value = false;
  };
  const intoExit = () => {
    isEdit.value = true;
  };
  return [isEdit, text, intoEdit, intoExit];
}
