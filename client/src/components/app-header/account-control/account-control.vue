<template>
  <div>
  <button @click="currentType = 2">Войти</button>
  <button @click="currentType = 1">регистрация</button>
  <ModalWindow :modalOn="modalOn" @closeModal="currentType = 0" v-if="currentType"/>
  <button>выйти</button>
  </div>
</template>

<script>
import ModalWindow from '@/components/app-header/account-control/modal-window.vue'
import { authStore } from '@/store/auth'
import { mapWritableState } from "pinia";

export default {

  components: {
    ModalWindow: ModalWindow
  },

  data() {
    return {
      modalOn: false
    }
  },

  computed: {
    ...mapWritableState(authStore, ['currentType']),
  },
}
</script>

<style>

</style>