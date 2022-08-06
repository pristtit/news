<template>
  <div class="modal-window__login-body">
    <h3>{{ auth[currentType - 1].title }}</h3>
    <input v-model="username" class="username" type="text" placeholder="Login">
    <input v-model="password" class="password" type="text" placeholder="Password">
    <button @click="request(username, password)">{{ auth[currentType - 1].btnTitle }}</button>
  </div>
</template>

<script>
import { authStore } from '@/store/auth'
import { mapActions } from "pinia";
import { mapWritableState } from "pinia";

export default {

    data() {
        return {
            username: null,
            password: null,
            resMassge: null,
        }
    },

    computed: {
      ...mapWritableState(authStore, ['auth','currentType']),
    },

    methods: {
    ...mapActions(authStore, ['registration', 'login']),

    async request(username, password) {
      if (this.auth[this.currentType - 1].type === 'registration') {
        
        await this.registration(username, password);
        this.currentType = 0;

       } else {
        await this.login(username, password);
        this.currentType = 0;
       }
    }
    },
}
</script>

<style>
.modal-window__login-body {
    display: flex;
    position: relative;
    height: 200px;
    width: 80%;
    flex-direction: column;
    align-content: center;
    justify-content: space-between;
}

</style>