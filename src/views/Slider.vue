<template>
  <div class="flex flex-wrap w-full relative">
    <div class="w-full absolute overflow-hidden" v-for="(color, index) in sliders" :key="color">
      <transition name="fade">
        <div
          v-if="currentSlide === index"
          :class="color"
          style="height: 350px"
        ></div>
      </transition>
    </div>
    <div class="w-full" style="height: 340px">
      <div class="absolute bottom-0 w-full flex justify-center">
        <div
          v-for="(slider, index) in sliders"
          :key="slider"
          @click="makeActiv(index)"
          :class="currentSlide === index ? 'bg-gray-700' : 'bg-gray-300'"
          class="w-4 h-4 rounded-full mx-2 cursor-pointer shadow-md"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 0,
      isTitleShowing: true,
      sliders: ["bg-blue-600", "bg-yellow-600", "bg-green-600"],
      interval: "",
    };
  },
  methods: {
    makeActiv(index) {
        this.currentSlide = index
    },
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide === 2 ? (this.currentSlide = 0) : this.currentSlide++;
    }, 3000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>