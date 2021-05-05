<template>
  <app-header />
  <div class="w-11/12 flex m-auto overflow-x-scroll sm:overflow-auto">
    <router-view />
  </div>
  <teleport to="body">
    <login-modal />
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
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.commit("setIsLoggedIn", true);
        this.$store.commit("setAuthUser", user);
      } else {
        this.$store.commit("setIsLoggedIn", false);
        this.$store.commit("setAuthUser", {});
      }
    });
  },
};
</script>

<style>
</style>