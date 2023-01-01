<template>
  <div id="window" ref="root" class="w-full h-full flex flex-col justify-center items-center" >
    <nav :class="{'opacity-0': !showNav}" id="nav" >
      HLAE中文站
    </nav>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <footer>
      <span>Presented by <a href="https://github.com/Purple-CSGO" class="author">Purple-CSGO</a> ©2023</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
// noinspection TypeScriptCheckImport
import { throttle } from 'throttle-debounce';

const showNav = ref(false);
let nav: HTMLElement;

const onScroll = throttle(200, () => {
    showNav.value = nav.offsetTop > 120;
  }, { noLeading: false, noTrailing: false }
)

onMounted(() => {
  nav = document.getElementById("nav")

  window.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style lang="scss">
:root {
  background: #fff;
  font-family: "HarmonyOS Sans SC", "HarmonyOS Sans", "Sarasa Gothic SC", "PingFang SC", Helvetica, Helvetica Neue, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

nav {
    @apply sticky top-0 w-full h-20 border-b
    bg-white bg-opacity-70 backdrop-blur-2xl z-30 transition duration-200 ease-in-out
    flex justify-center items-center
    font-bold text-xl tracking-wider text-[#3a3a3a];
}

footer {
  @apply w-full h-28 mt-32 bg-gray-50 text-[#888] flex flex-col items-center justify-center gap-4 text-center tracking-widest transition;

  .author {
    @apply text-[#555] hover:text-[#333] font-bold;
  }
}
</style>
