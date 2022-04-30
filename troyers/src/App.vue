<template>

  <div id="app" v-if="show">
    <BaseHeader />

    <div id="main-content">
      <!-- eslint-disable-next-line -->
      <router-view class="fade-in" v-if="loaded" />

      <div id="loading-container" class="fade-in" v-if="!loaded">
        <div id="render-spiner-container">
            <div class="spinner-border" id="render-spinner" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <p id="loadingtext">Loading..</p>
        </div>
      </div>
    </div>

    <BaseFooter />
  </div>
</template>

<script>
// @ is an alias to /src
import BaseHeader from "@/components/Common/Header.vue";
import BaseFooter from "@/components/Common/Footer.vue";
export default {
  name: "Home-Component",
  data() {
    return {
      show: false,
      loaded: false,
    };
  },
  watch: {
    '$route' (to, from){
      console.log(to, from);
      this.loaded = false;
      setTimeout(() => {  this.load_window() }, this.getRandomArbitrary(1000, 2000));
    }
  },
  components: {
    BaseFooter,
    BaseHeader,
  },
  mounted() {
    this.show = true;
    setTimeout(() => {  this.load_window() }, this.getRandomArbitrary(1000, 2000));
  },
  methods:{
    load_window(){
      this.loaded = true;
    },
    getRandomArbitrary(min, max) {
      return Math.random() * (max - min) + min;
    },
  },
};
</script>

<style scoped>
#app {
	opacity: 1;
	animation-name: fadeInOpacity;
	animation-iteration-count: 1;
	animation-timing-function: ease-in;
	animation-duration: 0.3s;
  overflow: hidden;

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
#render-spiner-container{
  background-color: white !important;
  height: 100%;
  margin-top: 100px;
}
#loadingtext{
  margin-top: 10px;
  display: block;
}
</style>
