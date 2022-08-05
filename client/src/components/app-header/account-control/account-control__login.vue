<template>
  <button @click="modalOn = true">регистрация</button>
  <ModalWindow @closeModal="modalOn = false" v-if="modalOn"/>
</template>

<script>
import ModalWindow from '@/components/app-header/account-control/modal-window.vue'
export default {

  components: {
    ModalWindow: ModalWindow
  },

  data() {
    return {
      modalOn: false
    }
  }
}
</script>

<style>

</style>