import useStore from '@/hooks/useStore'
import {
  resetUserStore,
  setCurrentUser,
  setApiKey,
  cleanCurrentUser
} from '@/store/user.js'
describe('User Store', () => {
  afterEach(() => {
    resetUserStore()
  })
  it('It should set current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Christian' })
    expect(store.User.currentUser.name).toBe('Christian')
  })

  it('It should set API key on current user', () => {
    const store = useStore()
    setApiKey('123')
    expect(store.User.currentUser.apiKey).toBe('123')
  })

  it('It should clean current user', () => {
    const store = useStore()
    setCurrentUser({ name: 'Christian' })
    expect(store.User.currentUser.name).toBe('Christian')
    cleanCurrentUser()
    expect(store.User.currentUser.name).toBeFalsy()
  })
})
