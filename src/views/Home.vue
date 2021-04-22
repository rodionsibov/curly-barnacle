<template>
  <div class="m-auto">
    <h1 class="text-4xl font-bold mt-10">
      Welcome to Vue 3 Full Course
    </h1>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$store.state);
  }
};
</script>

<style>
</style>