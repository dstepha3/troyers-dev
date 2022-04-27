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
            <img height="110" width="110" src="@/assets/images/icons/icons8-sandwich-100.png">
            <span class="toc-title vintage-heading">Sandwiches</span>
          </a>
          <a class="toc" @click="scrollToElement($refs.Wraps)">
            <img height="110" width="110" src="@/assets/images/icons/icons8-wrap-100.png">
            <span class="toc-title vintage-heading">Wraps</span>
          </a>
          <a class="toc" @click="scrollToElement($refs.Salads)">
            <img height="110" width="110" src="@/assets/images/icons/icons8-salad-100.png">
            <span class="toc-title vintage-heading">Salads</span>
          </a>
          <router-link class="toc" to="trays">
            <img height="110" width="110" src="@/assets/images/icons/icons8-meal-100.png">
            <span class="toc-title vintage-heading">Meat &amp; Cheese Trays</span>
          </router-link>
          <router-link class="toc" to="pies">
            <img height="110" width="110" src="@/assets/images/icons/icons8-pie-100.png">
            <span class="toc-title vintage-heading">Pies</span>
          </router-link>
        </div>
      </div>

      <!-- <hr class="red"/> -->
    </div>
      <img src="https://images.squarespace-cdn.com/content/v1/5d1cffbae446ee00015b3435/1565187311376-P7UDXRXRD0631XULH4ZC/red+rip-37.jpg?format=2500w" height="200" style="width: 100%; opacity: 0.7; margin-top: 60px;">
    <div class="container">

      <a class="jump-target" ref="Sandwiches"></a>
      <div class="cat-container">
        <div class="heading-container">
          <div class="menuItemTitle">
            <h2 class="vintage-heading">Sandwiches</h2>
          </div>
        </div>
        <div class="cat-content-container">
          <div class="details-container">
            <div>
              <p>All Subs:</p><span class="price">$5.49</span>
            </div>
            <div>
              <p>Extra Meat:</p><span class="price">$1.00</span>
            </div>
          </div>
          <div class="toppings-dressings-container">
            <div class="toppings">
              <p><strong>Toppings: </strong>Lettuce, Tomatoes, Onions, Banana Peppers, Jalapeño Peppers, Pickles, Hard Boiled Eggs, Ketchup, Mustard, Mayo, Honey Mustard, Horse Radish Sauce</p>
            </div>
            <div class="dressings">
              <p><strong>Dressings: </strong>Ranch, Italian, Homemade BBQ, Homemade Poppy Seed, Homemade Sweet &amp; Sour, French </p>
            </div>
          </div>
          <div class="cat-item-container">
            <div v-for="index in 9" :key="index" class="card border-danger">
              <div class="card-body">
              <p><strong>Troyer's Special Club{{ n }}</strong></p>
              <p>Turkey Breast, Ham, Lacy Baby Swiss Cheese. Choice of dressing &amp; Toppings</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

      <img src="https://images.squarespace-cdn.com/content/v1/5d1cffbae446ee00015b3435/1565187311376-P7UDXRXRD0631XULH4ZC/red+rip-37.jpg?format=2500w" height="200" style="width: 100%; opacity: 0.7; margin-top: 40px; transform: rotate(180deg);">

    <div class="container">
      <a class="jump-target" ref="Wraps"></a>
      <div class="cat-container">
        <div class="heading-container">
          <div class="menuItemTitle">
            <h2 class="vintage-heading">Wraps</h2>
          </div>
        </div>
        <div class="cat-content-container">
          <div class="details-container">
            <div>
              <p>All Subs:</p><span class="price">$5.49</span>
            </div>
            <div>
              <p>Extra Meat:</p><span class="price">$1.00</span>
            </div>
          </div>
          <div class="toppings-dressings-container">
            <div class="toppings">
              <p><strong>Toppings: </strong>Lettuce, Tomatoes, Onions, Banana Peppers, Jalapeño Peppers, Pickles, Hard Boiled Eggs, Ketchup, Mustard, Mayo, Honey Mustard, Horse Radish Sauce</p>
            </div>
            <div class="dressings">
              <p><strong>Dressings: </strong>Ranch, Italian, Homemade BBQ, Homemade Poppy Seed, Homemade Sweet &amp; Sour, French </p>
            </div>
          </div>
          <div class="cat-item-container">
            <div v-for="index in 7" :key="index" class="card border-danger">
              <div class="card-body">
              <p><strong>Troyer's Special Club{{ n }}</strong></p>
              <p>Turkey Breast, Ham, Lacy Baby Swiss Cheese. Choice of dressing &amp; Toppings</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

      <img src="https://images.squarespace-cdn.com/content/v1/5d1cffbae446ee00015b3435/1565187311376-P7UDXRXRD0631XULH4ZC/red+rip-37.jpg?format=2500w" height="200" style="width: 100%; opacity: 0.7; margin-top: 40px; transform: rotate(180deg);">

    <div class="container">
      <a class="jump-target" ref="Salads"></a>
      <div class="cat-container">
        <div class="heading-container">
          <div class="menuItemTitle">
            <h2 class="vintage-heading">Salads</h2>
          </div>
        </div>
        <div class="cat-content-container">
          <div class="details-container" style="margin: 60px 0 40px;">
            <div>
              <p>All Subs:</p><span class="price">$5.49</span>
            </div>
            <div class="dressings">
              <p style="font-size: 16px; font-weight: 200;"><strong>Dressings: </strong>Ranch, Italian, Homemade BBQ, Homemade Poppy Seed, Homemade Sweet &amp; Sour, French </p>
            </div>
          </div>
          <div class="cat-item-container">
            <div v-for="index in 4" :key="index" class="card border-danger">
              <div class="card-body">
              <p><strong>Troyer's Special Club{{ n }}</strong></p>
              <p>Turkey Breast, Ham, Lacy Baby Swiss Cheese. Choice of dressing &amp; Toppings</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

      <ScrollTopArrow />
  </div>
</template>

<script>

  import ScrollTopArrow from "@/components/ScrollTopArrow.vue";

export default {
  name: "MenuView",
  components: {
    ScrollTopArrow,
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
  scroll-margin-top: 180px;
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
  padding: 5px 5px 5px 10px;
  transition: 0.3s all;
}
/* .card:hover{
  transform: scale(1.05);
} */
.card p{
  margin-bottom: 5px;
  font-size: 14px;
}
.card .item-title{
  color: #9e0000;
}


</style>