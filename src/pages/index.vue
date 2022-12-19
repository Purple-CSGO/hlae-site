<template>
  <div class="app">
    <div class="flex flex-col items-center text-center">
      <h1>HLAE中文站</h1>
<!--      <img src="/src/assets/img/hlae.png" alt="project" class="w-72 absolute top-8 opacity-5 blur-xl z-0 infini">-->

      <p class="py-8 text-[#666] text-xl tracking-widest">
        <span class="font-bold text-orange-600" >CSGO</span>等起源引擎游戏的影片制作工具<span class="font-bold text-[#CA4940]" >HLAE</span>的中文网站
      </p>

      <div class="flex flex-row gap-4">
        <button class="main-btn text-[#fff] bg-[#CA4940] hover:bg-[#B33B32]">
          <img src="/src/assets/img/hlae.svg" alt="project" class="w-6">
          官方网站
        </button>
        <button class="main-btn text-[#333] bg-gray-100 hover:bg-gray-200">
          <i class="pi pi-github w-6"></i>
          本项目
        </button>
      </div>
    </div>

    <section>
      <h2>传送门</h2>
      <div class="cards">
        <card title="中文论坛" icon="" url="https://forum.hlae.site" desc="HLAE中文交流社区" :background="true">
          <i class="pi pi-comments pt-3"></i>
        </card>
        <card title="官方Wiki" icon="" url="https://github.com/advancedfx/advancedfx/wiki" desc="权威，但是英文 orz" :background="true">
          <i class="pi pi-book pt-3"></i>
        </card>
        <card title="官方Discord" icon="" url="https://discord.gg/NGp8qhN" desc="和开发者近距离交流" :background="true">
          <i class="pi pi-discord pt-3"></i>
        </card>
        <card title="付费CSGO集锦制作文档" icon="" url="https://forum.hlae.site/d/28-csgo" desc="适合新手入门的基础教学文档" :background="true">
          <i class="pi pi-video pt-3"></i>
        </card>
        <card title="问题与建议提交" icon="" url="https://github.com/advancedfx/advancedfx/issues" desc="tnnd 为什么不更新" :background="true">
          <i class="pi pi-question-circle pt-3"></i>
        </card>
        <card title="旧版中文站" icon="" url="https://github.com/advancedfx/advancedfx/issues" desc="旧版论坛存档" :background="true">
          <i class="pi pi-bookmark pt-3"></i>
        </card>
      </div>
    </section>

    <section>
      <h2>资源下载</h2>
      <div class="cards">
        <card title="HLAE" icon="" url="https://github.com/advancedfx/advancedfx" desc="起源游戏影片制作工具">
          <img src="/src/assets/img/hlae.png" alt="">
        </card>

        <card title="FFmpeg" icon="" url="https://ffmpeg.org" desc="免费开源的全能媒体转码工具" :background="false">
          <img src="/src/assets/img/ffmpeg.webp" alt="">
        </card>

        <card title="CSGO工具箱" icon="/csgo-toolbox.png" url="https://csgo-toolbox.upup.cool"
              desc="一个为CSGO游戏的各个方面带来便利的工具集合"></card>

        <card title="CSGO Demos Manager" icon="" url="https://csgo-demo-manager.com" desc="CSGO录像分析观看工具">
          <img src="/src/assets/img/csgo-demos-manager.png" alt="">
        </card>

        <card title="HLAE Studio" icon="" url="https://github.com/One-Studio/HLAE-Studio"
              desc="HLAE环境配置更新工具">
          <img src="/src/assets/img/hlae-studio.png" alt="" class="rounded-xl">
        </card>

        <card title="CFG预设" icon="" url="https://config.upup.cool" desc="适用于CSGO各场景的Config预设" :background="true">
          <i class="pi pi-github pt-3"></i>
        </card>

        <card title="nskinz" icon="" url="https://github.com/advancedfx/nskinz" desc="CSGO皮肤修改替换插件 advancedfx维护版本" :background="true">
          <i class="pi pi-github pt-3"></i>
        </card>

        <card title="MIGI" icon="" url="https://zoolsmith.github.io/MIGI3" desc="CSGO资源修改工具">
          <img src="/src/assets/img/migi.png" alt="">
        </card>

        <card title="ReShade" icon="" url="https://reshade.me" desc="重塑你的游戏画面">
          <img src="/src/assets/img/reshade.png" alt="">
        </card>

        <card title="ShanaEncoder" icon="😁" url="https://shana.pe.kr/shanaencoder_summary" desc="方便好用的转码压制图形工具">
          <img src="/src/assets/img/shanaencoder.png" alt="">
        </card>

        <card title="Voukoder" icon="" url="https://www.voukoder.org" desc="PR、AE、Vegas等软件的编码导出插件">
          <img src="/src/assets/img/voukoder.png" alt="" class="rounded-xl">
        </card>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.app {
  @apply flex flex-col gap-20 px-8 pt-24 items-center justify-center;
  width: min(1000px, 100%);

  h1 {
    @apply text-5xl font-semibold text-[#333] sticky;
  }

  h2 {
    @apply text-3xl font-semibold text-[#444] mb-8;
  }

  section {
    @apply text-left w-full;

    h2 {
      @apply text-center;
    }
  }

  .main-btn {
    @apply pl-4 pr-5 py-2 flex flex-row justify-center items-center rounded-full font-semibold transition duration-200 active:scale-95;
  }

  .cards {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-8 w-full;

    card {
      @apply h-full;
    }
  }
}
</style>
