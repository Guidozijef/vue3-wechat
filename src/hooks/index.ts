import { ref } from "vue";
export function useTaggleRole() {
  const currRole = ref("right");
  const changeCurrRole = () => {
    currRole.value = currRole.value === "left" ? "right" : "left";
  };
  return [currRole, changeCurrRole];
}
