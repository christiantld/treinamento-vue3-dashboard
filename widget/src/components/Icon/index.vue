<template>
  <component :is="name" v-bind="$props" />
</template>

<script>
import Loading from './Loading.vue'
import Copy from './Copy.vue'
import ArrowDown from './ArrowDown'
import Chat from './Chat'
import ArrowRight from './ArrowRight'
import Close from './Close'
import Check from './Check.vue'
import Atention from './Atention.vue'

export default {
  components: {
    Loading,
    Copy,
    ArrowDown,
    Chat,
    Close,
    ArrowRight,
    Check,
    Atention
  },
  props: {
    name: { type: String, required: true }
  }
}
</script>
