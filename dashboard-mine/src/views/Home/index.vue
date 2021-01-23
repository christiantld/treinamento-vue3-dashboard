<template>
  <custom-header @create-account="handlessAccountCreate" @login="handleLogin" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">feedbacker © 2021</p>
  </div>
</template>
<script>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CustomHeader from './CustoHeader.vue'
import Contact from './Contact.vue'

export default {
  components: { CustomHeader, Contact },
  setup() {
    const router = useRouter()

    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin() {}
    function handlessAccountCreate() {}

    return { handleLogin, handlessAccountCreate }
  }
}
</script>
