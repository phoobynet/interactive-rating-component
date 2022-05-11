<script lang="ts" setup>
defineProps<{ rating: number; selectedRating?: number }>()

const emit = defineEmits(['ratingSelected'])
</script>

<template>
  <button
    @click="() => emit('ratingSelected', rating)"
    :class="{ selected: selectedRating === rating }"
    style="padding-top: 3px"
  >
    {{ rating }}
  </button>
</template>

<style lang="scss" scoped>
button {
  @apply h-10 w-10 rounded-full bg-gray-700 text-gray-300 transition-all;
  &:hover {
    @apply scale-105 transform bg-gray-400 text-white;
  }

  &.selected {
    @apply bg-orange-500 text-white;
  }
}
</style>
