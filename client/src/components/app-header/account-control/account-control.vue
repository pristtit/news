<template>
  <div>
    <login/>
    <exit/>
  </div>
</template>

<script>
import login from '@/components/app-header/account-control/account-control__login.vue'
import exit from '@/components/app-header/account-control/account-control__exit.vue'

export default {

    components: {
        login: login,
        exit: exit,
    }
}
</script>

<style>

</style>