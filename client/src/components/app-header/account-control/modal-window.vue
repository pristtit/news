<template>
  <div class="modal-window">
    <div class="modal-window__window">
      <img
        @click="$emit('closeModal')"
        class="modal-window__exit"
        src="@/assets/images/x.png"
      >
      <modalWindowLoginBody />
    </div>
  </div>
</template>

<script>
import modalWindowLoginBody from './modal-window__login-body.vue'
export default {
  components: { modalWindowLoginBody },
  props: {
    modalOn: {
      type: String
    }
  }
}
</script>

<style scoped>
.modal-window {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vmax;
  height: 100vmin;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  bottom: 0;
  right: 0;
}

.modal-window__window {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  justify-content: space-between;
  z-index: 20;
  position: fixed;
}

.modal-window__exit {
  align-self: flex-end;
}

img {
  width: 20px;
}
</style>