<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center my-6">Dc Heros {{ herosCount }}</h1>
    <ul>
      <li
        class="flex justify-between"
        v-for="(hero, index) in dcHeroes"
        :key="index"
      >
        <div>
          {{ hero.name }}
        </div>
        <button class="text-red-500 font-bold" @click="remove(index)">x</button>
      </li>
    </ul>
    <form class="mt-5" @submit.prevent="addHero">
      <input
        class="border rounded p-1"
        type="text"
        v-model="newHero"
        placeholder="type hero name here"
        ref="newHeroRef"
      />
      <button
        class="border rounded font-bold shadow-md bg-gradient-to-r from-green-900 to-green-600 text-white py-1 px-2 ml-1"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
import { onMounted, ref, computed } from "vue";
export default {
  setup() {
    const newHeroRef = ref("");
    const newHero = ref("");
    const dcHeroes = ref([
      { name: "Superman" },
      { name: "Batman" },
      { name: "Flash" },
      { name: "Aquaman" },
    ]);

    onMounted(() => {
      newHeroRef.value.focus();
    });

    const herosCount = computed({
      get: () => dcHeroes.value.length,
    });

    function remove(index) {
      dcHeroes.value = dcHeroes.value.filter((hero, i) => index !== i);
    }

    function addHero() {
      if (newHero.value !== "") {
        dcHeroes.value.unshift({ name: newHero.value });
        newHero.value = "";
      }
    }

    return { dcHeroes, newHero, remove, addHero, newHeroRef, herosCount };
  },
};
</script>

<style>

</style>