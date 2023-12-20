<template>
  <div id="window" ref="root" class="flex flex-col items-center justify-center w-full h-full">
    <nav :class="{ 'opacity-0': !showNav }" id="nav">
      HLAE中文站
    </nav>

    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    <footer>
      <span>Presented by <a href="https://github.com/Purple-CSGO" class="author">Purple-CSGO</a> ©2023</span>
      <a href="https://beian.mps.gov.cn/#/query/webSearch?code=34012302000653" rel="noreferrer"
        target="_blank" class="beian"><img src="@/assets/img/beian.png" alt="beian"/>皖公网安备34012302000653</a>
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
  background: transparent;
  font-family: "HarmonyOS Sans SC", "HarmonyOS Sans", "Sarasa Gothic SC", "PingFang SC", Helvetica, Helvetica Neue, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

#window {
  @apply bg-white dark:bg-[#161413];
}

nav {
  @apply sticky top-0 w-full h-20 border-b bg-white bg-opacity-70 backdrop-blur-2xl z-30 transition duration-200 ease-in-out flex justify-center items-center font-bold text-xl tracking-wider text-[#3a3a3a] dark:bg-black dark:bg-opacity-70 dark:text-[#eaeaea] dark:border-[#131211];
}

footer {
  @apply w-full h-32 mt-36 bg-gray-100 text-[#888] flex flex-col items-center justify-center gap-4 text-center tracking-widest transition dark:text-[#aaa] dark:bg-[#262423];

  .author {
    @apply text-[#555] hover:text-[#333] font-bold dark:text-[#eee] dark:hover:text-[#fff];
  }

  .beian {
    @apply font-normal text-sm tracking-widest text-[#333336] hover:underline underline-offset-2 flex gap-2;

    img {
      @apply w-4;
    }
  }
}
</style>
