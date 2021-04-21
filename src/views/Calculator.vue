<template>
  <section class="flex w-full">
    <div class="m-auto">
      <h1 class="text-2xl mt-5 text-center">Calculator</h1>
      <p
        class="text-3xl text-right mt-10 mb-2 overflow-x-scroll overflow-y-hidden"
        style="direction: rtl; width: 172px; height: 50px"
      >
        {{ currentNum }}
      </p>
      <div class="grid grid-cols-4 gap-1">
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
          @click="pressed('+')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          +
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
          @click="pressed('-')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          -
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
          @click="pressed('*')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          *
        </button>
        <button
          @click="pressed('c')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          C
        </button>
        <button
          @click="pressed('0')"
          class="p-2 w-10 h-10 border rouded shadow"
        >
          0
        </button>
        <button
          @click="pressed('=')"
          class="p-2 W-10 h-10 border rouded shadow"
        >
          =
        </button>
        <button
          @click="pressed('/')"
          class="p-2 W-10 h-10 border rouded shadow"
        >
          /
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const currentNum = ref("");
    const operations = ["+", "-", "*", "/"];
    const prevNum = ref("");
    const selectedOperation = ref("");

    function pressed(value) {
      if (value === "=") calculate();
      else if (value === "c") clear();
      else if (operations.includes(value)) applyOperation(value);
      else appendNumber(value);
    }

    function appendNumber(value) {
      currentNum.value = currentNum.value + value;
    }

    function applyOperation(value) {
      prevNum.value = currentNum.value;
      currentNum.value = "";
      selectedOperation.value = value
    }

    function calculate() {}

    function clear() {
      currentNum.value = "";
    }

    return { currentNum, pressed };
  },
};
</script>

<style>
</style>