<script lang="ts" setup>
import Card from '@/components/Card.vue'
import RatingButtons from '@/components/RatingButtons.vue'
import Star from '@/assets/images/icon-star.svg'
import SubmitButton from '@/components/SubmitButton.vue'

defineProps<{ selectedRating?: number }>()
const emit = defineEmits(['ratingSelected', 'submit'])

const onRatingSelected = (rating: number) => {
  emit('ratingSelected', rating)
}
</script>

<template>
  <Card class="p-6" modal>
    <template #header>
      <div class="flex flex-col space-y-4">
        <img :src="Star" alt="rating" class="star" />
        <header>
          <div>How did we do?</div>
        </header>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col space-y-4">
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <rating-buttons
          :ratings="5"
          :selected-rating="selectedRating"
          @rating-selected="onRatingSelected"
        ></rating-buttons>
      </div>
    </template>
    <template #footer>
      <submit-button :disabled="!selectedRating" @click="emit('submit')" />
    </template>
  </Card>
</template>

<style lang="scss" scoped>
.star {
  @apply h-10 w-10 rounded-full bg-gray-700 object-contain p-3;
}

button {
  &.submit {
    @apply h-10 w-full rounded-full bg-orange-500 font-bold uppercase tracking-widest text-white disabled:bg-slate-600;

    &:hover:not([disabled]) {
      @apply bg-white text-orange-500;
    }
  }
}
</style>
