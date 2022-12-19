<template>
  <div class="card">
    <img class="icon" v-if="props.icon" src="/src/assets/img/csgo-toolbox.png" alt="" />
    <a class="icon-diy" :class="{'bg-[#dfdfdf] hover:bg-[#e4e4e4]': background}" v-else :href="url">
      <slot />
    </a>
    <p class="title" v-if="props.title" ><a :href="url">{{props.title}}</a></p>
    <p class="description text">{{props.desc}}</p>
  </div>
</template>

<script lang="ts" setup>
// Props
const props = defineProps({
  title: String,
  icon: String,
  url: String,
  desc: String,
  background: Boolean,
});
</script>

<style lang="scss" scoped >
.card {
  @apply px-6 py-6 rounded-xl bg-[#f6f6f6] hover:bg-[#f3f3f3] bg-opacity-90 transition duration-200;
  @apply flex flex-col h-full;

  .icon {
    @apply w-12 mb-0.5 max-w-fit rounded-xl bg-[#e6e6e6] hover:bg-[#e3e3e3] hover:shadow-lg active:scale-95 bg-opacity-90 transition duration-200 cursor-pointer select-none;
  }

  .icon-diy {
    @apply w-12 h-12 mb-0.5 rounded-xl text-[#373737] active:scale-95 bg-opacity-90 text-2xl text-center transition duration-200 cursor-pointer select-none;
  }

  .title {
    @apply py-2 max-w-fit font-bold text-lg text-[#222] underline-offset-4 hover:underline transition duration-200 cursor-pointer;
  }

  .description {
    @apply text-[#888];
  }
}
</style>
