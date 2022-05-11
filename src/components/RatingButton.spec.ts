import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RatingButton from '@/components/RatingButton.vue'

describe('RatingButton', () => {
  it('should emit click event', () => {
    const wrapper = mount(RatingButton, {
      props: {
        selectedRating: undefined,
        rating: 1,
      },
    })

    wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('should display the rating', () => {
    const wrapper = mount(RatingButton, {
      props: {
        selectedRating: undefined,
        rating: 1,
      },
    })

    expect(wrapper.text()).toEqual('1')
  })

  it('should indicate rating selected', () => {
    const wrapper = mount(RatingButton, {
      props: {
        selectedRating: 1,
        rating: 1,
      },
    })

    expect(wrapper.find('button').classes()).toContain('selected')
  })

  it('should change color when hovering', () => {
    const wrapper = mount(RatingButton, {
      props: {
        selectedRating: undefined,
        rating: 1,
      },
    })

    const button = wrapper.find('button')
    button.trigger('mouseover')
    console.log(getComputedStyle(wrapper.element))

    expect(button.classes()).toContain('bg-gray-400')
  })
})
