import { ref } from "vue";
import { getUrlByFile } from "@/utils";
export function useTaggleRole() {
  const currRole = ref("right");
  const changeCurrRole = () => {
    currRole.value = currRole.value === "left" ? "right" : "left";
  };
  return [currRole, changeCurrRole];
}

export function useUpload() {
  const url = ref(new URL("../assets/img/self.jpg", import.meta.url).href);
  const upload = (event: Event) => {
    const file = event.target.files[0];
    url.value = getUrlByFile(file);
  };
  return [url, upload];
}

export function useTaggleEdit(name: string = "涵枫雪") {
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
