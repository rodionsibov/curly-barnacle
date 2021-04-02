<template>
  <app-header @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view />
  </div>
  <login-modal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";

export default {
  components: {
    AppHeader,
    LoginModal,
  },
  data() {
    return {
      isLoginOpen: false,
    };
  },
  
};
</script>
