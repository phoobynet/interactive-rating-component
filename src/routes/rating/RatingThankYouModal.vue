<script lang="ts" setup>
import Card from '@/components/Card.vue'
import ThankYou from '@/assets/images/illustration-thank-you.svg'

defineProps<{ selectedRating: number }>()
</script>

<template>
  <card class="p-6" modal>
    <template #content>
      <div class="flex flex-col items-center justify-center space-y-5">
        <img
          :src="ThankYou"
          alt="thank you"
          class="mb-2 block h-auto w-auto"
          style="max-width: 120px"
        />
        <div
          class="h-8 rounded-full bg-gray-700 px-4 text-center text-sm leading-8 text-orange-400"
          style="padding-top: 2px"
        >
          You selected {{ selectedRating }} out of 5
        </div>
        <div class="flex flex-col items-center justify-center space-y-1">
          <p class="text-2xl font-semibold text-white">Thank you!</p>
          <p class="prose text-center text-gray-400">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      </div>
    </template>
  </card>
</template>

<style lang="scss" scoped></style>
