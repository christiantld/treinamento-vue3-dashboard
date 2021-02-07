import Home from '@/views/Home'
import { routes } from '@/router'
import { shallowMount } from '@vue/test-utils'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/home'),
  routes
})

describe('Home component', () => {
  it('It should render Home correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(Home, {
      global: { plugins: [router] }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
