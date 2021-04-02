<template>
  <div
    class="w-full bg-gradient-to-r from-blue-800 to-blue-600 text-white px-4 py-2"
  >
    <router-link
      class="hvr-underline-reveal mx-3 align-middle"
      :class="$route.path === item.to ? 'active' : ''"
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      >{{ item.title }}
    </router-link>
    <button @click="$emit('open-login-modal')" class="hvr-underline-reveal mx-3 align-middle">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        { title: "Dc Heroes", to: "/dc-heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider Carousel", to: "/slider" },
      ],
    };
  },
};
</script>

<style>
.hvr-underline-reveal {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.hvr-underline-reveal:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: dodgerblue;
  height: 2px;
  transform: translateY(4px);
  transition: 0.4s transform ease-out;
}

.hvr-underline-reveal:hover:before {
  transform: translateY(0);
}
.active.hvr-underline-reveal:before {
  transform: translateY(0);
}
</style>