<template>
  <div
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link
      class="hvr-underline-reveal mx-3 align-middle"
      :class="$route.path === item.to ? 'active' : ''"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}
    </router-link>
    <button
      v-if="isLoggedIn"
      @click="logout"
      class="hvr-underline-reveal mx-3 align-middle"
    >
      Logout
    </button>
    <button
      v-else
      @click="$emit('open-login-modal')"
      class="hvr-underline-reveal mx-3 align-middle"
    >
      Login
    </button>
  </div>
</template>

<script>
import firebase from "../../firebase";

export default {
  props: {
    isLoggedIn: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      list: [
        { title: "Dc Heroes", to: "/dc-heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider-carousel" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reuseable-modal" },
        { title: "Chat", to: "/chat" },
      ],
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<style>
.hvr-underline-reveal {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.hvr-underline-reveal:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: dodgerblue;
  height: 2px;
  transform: translateY(4px);
  transition: 0.4s transform ease-out;
}

.hvr-underline-reveal:hover:before {
  transform: translateY(0);
}
.active.hvr-underline-reveal:before {
  transform: translateY(0);
}
</style>