export function getUrlByFile(file: File): string {
  //   if (file.type !== "image/png" && file.type !== "image/jpg") return;
  // if (file.size / 1024 / 1024 > 2) return; // 超过2M
  const windowURL = window.URL || window.webkitURL || window.mozURL;
  const url = windowURL.createObjectURL(file);
  return url;
}
