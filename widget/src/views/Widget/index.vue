<template>
  <teleport to="body">
    <component
      @open-box="handleOpenBox"
      @close-box="handleCloseBox"
      :is="state.component"
    />
  </teleport>
</template>

<script lang="ts">
import { defineComponent, reactive, watch } from 'vue'
import Box from './Box.vue'
import useIframe from '@/hooks/iframe'
import Standby from './Standby.vue'
import useStore from '@/hooks/store'

type State = {
  component: string
}

interface SetupReturn {
  state: State
  handleCloseBox(): void
  handleOpenBox(): void
}

export default defineComponent({
  components: { Standby, Box },
  setup(): SetupReturn {
    const iframe = useIframe()
    const store = useStore()
    const state = reactive<State>({
      component: 'Standby'
    })

    watch(
      () => store.currentComponent,
      () => {
        iframe.updateCoreValuesOnStore()
      }
    )

    function handleCloseBox(): void {
      iframe.notifyClose()
      state.component = 'Standby'
    }

    function handleOpenBox(): void {
      iframe.notifyOpen()
      state.component = 'Box'
    }

    return { state, handleOpenBox, handleCloseBox }
  }
})
</script>
