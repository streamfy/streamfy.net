export const topPosition = ref<number>(150);
 const getHeaderHeight = () => {
  const header = document.querySelector("header") as HTMLElement;
  if (header) {
    return header.clientHeight;
  } else {
    return 0;
  }
};

onMounted(() => {
  topPosition.value = getHeaderHeight() + 60;
});
