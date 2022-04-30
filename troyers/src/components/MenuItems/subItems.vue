<template>
      <div class="cat-container" id="subs">
        <div class="heading-container">
          <div class="menuItemTitle">
            <h2 class="vintage-heading">Sandwiches</h2>
          </div>
        </div>
        <div class="cat-content-container">
          <div class="details-container" v-if="subs">
            <div>
              <p>All Subs:</p><span class="price">${{ subPrice }}</span>
            </div>
            <div>
              <p>Extra Meat:</p><span class="price">${{ extraMeatPrice }}</span>
            </div>
          </div>
          <div class="toppings-dressings-container" v-if="subs">
            <div class="toppings">
              <p><strong>Toppings: </strong>{{ allToppings }}</p>
            </div>
            <div class="dressings">
              <p><strong>Dressings: </strong>{{ allDressings }}</p>
            </div>
          </div>
          <div class="cat-item-container" v-if="subs">
            <div v-for="sub in subs" :key="sub" class="card border-danger">
              <div class="card-body">
              <span class="item-title-container">
                <p class="item-name"><strong>{{ sub.title }}</strong></p>
              </span>
              <p>{{ sub.toppings }}</p>
              </div>
            </div>
            <div  class="out-of-stock-message" v-if="!subs">
              <p>{{ $store.state.outofSubsMessage }}</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "subItemGrid",
  computed:{
    ...mapState({
      subs: state => state.subs.subs,
      allDressings: state => state.menu.state.allDressings,
      allToppings: state => state.menu.state.allToppings,
      subPrice: state => state.subs.subPrice,
      extraMeatPrice: state => state.menu.state.extraMeatPrice,
    }),
  },

};
</script>
