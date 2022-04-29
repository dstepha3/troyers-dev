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
          <router-link class="toc" to="pies">
            <img height="110" width="110" src="@/assets/images/icons/icons8-pie-100.png" alt="pie icon">
            <span class="toc-title vintage-heading">Pies</span>
          </router-link>
        </div>
      </div>

      <!-- <hr class="red"/> -->
    </div>
      <img src="https://images.squarespace-cdn.com/content/v1/5d1cffbae446ee00015b3435/1565187311376-P7UDXRXRD0631XULH4ZC/red+rip-37.jpg?format=2500w" height="250" style="width: 100%; opacity: 0.7; margin-top: 60px;">
    <div class="container">

      <a class="jump-target" ref="Sandwiches"></a>
      <div class="cat-container" id="subs">
        <div class="heading-container">
          <div class="menuItemTitle">
            <h2 class="vintage-heading">Sandwiches</h2>
          </div>
        </div>
        <div class="cat-content-container">
          <div class="details-container" v-if="subs">
            <div>
              <p>All Subs:</p><span class="price">${{ $store.state.subPrice }}</span>
            </div>
            <div>
              <p>Extra Meat:</p><span class="price">${{ $store.state.extraMeatPrice }}</span>
            </div>
          </div>
          <div class="toppings-dressings-container" v-if="subs">
            <div class="toppings">
              <p><strong>Toppings: </strong>{{ $store.state.allToppings }}</p>
            </div>
            <div class="dressings">
              <p><strong>Dressings: </strong>{{ $store.state.allDressings }}</p>
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
    </div>

      <img src="https://images.squarespace-cdn.com/content/v1/5d1cffbae446ee00015b3435/1565187311376-P7UDXRXRD0631XULH4ZC/red+rip-37.jpg?format=2500w" height="250" style="width: 100%; opacity: 0.7; margin-top: 40px; transform: rotate(180deg);">

    <div class="container">
      <a class="jump-target" ref="Wraps"></a>
      <div class="cat-container" id="wraps">
        <div class="heading-container">
          <div class="menuItemTitle">
            <h2 class="vintage-heading">Wraps</h2>
          </div>
        </div>
        <div class="cat-content-container">
          <div class="details-container" v-if="wraps">
            <div>
              <p>All Wraps:</p><span class="price">${{ $store.state.wrapPrice }}</span>
            </div>
            <div>
              <p>Extra Meat:</p><span class="price">${{ $store.state.extraMeatPrice }}</span>
            </div>
          </div>
          <div class="toppings-dressings-container" v-if="wraps">
            <div class="toppings">
              <p><strong>Toppings: </strong>{{ $store.state.allToppings }}</p>
            </div>
            <div class="dressings">
              <p><strong>Dressings: </strong>{{ $store.state.allDressings }}</p>
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
    </div>

      <img src="https://images.squarespace-cdn.com/content/v1/5d1cffbae446ee00015b3435/1565187311376-P7UDXRXRD0631XULH4ZC/red+rip-37.jpg?format=2500w" height="250" style="width: 100%; opacity: 0.7; margin-top: 40px;">

    <div class="container" id="salads">
      <a class="jump-target" ref="Salads"></a>
      <div class="cat-container">
        <div class="heading-container">
          <div class="menuItemTitle">
            <h2 class="vintage-heading">Salads</h2>
          </div>
        </div>
        <div class="cat-content-container">
          <div class="details-container" v-if="salads" style="margin: 60px 0 40px;">
            <div>
              <p>All Salads:</p><span class="price">${{ $store.state.saladPrice }}</span>
            </div>
            <div class="dressings" style="display: flex; flex-direction: column; align-items: start; row-gap: 10px;">
              <p style="font-size: 16px; font-weight: 200;"><strong>Dressings: </strong>{{ $store.state.saladDressings }}</p>
              <p style="font-size: 16px; font-weight: 200;"><strong>Homemade Dressings: </strong>{{ $store.state.homemadeDressings }}</p>
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

    </div>
      <ScrollTopArrow id="ScrollArrow" />
      <OrderNowButton id="OrderNowButton" />
  </div>
