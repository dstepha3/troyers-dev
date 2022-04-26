<template>

  <div id="app" v-if="show">
    <BaseHeader />

    <div id="main-content">
      <!-- eslint-disable-next-line -->
      <router-view />
    </div>

    <BaseFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseHeader from "@/components/Header.vue";
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
    BaseHeader,
  },
  mounted() {
    this.show = true;
  },
};
</script>

<style scoped>
#app {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 1s;
}
#main-content{
  padding-top: 50px;
}
@keyframes fadeInOpacity {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
