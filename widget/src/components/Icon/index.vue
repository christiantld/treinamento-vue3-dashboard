<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ArrowDown from './ArrowDown'
import Chat from './Chat'

export default {
  components: { Loading, Copy, ArrowDown, Chat },
  props: {
    name: { type: String, required: true }
  }
}
</script>
