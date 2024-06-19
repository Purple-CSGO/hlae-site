<template>
  <div class="app">
    <div class="flex flex-col items-center text-center">
      <h1>HLAE中文站</h1>
<!--      <img src="@/assets/img/hlae.png" alt="project" class="absolute z-0 w-72 top-8 opacity-5 blur-xl infini">-->

      <p class="py-8 text-[#666] dark:text-[#bbb] text-xl tracking-widest">
        <span class="font-bold text-orange-600">CSGO</span>等起源引擎游戏的影片制作工具<span class="font-bold text-[#CA4940]">HLAE</span>的中文门户网站
      </p>

      <div class="flex flex-row gap-4">
        <a href="https://advancedfx.org" target="_blank" class="main-btn text-[#fff] bg-[#CA4940] hover:bg-[#B33B32]">
          <img src="@/assets/img/hlae.svg" alt="project" class="w-6">
          官方网站
        </a>
        <a href="https://github.com/Purple-CSGO/hlae-site" target="_blank" class="main-btn text-[#333] dark:text-[#222] bg-gray-100 dark:bg-gray-300 hover:bg-gray-200">
          <i class="w-6 pi pi-github" />
          本项目
        </a>
      </div>
    </div>

    <section>
      <h2>传送门</h2>
      <div class="cards">
        <card title="中文论坛"  url="https://forum.hlae.site" desc="HLAE中文交流社区" :background="true">
          <i class="pt-3 pi pi-comments"></i>
        </card>
        <card title="官方Wiki"  url="https://github.com/advancedfx/advancedfx/wiki" desc="权威，但是英文 orz" :background="true">
          <i class="pt-3 pi pi-book" />
        </card>
        <card title="新版文档" url="https://doc.hlae.site" desc="新版 advancedfx 文档，建设中" :background="true">
          <i class="pt-3 pi pi-bookmark" />
        </card>

        <card title="官方Discord" url="https://discord.gg/NGp8qhN" desc="和开发者近距离交流" :background="true">
          <i class="pt-3 pi pi-discord" />
        </card>
        <!-- <card title="CSGO集锦制作文档" url="https://forum.hlae.site/d/28-csgo" desc="适合新手入门的基础教学文档" :background="true">
          <i class="pt-3 pi pi-video" />
        </card> -->
        <card title="问题与建议提交" url="https://github.com/advancedfx/advancedfx/issues" desc="tnnd 为什么不更新" :background="true">
          <i class="pt-3 pi pi-question-circle" />
        </card>

        <card title="HUD生成器" url="https://hud.hlae.site/" desc="击杀信息和准星生成工具" :background="true">
          <i class="pt-3 pi pi-wrench" />
        </card>
        <card title="比赛录像分享" url="https://share.hlae.site/%E5%BD%95%E5%83%8F" desc="比赛录像搬运、加速下载" :background="true">
          <i class="pt-3 pi pi-video" />
        </card>
        <card title="HLTV" url="https://hltv.org/" desc="CSGO新闻、数据、录像" :background="true">
          <i class="pt-3 pi pi-video" />
        </card>
      </div>
    </section>

    <section>
      <h2>资源下载</h2>
      <div class="cards">
        <card title="HLAE" url="https://github.com/advancedfx/advancedfx" desc="起源游戏影片制作工具"
              download_cdn="https://api.upup.cool/get/hlae" download_original="https://github.com/advancedfx/advancedfx/releases/latest">
          <img src="@/assets/img/hlae.png" alt="hlae">
        </card>

        <card title="FFmpeg" url="https://ffmpeg.org" desc="免费开源的全能媒体转码工具" :background="false"
              download_cdn="https://api.upup.cool/get/ffmpeg" download_original="https://github.com/GyanD/codexffmpeg/releases/latest">
          <img src="@/assets/img/ffmpeg.webp" alt="ffmpeg">
        </card>

        <card title="CFG预设 For CS2" url="https://config.upup.cool/v2" desc="适用于CS2各场景的Config预设" :background="true"
              download_cdn="https://api.upup.cool/get/cs2-cfg" download_original="https://github.com/Purple-CSGO/CS2-Config-Presets/releases/latest">
          <i class="pt-3 pi pi-github"></i>
        </card>

        <card title="CS Demo Manager" url="https://cs-demo-manager.com" desc="CS录像分析观看工具" :background="true"
              download_cdn="https://api.upup.cool/get/csdm" download_original="https://github.com/akiver/CS-Demo-Manager/releases/latest">
          <img src="@/assets/img/csdm.svg" alt="" class="p-2">
        </card>

        <card title="CSGO工具箱" url="https://csgo-toolbox.upup.cool" desc="一个为CSGO游戏的各个方面带来便利的工具集合"
              download_cdn="https://api.upup.cool/get/csgo-toolbox" download_original="https://github.com/One-Studio/CSGO-Toolbox/releases/latest">
          <img src="@/assets/img/csgo-toolbox.png" alt="csgo-toolbox" class="rounded-xl">
        </card>

        <card title="HLAE Studio" url="https://github.com/One-Studio/HLAE-Studio" desc="HLAE环境配置更新工具"
              download_cdn="https://api.upup.cool/get/hlae-studio" download_original="https://github.com/One-Studio/HLAE-Studio/releases/latest">
          <img src="@/assets/img/hlae-studio.png" alt="" class="rounded-xl">
        </card>

        <card title="CFG预设" url="https://config.upup.cool" desc="适用于CSGO各场景的Config预设" :background="true"
              download_cdn="https://api.upup.cool/get/csgo-cfg" download_original="https://github.com/Purple-CSGO/CSGO-Config-Presets/releases/latest">
          <i class="pt-3 pi pi-github"></i>
        </card>

        <card title="nskinz" url="https://github.com/advancedfx/nskinz" desc="CSGO皮肤修改替换插件 advancedfx维护版本" :background="true"
              download_cdn="https://api.upup.cool/repo/advancedfx/nSkinz/&&&&.zip" download_original="https://github.com/advancedfx/nSkinz/releases/latest">
          <i class="pt-3 pi pi-github"></i>
        </card>

        <card title="MIGI" url="https://zoolsmith.github.io/MIGI3" desc="CSGO资源修改工具"
              download_cdn="https://cdn.upup.cool/https://github.com/ZooLSmith/MIGI3/blob/main/migi.exe" download_original="https://github.com/ZooLSmith/MIGI3/blob/main/migi.exe">
          <img src="@/assets/img/migi.png" alt="">
        </card>

        <card title="Voukoder" url="https://www.voukoder.org" desc="PR、AE、Vegas等软件的编码导出插件"
              download_cdn="" download_original="https://www.voukoder.org/forum/thread/783-downloads-instructions/">
          <img src="@/assets/img/voukoder.png" alt="" class="rounded-xl">
        </card>

        <card title="ReShade_advancedfx" url="https://github.com/advancedfx/ReShade_advancedfx" desc="连接HLAE录制的ReShade插件"
              download_cdn="https://api.upup.cool/get/reshade-afx" download_original="https://github.com/advancedfx/ReShade_advancedfx/releases/latest">
          <img src="@/assets/img/reshade.png" alt="">
        </card>

        <card title="ReShade" url="https://reshade.me" desc="重塑你的游戏画面"
              download_cdn="" download_original="https://reshade.me">
          <img src="@/assets/img/reshade.png" alt="">
        </card>

        <card title="ShanaEncoder" url="https://shana.pe.kr/shanaencoder_summary" desc="方便好用的转码压制图形工具" :background="true"
              download_cdn="" download_original="https://shana.pe.kr/shanaencoder_download">
          <i class="pt-3 pi pi-github"></i>
        </card>

        <card title="SRadar" url="https://sdr.hlae.cn" desc="Shekl制作的简易雷达" :background="true"
              download_cdn="https://api.upup.cool/get/sradar" download_original="https://github.com/zuoshipinSHEKL/SRadar/releases/latest">
          <i class="pt-3 pi pi-map"></i>
        </card>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import GetResourceData from "../composables/resource-data";

let data;

onMounted(async()=>{
  data = await GetResourceData();
  console.log(data)
})
</script>

<style lang="scss" scoped>
.app {
  @apply flex flex-col gap-20 px-8 pt-24 items-center justify-center;
  width: min(1000px, 100%);

  h1 {
    @apply text-5xl font-semibold text-[#333] dark:text-[#ddd] sticky;
  }

  h2 {
    @apply text-3xl font-semibold text-[#444] dark:text-[#ccc] mb-8;
  }

  section {
    @apply text-left w-full;

    h2 {
      @apply text-center;
    }
  }

  .main-btn {
    @apply pl-3 pr-4 py-2 flex flex-row justify-center items-center rounded-full font-semibold transition duration-200 active:scale-95;
  }

  .cards {
    @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-6 w-full;

    card {
      @apply h-full;
    }
  }
}
</style>
