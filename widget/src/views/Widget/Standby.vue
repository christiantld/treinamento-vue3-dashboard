<template>
  <div
    @click="() => emit('open-box')"
    class="fixed z-50 bottom-0 right-0 mb-5 mr-5 bg-brand-main rounded-full py-3 px-5 flex items-center shadow-xl cursos-pointe select-none animate__animated animate__fadeInUp animate__faster"
  >
    <span class="font-black text-white text-xl">
      <icon name="chat" color="white" size="27" class="mr-3" />
      Deixe um Feedback</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, SetupContext } from 'vue'
import Icon from '@/components/Icon/index.vue'

interface SetupReturn {
  emit: SetupContext['emit']
}

export default defineComponent({
  components: { Icon },
  setup(_, { emit }: SetupContext): SetupReturn {
    return { emit }
  }
})
</script>

<style>
</style>
