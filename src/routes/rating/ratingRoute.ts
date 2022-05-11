import type { RouteRecordRaw } from 'vue-router'
import Rating from '@/routes/rating/Rating.vue'

export const ratingRoute: RouteRecordRaw = {
  path: '/',
  component: Rating,
  name: 'Rating',
}
