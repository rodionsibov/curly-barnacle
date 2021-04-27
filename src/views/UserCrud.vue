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
              <th class="px-4 py-2 border">First Name</th>
              <th class="px-4 py-2 border">Last Name</th>
              <th class="px-4 py-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in state.users.data" :key="user.id">
              <td class="border px-4 py-2">{{ user.id }}</td>
              <td class="border px-4 py-2">
                <img
                  :src="user.avatar"
                  :alt="user.first_name"
                  width="50"
                  class="rounded-full"
                />
              </td>
              <td class="border px-4 py-2">{{ user.first_name }}</td>
              <td class="border px-4 py-2">{{ user.last_name }}</td>
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
    });

    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_API_URL}/users`);
      const data = await res.json();
      state.users = data;
      console.log(data);
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

    return { state, next, prev, isModalOpen };
  },
};
</script>

<style>
</style>