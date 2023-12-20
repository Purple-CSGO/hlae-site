<template>
  <div class="card">
    <a class="icon-diy" :class="{'bg-[#dfdfdf] dark:-[#222] hover:bg-[#666] dark:hover:bg-[#e4e4e4]': background}" :href="url" target="_blank">
      <slot />
    </a>

    <div class="flex flex-wrap gap-2 py-2">
      <p class="title" v-if="props.title" ><a :href="url" target="_blank">{{props.title}}</a></p>
      <tag v-if="version" :content="version" />
    </div>

    <p class="description">{{props.desc}}</p>

    <div class="flex flex-row gap-3 mt-3">
      <a v-if="download_cdn" :href="download_cdn" target="_blank" class="download-btn bg-[#CA4940] hover:bg-[#B33B32] text-white">加速下载</a>
      <a v-if="download_original" :href="download_original" target="_blank" class="download-btn bg-[#dedede] dark:bg-[#ccc] hover:bg-[#ddd] text-[#444] dark:text-[#111]">原始下载</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
// Props
const props = defineProps({
  title: String,
  url: String,
  desc: String,
  background: Boolean,
  version: String,
  download_cdn: String,
  download_original: String,
});
</script>

<style lang="scss" scoped>
.card {
  @apply p-5 rounded-xl bg-[#f6f6f6] hover:bg-[#f1f1f1] bg-opacity-90 transition duration-200;
  @apply flex flex-col h-full;
  @apply dark:bg-[#333] dark:hover:bg-[#666];

  .icon {
    @apply w-12 mb-0.5 max-w-fit rounded-xl bg-[#e6e6e6] hover:bg-[#e3e3e3] hover:shadow-lg active:scale-95 bg-opacity-90 transition duration-200 cursor-pointer select-none;
    @apply dark:bg-[#e6e6e6] dark:hover:bg-[#e3e3e3];
  }

  .icon-diy {
    @apply w-12 h-12 mb-0.5 rounded-xl text-[#373737] hover:bg-[#e3e3e3] active:scale-95 bg-opacity-90 text-2xl text-center transition duration-200 cursor-pointer select-none;
    @apply dark:bg-[#ddd] dark:hover:bg-[#e3e3e3] dark:text-[#131415];
  }

  .title {
    @apply max-w-fit font-bold text-lg text-[#222] underline-offset-4 hover:underline transition duration-200 cursor-pointer;
    @apply dark:text-[#eae0e9]
  }

  .description {
    @apply text-[#888] flex-grow dark:text-[#9e9e9e];
  }

  .download-btn {
    @apply px-3 py-1.5 rounded-lg active:scale-95 transition;
  }
}
</style>
