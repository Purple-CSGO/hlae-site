<template>
  <div class="tag">
    {{content}}
  </div>
</template>

<script lang="ts" setup>
// Props
const props = defineProps({
  content: String,
});
</script>

<style lang="scss" scoped>
.tag {
  @apply px-1.5 text-sm flex items-center text-[#777] bg-[#eaeaea] rounded-lg tracking-wider max-w-fit max-h-fit;
}
</style>
