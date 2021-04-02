<template>
  <section
    @click="$emit('close-login')"
    class="h-screen w-screen z-20 bg-gray-500 fixed top-0 opacity-50"
  ></section>
  <div class="absolute inset-0">
    <div class="flex h-full">
      <div class="m-auto z-30 bg-white rounded shadow p-2">
        <h1>Login</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['close-login']
};
</script>

<style>
</style>