<script lang="ts" setup>
defineProps<{ disabled: boolean }>()

const emit = defineEmits(['click'])
</script>

<template>
  <button @click="emit('click')" type="submit" :disabled="disabled">
    submit
  </button>
</template>

<style lang="scss" scoped>
button {
  @apply h-10 w-full rounded-full bg-orange-500 font-bold uppercase tracking-widest text-white disabled:bg-slate-600;

  &:hover:not([disabled]) {
    @apply bg-white text-orange-500;
  }
}
</style>
