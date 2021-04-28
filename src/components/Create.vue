<template>
  <button class="px-2 py-1 border rounded my-4" @click="isModalOpen = true">
    Add User
  </button>
  <teleport to="body">
    <modal v-if="isModalOpen" @close="isModalOpen = false">
      <template #title> Add New User </template>
      <template #body>
        <form @submit.prevent="submit">
          <div class="p-2">
            <label for="">Name</label>
            <input
              class="w-full p-2 rounded border"
              type="text"
              placeholder="User Name"
              v-model="state.form.name"
            />
          </div>
          <div class="p-2">
            <label for="">Email</label>
            <input
              class="w-full p-2 rounded border"
              type="email"
              placeholder="User Email"
              v-model="state.form.email"
            />
          </div>
          <div class="p-2">
            <label for="">Avatar</label>
            <input
              class="w-full p-2 rounded border"
              type="text"
              placeholder="Avatar Url"
              v-model="state.form.avatar"
            />
          </div>
          <div class="p-2">
            <input
              class="w-full p-2 rounded border hover:bg-gray-300"
              type="submit"
              value="Create"
            />
          </div>
        </form>
      </template>
    </modal>
  </teleport>
</template>

<script>
import { reactive, ref } from "vue";
import Modal from "./Modal";

export default {
  components: {
    Modal,
  },
  setup(_, { emit }) {
    const isModalOpen = ref(false);
    const state = reactive({
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    async function submit() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.form),
      });
      const data = await res.json();
      emit('new-user-added', data)
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false;
    }

    return { state, isModalOpen, submit };
  },
};
</script>

<style>
</style>