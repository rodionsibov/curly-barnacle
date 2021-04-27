<template>
  <section class="flex w-full">
    <div class="m-auto">
      <div class="mt-10">
        <button
          class="px-2 py-1 border rounded my-4"
          @click="isModalOpen = true"
        >
          Add User
        </button>
        <table>
          <thead>
            <tr>
              <th class="px-4 py-2 border">ID</th>
              <th class="px-4 py-2 border">Avatar</th>
              <th class="px-4 py-2 border">Name</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users" :key="user._id">
              <td class="border px-4 py-2">{{ user._id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.name"
                  width="50"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.name }}</td>
              <td class="border px-4 py-2">{{ user.email }}</td>
            </tr>
          </tbody>
        </table>
        <div class="flex justify-between">
          <button
            class="px-3 py-2 border rounded mt-2"
            @click="prev"
            :disabled="state.users.page === 1"
            :class="state.users.page === 1 ? 'bg-gray-100' : 'hover:shadow'"
          >
            Prev
          </button>
          <button
            class="px-3 py-2 border rounded mt-2"
            @click="next"
            :disabled="state.users.page === state.users.total_pages"
            :class="
              state.users.page === state.users.total_pages
                ? 'bg-gray-100'
                : 'hover:shadow'
            "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </section>
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
import { onMounted, reactive, ref } from "vue";
import Modal from "../components/Modal";
export default {
  components: {
    Modal,
  },
  setup() {
    const isModalOpen = ref(false);
    const state = reactive({
      users: [],
      form: {
        name: "",
        email: "",
        avatar: "",
      },
    });

    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/users`);
      const data = await res.json();
      state.users = data;
    });

    async function next() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/users?page=2`);
      const data = await res.json();
      state.users = data;
    }

    async function prev() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/users?page=1`);
      const data = await res.json();
      state.users = data;
    }

    async function submit() {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.form),
      });
      const data = await res.json()
      console.log(data);
      state.users.push(data);
      state.form.name = "";
      state.form.email = "";
      state.form.avatar = "";
      isModalOpen.value = false

    }

    return { state, next, prev, isModalOpen, submit };
  },
};
</script>

<style>
</style>