<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-2xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
          class="w-full h-full p-3"
          :value="text"
          @input="update"
          ref="markdownTextArea"
        ></textarea>
      </article>
      <article
        class="w-1/2 border bg-gray-100 p-3"
        style="overflow-wrap: break-word"
        v-html="markedText"
      ></article>
    </section>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from "../useDebounce";

export default {
  setup() {},
  data() {
    return {
      text: "",
      debounce: "",
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
    },
  },
  mounted() {
    const { debounce } = useDebounce();
    this.debounce = debounce;
    this.$refs.markdownTextArea.focus();
  },
};
</script>

<style>
</style>