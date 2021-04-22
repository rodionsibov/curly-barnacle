<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-center text-2xl my-6">Real Time Chat</h1>
      <div class="border rounded-lg">
        <div class="h-64 p-2 overflow-y-scroll">
          <div
            v-for="chat in state.chats"
            :key="chat.message"
            :class="chat.userId === state.userId ? 'text-right' : ''"
          >
            {{ chat.message }}
          </div>
        </div>
        <div class="h-8 p-2">
          <input
            class="p-1 border rounded shadow"
            v-model="state.message"
            type="text"
            placeholder="Start typing..."
            @keydown.enter="addMessage"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from "vue";
import firebase, { chatsRef } from "../../firebase";
export default {
  setup() {
    const state = reactive({
      chats: [],
      message: "",
      userId: null,
    });

    onMounted(() => {
      chatsRef.on("child_added", (snapshot) => {
        state.userId = firebase.auth().currentUser.uid;
        state.chats.push({ key: snapshot.key, ...snapshot.val() });
      });
    });

    function addMessage() {
      const newChat = chatsRef.push();
      newChat.set({ userId: state.userId, message: state.message });
      state.message = "";
    }

    return { state, addMessage };
  },
};
</script>

<style>
</style>