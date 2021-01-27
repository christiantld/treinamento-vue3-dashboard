<template>
  <modal-factory />
  <router-view />
</template>
<script>
import { watch } from 'vue'
import ModalFactory from '@/components/ModalFactory'
import { useRoute, useRouter } from 'vue-router'
import services from '@/services'
import { setCurrentUser } from '@/store/user'

export default {
  components: { ModalFactory },
  setup() {
    const route = useRoute()
    const router = useRouter()

    watch(
      () => route.path,
      // eslint-disable-next-line space-before-function-paren
      async () => {
        if (route.meta.hasAuth) {
          const token = window.localStorage.getItem('token')

          if (!token) {
            router.push({ name: 'Home' })
          }

          const { data } = await services.users.getMe()
          setCurrentUser(data)
        }
      }
    )
  }
}
</script>
<style>
</style>
