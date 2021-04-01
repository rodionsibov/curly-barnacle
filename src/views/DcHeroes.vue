<template>
  <div class="m-auto">
    <h1 class="text-2xl text-center mt-8">Dc Heros {{ herosCount }}</h1>
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
      />
      <button
        class="border rounded bg-gradient-to-r from-green-800 to-green-500 text-white py-1 px-2 ml-1"
        type="submit"
      >
        Add Hero
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newHero: "",
      dcHeroes: [
        { name: "SG" },
        { name: "FL" },
        { name: "MM" },
        { name: "XC" },
      ],
    };
  },
  computed: {
    herosCount() {
      return this.dcHeroes.length;
    },
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeroes.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeroes = this.dcHeroes.filter((hero, i) => index !== i);
    },
  },
};
</script>
