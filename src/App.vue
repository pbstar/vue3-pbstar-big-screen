<template>
  <div class="container-wrapper">
    <div ref="screenRef" class="screen">
      <div class="header">
        <div class="title">实验室数字化智能管理系统</div>
      </div>
      <div class="body">
      </div>
    </div>
  </div>

</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';

const screenRef = ref<HTMLDivElement | null>();

onMounted(() => {
  scale();
});

window.addEventListener('resize', () => scale());

function getScale(_w: number, _h: number): number {
  const ww = window.innerWidth / _w;
  const wh = window.innerHeight / _h;
  return ww > wh ? wh : ww;
}
function scale() {
  const scale = getScale(3840, 2160);
  if (screenRef.value) {
    screenRef.value.style.transform = `scale( ${scale}) translate(-50%, -50%)`;
    screenRef.value.style.transition = 'all 0.5s linear';
  }
}

</script>
<style lang="scss" scoped>
.container-wrapper {
  background-color: rgb(17, 30, 99);
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .screen {
    width: 3840px;
    height: 2160px;
    margin-left: 50vw;
    margin-top: 50vh;
    transform-origin: left top;

    .header {
      width: 100%;
      height: 196px;
      background-image: url('@/assets/imgs/header.png');
      display: flex;
      align-items: center;
      justify-content: center;

      .title {
        font-size: 80px;
        font-weight: bold;
        color: var(--color-blue);
        line-height: 196px;
        text-align: center;
      }

    }
  }
}
</style>