</template>

<script>

  import { mapState } from 'vuex'
  import ScrollTopArrow from "@/components/ScrollTopArrow.vue";
  import OrderNowButton from "@/components/OrderNowButton.vue";


export default {
  name: "MenuView",
  components: {
    ScrollTopArrow,
    OrderNowButton,
  },
  computed:{
    ...mapState([
      "subs", "wraps", "salads" 
   ]),
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

<style scoped>
#OrderNowButton.bottom-right{
  display: block !important;
}
#ScrollArrow.bottom-right{
bottom: 90px;
}
.jump-section span{
  display: block;
}
.jump-title{
  color: #cfcccc;
  margin-bottom: 20px;
}
.jump-row{
  display: flex;
  column-gap: 80px;
  justify-content: center;
}
.toc{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s all;
}
.toc:hover{
  transform: scale(1.07);
  text-decoration: none !important;
}
.toc-title{
  font-size: 30px;
}
.toc img{
  margin-bottom: -5px;
}
.jump-target{
  scroll-margin-top: 120px;
}
.heading-container{
    border-top: 1px solid  #9e0000;
    margin: 80px 0 40px;
    position: relative;
    z-index: 5;
  }
  .cat-container{
    margin-bottom: 40px;
  }
  .menuItemTitle{
    position: absolute;
    top: -28px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .menuItemTitle h2{
    background: white;
    padding: 0 40px;
    color: #9e0000;
    font-family: 'Amatic SC', cursive;
    font-size: 45px;
  }
  .details-container{
    display: flex;
    column-gap: 200px;
    justify-content: center;
    margin: 30px 0;
  }
  .details-container div{
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
   #salads .details-container div{
    flex-basis: 50%;
  }
  #salads .details-container > div:first-child{
    justify-content: flex-end;
  }
  .details-container p{
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 0;
    padding-top: 3px;
  }
  .details-container .price{
    color: #9e0000;
    font-size: 28px;
    display: block;
  }
.toppings-dressings-container{
  display: flex;
  column-gap: 25px;
}
.toppings, .dressings{
  flex-basis: 50%;
}
.cat-item-container{
  display: flex;
  column-gap: 55px;
  row-gap: 40px;
  flex-wrap: wrap;
  margin-top: 30px;
}
.card{
  flex-basis: 30%;
  box-shadow: 2px 2px 5px 5px #d9d9d9;
  border-left-width: 5px;
  padding: 15px 5px 5px 10px;
  transition: 0.3s all;
}
/* .card:hover{
  transform: scale(1.05);
} */
.card p{
  margin-bottom: 5px;
  font-size: 15px;
}
.card .item-name{
  position: absolute;
  top: -14px;
  background: #ffffff;
  padding-right: 20px;
  font-size: 1rem;
}
.card-body > p:last-child{
  margin-bottom: 0;
}
.card .item-title-container{
  position: relative;
  display: block;
  border-bottom: 2px solid #9e0000;
  margin-bottom: 20px;
}
.out-of-stock-message{
  text-align: center;
  color: #9e0000;
  width: 100%;
  margin-top: 60px;
}

@media only screen and (max-width: 1200px){
  .card{
    flex-basis: 46%;
  }
}

@media only screen and (max-width: 768px){
  .jump-row{
    flex-wrap: wrap;
    column-gap: 40px;
    row-gap: 40px;
  }
  .toc{
    flex-basis: 40%;
    text-align: center;
  }
  .cat-item-container{
    margin: 0 4%;
    display: block;
  }
  .card{
    margin: 30px 0;
    flex-basis: 45%;
  }
  .details-container{
    column-gap: 0;
    flex-direction: column;
    align-items: center;
  }
  #salads .details-container{
    display: block;
  }
  #salads .details-container > div:first-child{
    justify-content: center;
  }
  #salads .dressings{
    text-align: center;  
    align-items: unset !important;
    margin-top: 20px;
  }
  .toppings-dressings-container{
    display: block;
    margin: 0 15px 40px;
  }
}

</style>