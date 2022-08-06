<template>
  <div>
  <button v-if="!isLogin" @click="currentType = 2">Войти</button>
  <button v-if="!isLogin" @click="currentType = 1">регистрация</button>
  <ModalWindow :modalOn="modalOn" @closeModal="currentType = 0" v-if="currentType"/>
  <button v-if="isLogin" @click="logout">выйти</button>
  </div>
</template>

<script>
import ModalWindow from '@/components/app-header/account-control/modal-window.vue'
import { authStore } from '@/store/auth'
import { mapWritableState, mapActions } from "pinia";

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
    ...mapWritableState(authStore, ['currentType', 'isLogin']),
  },

  methods: {
    ...mapActions(authStore, ['logout']),
  }
}
</script>

<style>

</style>