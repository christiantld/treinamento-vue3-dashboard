import { reactive } from 'vue'

const state = reactive({
  isLoading: true
})

export default state

export function setGlobalLoading(status) {
  state.isLoading = status
}
