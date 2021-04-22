<template>
  <section
    @click="close"
    class="h-screen w-screen z-20 bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto z-30 bg-white rounded shadow p-2">
        <div class="p-2 border">
          <h1 class="text-2xl text-center">Login</h1>
          <google-login @close-login-from-google="close" />

          <p class="text-center">or</p>
          <form @submit.prevent="submit" class="p-2">
            <div class="my-4">
              <label for="">Email or Username</label>
              <input
                v-model="email"
                type="text"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your email or username"
                required
                ref="emailRef"
              />
            </div>
            <div class="my-4">
              <label for="">Password</label>
              <input
                v-model="password"
                type="password"
                class="rounded shadow p-2 w-full"
                placeholder="Enter your password"
              />
            </div>
            <div class="my-4">
              <button
                type="submit"
                class="w-full rounded shadow-md bg-gradient-to-r from-green-600 to-green-900 p-2 text-white"
              >
                <span v-if="!isLoading"> Login </span>
                <span v-else>⏳</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "../../firebase";
import GoogleLogin from "./GoogleLogin.vue";
export default {
  components: {
    GoogleLogin
  },
  data() {
    return {
      email: "vue3user@mail.com",
      password: "vue3user",
      isLoading: false,
    };
  },
  emits: ["close-login"],
  methods: {
    close() {
      this.$emit("close-login");
    },
    submit() {
      this.isLoading = true;
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          this.email = "";
          this.password = "";
          this.isLoading = false;
          this.close();
        })
        .catch((err) => {
          console.log(err);
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.$refs.emailRef.focus();
  },
};
</script>

<style>
</style>