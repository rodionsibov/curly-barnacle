<template>
  <section class="px-4 mt-5">
    <h1 class="text-2xl text-center">User Crud</h1>
    <create @new-user-added="AddUser" />
  </section>
  <section class="flex w-full overflow-scroll px-4 sm:overflow-auto">
    <div class="m-auto">
      <table>
        <thead>
          <tr>
            <th class="px-4 py-2 border">ID</th>
            <th class="px-4 py-2 border">Avatar</th>
            <th class="px-4 py-2 border">Name</th>
            <th class="px-4 py-2 border">Email</th>
            <th class="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in state.users.data" :key="user.id">
            <td class="border px-4 py-2">{{ user.id }}</td>
            <td class="border px-4 py-2">
              <img
                :src="user.avatar"
                :alt="user.name"
                width="50"
                class="rounded-full"
              />
            </td>
            <td class="border px-4 py-2">
              {{ user.first_name }} {{ user.last_name }}
            </td>
            <td class="border px-4 py-2">{{ user.email }}</td>
            <td class="border px-4 py-2">
              <button
                class="px-2 py-1 bg-red-800 rounded text-white"
                @click="destroy(user.id)"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section class="px-4 mb-10">
    <div class="flex justify-between sm:justify-center">
      <button
        class="px-3 py-2 border rounded mt-2 sm:mr-1"
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
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import Create from "../components/Create";

export default {
  components: {
    Create,
  },
  setup() {
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

    async function destroy(id) {
      if (confirm("Are you sure?")) {
        const res = await fetch(`${process.env.VUE_APP_API_URL}/users/${id}`, {
          method: "DELETE",
        });
        console.log(state.users.data);
        res.status === 200
          ? (state.users.data = state.users.data.filter(
              (user) => user.id !== id
            ))
          : alert("Error deleting task");
      }
    }

    function addUser(data) {
      state.users = [...state.users, data];
    }

    return { state, next, prev, destroy, addUser };
  },
};
</script>

<style>
</style>