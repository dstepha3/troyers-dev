<template>
  <div class="menu">
    <div class="container">

      <div class="top-content">
        <h1>Our Deli Menu</h1>
        <p>We offer amish goods. Mmm, <strong>so good.</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non elit sem. Fusce id mi elementum, lobortis justo at, vestibulum nulla. Quisque fringilla ligula enim, sed ullamcorper <a href="">arcu efficitur quis</a>. Pellentesque elementum, augue ut sollicitudin finibus, est leo faucibus diam, eget placerat tortor augue et felis.</p>
      </div>

      <hr class="red" />

      <div class="jump-section">
        <span class="jump-title center">Jump to Section</span>

        <div class="jump-row">
          <a class="toc" @click="scrollToElement($refs.Sandwiches)">
            <img height="110" width="110" src="@/assets/images/icons/icons8-sandwich-100.png" alt="sandwich icon">
            <span class="toc-title vintage-heading">Sandwiches</span>
          </a>
          <a class="toc" @click="scrollToElement($refs.Wraps)">
            <img height="110" width="110" src="@/assets/images/icons/icons8-wrap-100.png" alt="wrap icon">
            <span class="toc-title vintage-heading">Wraps</span>
          </a>
          <a class="toc" @click="scrollToElement($refs.Salads)">
            <img height="110" width="110" src="@/assets/images/icons/icons8-salad-100.png" alt="salad icon">
            <span class="toc-title vintage-heading">Salads</span>
          </a>
          <router-link class="toc" to="trays">
            <img height="110" width="110" src="@/assets/images/icons/icons8-meal-100.png" alt="plate icon">
            <span class="toc-title vintage-heading">Meat &amp; Cheese Trays</span>
          </router-link>
          <router-link class="toc" to="/baked-goods/pies">
            <img height="110" width="110" src="@/assets/images/icons/icons8-pie-100.png" alt="pie icon">
            <span class="toc-title vintage-heading">Pies</span>
          </router-link>
        </div>
      </div>

    </div>

    <img src="@/assets/images/red-rip.jpg" height="250" style="width: 100%; opacity: 0.7; margin-top: 40px;">

    <div class="container">
      <a class="jump-target" ref="Sandwiches"></a>
      <SubItemGrid />
    </div>

    <img src="@/assets/images/red-rip.jpg" height="250" style="width: 100%; opacity: 0.7; margin-top: 40px;">

    <div class="container">
      <a class="jump-target" ref="Wraps"></a>
      <WrapItemGrid />
    </div>

    <img src="@/assets/images/red-rip.jpg" height="250" style="width: 100%; opacity: 0.7; margin-top: 40px;">

    <div class="container" id="salads">
      <a class="jump-target" ref="Salads"></a>
      <SaladItemGrid />
    </div>

    <ScrollTopArrow id="ScrollArrow" />
    <OrderNowButton id="OrderNowButton" />
  </div>
</template>

<script>

// import { mapState } from 'vuex'
import ScrollTopArrow from "@/components/Widgets/ScrollTopArrowWidget.vue";
import OrderNowButton from "@/components/Widgets/OrderNowWidget.vue";

import SubItemGrid from "@/components/MenuItems/subItems.vue";
import WrapItemGrid from "@/components/MenuItems/wrapItems.vue";
import SaladItemGrid from "@/components/MenuItems/saladItems.vue";

export default {
  name: "MenuView",
  components: {
    ScrollTopArrow,
    OrderNowButton,
    SubItemGrid,
    WrapItemGrid,
    SaladItemGrid,
  },
    methods: {
    scrollToElement(element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    },
  },
};
</script>