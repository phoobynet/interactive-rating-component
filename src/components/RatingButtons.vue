<script lang="ts" setup>
import { computed } from 'vue'
import RatingButton from '@/components/RatingButton.vue'

const props = defineProps<{
  ratings: number
  selectedRating?: number | undefined
}>()
const emit = defineEmits(['ratingSelected'])

const ratingsRange = computed(() => {
  const r: number[] = []

  for (let i = 1; i <= props.ratings; i++) {
    r.push(i)
  }

  return r
})
</script>

<template>
  <div class="rating-buttons">
    <rating-button
      v-for="rating in ratingsRange"
      :key="rating"
      @rating-selected="emit('ratingSelected', rating)"
      :rating="rating"
      :selected-rating="selectedRating"
    >
      {{ rating }}
    </rating-button>
  </div>
</template>

<style lang="scss" scoped>
.rating-buttons {
  @apply flex flex-row items-center justify-between;
}
</style>
