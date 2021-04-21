<template>
  <section class="flex flex-wrap w-full">
    <div class="m-auto">
      <h1 class="text-2xl my-5">Reuseable Modal</h1>
      <modal />
    </div>
  </section>
</template>

<script>
import Modal from "../components/Modal.vue";

export default {
  components: { Modal },
};
</script>

<style>
</style>