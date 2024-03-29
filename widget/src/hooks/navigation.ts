import useStore from './store'
import { setCurrentComponent, setFeedbackType } from '@/store'

export interface Navigation {
  back(): void
  next(): void
  setErrorState(): void
  setSuccessState(): void
}

export default function useNavigation(): Navigation {
  const store = useStore()

  function setErrorState(): void {
    setCurrentComponent('Error')
  }

  function setSuccessState(): void {
    setCurrentComponent('Success')
  }

  function next(): void {
    if (store.currentComponent === 'SelectFeedbackType') {
      setCurrentComponent('WriteAFeedback')
    }
  }

  function back(): void {
    if (store.currentComponent === 'WriteAFeedback') {
      setCurrentComponent('SelectFeedbackType')
      setFeedbackType('')
    }
  }

  return { back, next, setErrorState, setSuccessState }
}
