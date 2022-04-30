<template>
  <div id="header">
    <nav class="navbar navbar-dark navbar-expand-lg">
    <div class="container-fluid">
        <router-link class="navbar-brand" to="/">    
            <img width="320" src="@/assets/logo-transparent2.png" />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
                <router-link class="nav-link" aria-current="page" to="/">Home</router-link>            
            </li> -->
            <li class="nav-item">
                <router-link class="nav-link" to="/menu">Deli Menu</router-link>            
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/specials">Specials</router-link>            
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/trays">Meat &amp; Cheese Party Trays</router-link>            
            </li>
        </ul>
        <!-- <span class="navbar-text">
            Navbar text with an inline element
        </span> -->
        </div>
    </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>

<style scoped>
#header {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/images/country-header-bg.jpg");
  /* background: #ffffff; */
  min-height: 140px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0px 5px 10px rgba(46, 34, 34, 0.8);
  position: sticky;
  top: 0;
  z-index: 500;
}
.container-fluid{
    position: relative;
}
.navbar-brand{
    position: absolute;
    top: 0;
}
.navbar {
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 0;
  padding-left: 200px;
  padding-right: 105px;
  align-items: unset;
  background: #000;
}
.navbar-nav{
    padding-left: 220px;
}
#header img {
  z-index: 50;
  position: absolute;
  bottom: -30px;
  left: -120px;
}
.nav-link{
    padding-left: 1rem !important;
    padding-right: 1rem !important;
}
.router-link-exact-active{
    border-bottom: 3px solid #9e0000;
    margin-bottom: -3px;
}

@media only screen and (max-width: 991) {

}
@media only screen and (max-width: 500px) {
  .router-link-exact-active{
    border-bottom: none;
    margin-bottom: 0;
  } 
  #header img{
      display: block;
  }  
  #header img{
    bottom: -19px;
    left: -202px;
    width: 230px;
  }
  button.navbar-toggler{
    transform: translateX(80px);
    border: none;
  }

}

</style>