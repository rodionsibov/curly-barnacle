<template>
  <app-header :isLoggedIn="isLoggedIn" @open-login-modal="isLoginOpen = true" />
  <div class="w-full flex">
    <router-view />
  </div>
  <login-modal v-if="isLoginOpen" @close-login="isLoginOpen = false" />
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
      isLoggedIn: false,
      authUser: {},
    };
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.isLoggedIn = true;
        this.authUser = user;
      } else {
        this.isLoggedIn = false;
        this.authUser = {};
      }
    });
  },
};
</script>
