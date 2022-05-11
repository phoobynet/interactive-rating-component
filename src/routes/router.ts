import { createRouter, createWebHistory } from 'vue-router'
import { ratingRoute } from '@/routes/rating/ratingRoute'

export const router = createRouter({
  routes: [ratingRoute],
  history: createWebHistory(),
})
