<template>
  <app-header @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view />
  </div>
  <teleport to="body">
  <login-modal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
  </teleport>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import LoginModal from "./components/LoginModal.vue";
import firebase from "../firebase";

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
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit('setIsLoggedIn', true)
        this.$store.commit('setAuthUser', user)
      } else {
        this.$store.commit('setIsLoggedIn', false)
        this.$store.commit('setAuthUser', {})
      }
    });
  },
};
</script>

<style>

</style>