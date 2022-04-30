<template>
    <div class="cat-container" id="wraps">
    <div class="heading-container">
        <div class="menuItemTitle">
        <h2 class="vintage-heading">Wraps</h2>
        </div>
    </div>
    <div class="cat-content-container">
        <div class="details-container" v-if="wraps">
        <div>
            <p>All Wraps:</p><span class="price">${{ wrapPrice }}</span>
        </div>
        <div>
            <p>Extra Meat:</p><span class="price">${{ extraMeatPrice }}</span>
        </div>
        </div>
        <div class="toppings-dressings-container" v-if="wraps">
        <div class="toppings">
            <p><strong>Toppings: </strong>{{ allToppings }}</p>
        </div>
        <div class="dressings">
            <p><strong>Dressings: </strong>{{ allDressings }}</p>
        </div>
        </div>
        <div class="cat-item-container" v-if="wraps">
        <div v-for="wrap in wraps" :key="wrap" class="card border-danger">
            <div class="card-body">
            <span class="item-title-container">
            <p class="item-name "><strong>{{ wrap.title }}</strong></p>
            </span>
            <p>{{ wrap.toppings }}</p>
            </div>
        </div>
        </div>
        <div class="out-of-stock-message" v-else>
        <p>{{ $store.state.outofWrapsMessage }}</p>
        </div>
    </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "wrapItemGrid",
  computed:{
    ...mapState({
      wraps: state => state.wraps.wraps,
      allDressings: state => state.menu.state.allDressings,
      allToppings: state => state.menu.state.allToppings,
      wrapPrice: state => state.wraps.wrapPrice,
      extraMeatPrice: state => state.menu.state.extraMeatPrice,
    }),
  },

};
</script>
