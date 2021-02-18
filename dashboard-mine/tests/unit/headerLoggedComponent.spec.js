/* eslint-disable space-before-function-paren */
import HeaderLogged from '@/components/HeaderLogged'
import { shallowMount } from '@vue/test-utils'
import { routes } from '@/router'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const mockStore = { currentUser: {} }

jest.mock('@/hooks/useStore', () => {
  return () => {
    return mockStore
  }
})

describe('Header logged component', () => {
  it('It should render Header logged correctly', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: { plugins: [router] }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('It should render 3 dots when no user logged in', async () => {
    router.push('/')
    await router.isReady()
    const wrapper = shallowMount(HeaderLogged, {
      global: { plugins: [router] }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('...')
  })

  it('It should render user name when user is logged in', async () => {
    router.push('/')
    await router.isReady()
    mockStore.currentUser.name = 'Igor'
    const wrapper = shallowMount(HeaderLogged, {
      global: { plugins: [router] }
    })

    const buttonLogout = wrapper.find('#logout-button')
    expect(buttonLogout.text()).toBe('Igor (sair)')
  })
})
