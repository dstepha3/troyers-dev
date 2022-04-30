<template>
    <div class="cat-container">
    <div class="heading-container">
        <div class="menuItemTitle">
        <h2 class="vintage-heading">Salads</h2>
        </div>
    </div>
    <div class="cat-content-container">
        <div class="details-container" v-if="salads" style="margin: 60px 0 40px;">
        <div>
            <p>All Salads:</p><span class="price">${{ saladPrice }}</span>
        </div>
        <div class="dressings" style="display: flex; flex-direction: column; align-items: start; row-gap: 10px;">
            <p style="font-size: 16px; font-weight: 200;"><strong>Dressings: </strong>{{ saladDressings }}</p>
            <p style="font-size: 16px; font-weight: 200;"><strong>Homemade Dressings: </strong>{{ homemadeDressings }}</p>
        </div>
        </div>
        <div class="cat-item-container" v-if="salads">
        <div v-for="salad in salads" :key="salad" class="card border-danger">
            <div class="card-body">
            <span class="item-title-container">
            <p class="item-name"><strong>{{ salad.title }}</strong></p>
            </span>
            <p>{{ salad.toppings }}</p>
            </div>
        </div>
        </div>
        <div class="out-of-stock-message" v-else>
            <p>{{ $store.state.outofSaladMessage }}</p>
        </div>
    </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'

export default {
  name: "saladItemGrid",
  computed:{
    ...mapState({
      salads: state => state.salads.salads,
      saladDressings: state => state.menu.state.saladDressings,
      homemadeDressings: state => state.menu.state.homemadeDressings,
      saladPrice: state => state.salads.saladPrice,
    }),
  },

};
</script>
