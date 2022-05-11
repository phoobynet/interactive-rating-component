<script lang="ts" setup>
import { ref } from 'vue'
import RatingModal from '@/routes/rating/RatingModal.vue'
import RatingThankYouModal from '@/routes/rating/RatingThankYouModal.vue'

const showRatingModal = ref<boolean>(true)
const showRatingThankYouModal = ref<boolean>(false)
const selectedRating = ref<number>()
const onRatingSelected = (rating: number) => {
  if (selectedRating.value === rating) {
    selectedRating.value = undefined
  } else {
    selectedRating.value = rating
  }
}
const onSubmit = () => {
  showRatingModal.value = false
  showRatingThankYouModal.value = true
}
</script>

<template>
  <div>
    <!-- Nothing to see here -->
  </div>
  <teleport to="body">
    <rating-modal
      v-if="showRatingModal"
      :selected-rating="selectedRating"
      @rating-selected="onRatingSelected"
      @submit="onSubmit"
    />
    <rating-thank-you-modal
      v-if="showRatingThankYouModal"
      :selected-rating="selectedRating"
    />
  </teleport>
</template>

<style lang="scss" scoped></style>
