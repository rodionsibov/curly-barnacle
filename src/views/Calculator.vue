<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl mt-5 text-center">Calculator</h1>
      <p class="text-3xl text-right mt-10 mb-2">{{ calculation }}</p>
      <div class="grid grid-cols-3 gap-1">
        <button
          @click="pressed('1')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          1
        </button>
        <button
          @click="pressed('2')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          2
        </button>
        <button
          @click="pressed('3')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          3
        </button>
        <button
          @click="pressed('4')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          4
        </button>
        <button
          @click="pressed('5')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          5
        </button>
        <button
          @click="pressed('6')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          6
        </button>
        <button
          @click="pressed('7')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          7
        </button>
        <button
          @click="pressed('8')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          8
        </button>
        <button
          @click="pressed('9')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          9
        </button>
        <button
          @click="pressed('0')"
          class="p-2 h-10 border rouded shadow col-span-2"
        >
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 W-10 h-10 border rouded shadow"
        >
          =
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const calculation = ref("");

    function pressed(value) {
      calculation.value = calculation.value + value
    }

    return { calculation, pressed };
  },
};
</script>

<style>
</style>