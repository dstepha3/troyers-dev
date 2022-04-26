<template>

  <div id="body">
    <div id="gradient" v-if="show">
      <!-- eslint-disable-next-line -->
      <router-view />
    </div>
    <BaseFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseFooter from "@/components/Footer.vue";
export default {
  name: "Home-Component",
  data() {
    return {
      show: false,
    };
  },
  components: {
    BaseFooter,
  },
  mounted() {
    this.show = true;
  },
};
</script>
