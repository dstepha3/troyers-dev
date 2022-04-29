<template>
  <footer>
    <div class="horse-footer"></div>
    <div class="footer-cols">
      <div class="col" >
        <h4>Navigation</h4>
        <nav class="nav flex-column justify-content-center">
          <router-link class="nav-link" to="menu">Menu</router-link>
          <router-link class="nav-link" to="specials">Specials</router-link>
          <router-link class="nav-link" to="about">About</router-link>
          <router-link class="nav-link" to="contact-us">Contact Us</router-link>
        </nav>
      </div>
      <div class="col">
        <router-link to="/"><img width="250" src="@/assets/logo-transparent2.png" /></router-link>
        <div class="address">
          <h2>Troyer's Dutch Market</h2>
          <p>3435 Lincoln Way E. Massillon, Ohio 44646</p>
        </div>
        <p class="phone">(330)830-3333</p>
        <a
          href="https://www.facebook.com/TroyersDutchMarket"
          target="_blank"
          title="Like Us on Facebook"
          class="btn btn-facebook btn-lg"
          ><i class="fab fa-facebook"></i
        ></a>
      </div>
      <div class="col">
        <h4>Hours</h4>
        <table>
          <tbody>
            <tr id="monday">
              <td>Monday:</td>
              <td>09:00am - 05:00pm</td>
            </tr>
            <tr id="tuesday">
              <td>Tuesday:</td>
              <td>09:00am - 05:00pm</td>
            </tr>
            <tr id="wednesday">
              <td>Wednesday:</td>
              <td>09:00am - 05:00pm</td>
            </tr>
            <tr id="thursday">
              <td>Thursday:</td>
              <td>09:00am - 05:00pm</td>
            </tr>
            <tr id="friday">
              <td>Friday:</td>
              <td>09:00am - 05:00pm</td>
            </tr>
            <tr id="saturday">
              <td>Saturday:</td>
              <td>09:00am - 03:30pm</td>
            </tr>
            <tr id="sunday">
              <td>Sunday:</td>
              <td>CLOSED</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="copyright desktop">
      <p>&copy; 2022 Troyer's Dutch Market</p>
      <router-link class="copyright-link" to="/privacypolicy"
        >Privacy Policy</router-link
      >
      <p>Created by <a id="danielonlinelink"  target="_blank" href="http://danielonline.pages.dev/">DanielOnline</a></p>
      <p>Hosted on <a id="cloudflarelink" target="_blank" href="http://www.cloudflare.com/">Cloudflare</a></p>
      <p>Icons by <a id="icons8credit" target="_blank" href="https://icons8.com">Icons8</a></p>
    </div>
    <div class="copyright mobile"> 
      <div class="flex-row">
        <p style="font-size: 10px;">Created by<br/> <a style="font-size: 16px;" target="_blank" id="danielonlinelink" href="http://danielonline.pages.dev/">DanielOnline</a></p>
        <p>Icons by<br/><a  id="icons8credit" target="_blank" href="https://icons8.com">Icons8</a></p> 
        <p>Hosted on<br/> <a id="cloudflarelink" href="http://www.cloudflare.com/" target="_blank">Cloudflare</a></p>
      </div>
      <router-link class="copyright-link" to="privacypolicy">Privacy Policy</router-link>
      <p>&copy; 2022 Troyer's Dutch Market</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BaseFooter",
  mounted() {
    var d = new Date();
    switch (d.getDay()) {
      case 0:
        var sunday = document.getElementById("sunday");
        sunday.classList.toggle("active");
        break;
      case 1:
        var monday = document.getElementById("monday");
        monday.classList.toggle("active");
        break;
      case 2:
        var tuesday = document.getElementById("tuesday");
        tuesday.classList.toggle("active");
        break;
      case 3:
        var wednesday = document.getElementById("wednesday");
        wednesday.classList.toggle("active");
        break;
      case 4:
        var thursday = document.getElementById("thursday");
        thursday.classList.toggle("active");
        break;
      case 5:
        var friday = document.getElementById("friday");
        friday.classList.toggle("active");
        break;
      case 6:
        var saturday = document.getElementById("saturday");
        saturday.classList.toggle("active");
        break;
      default:
        // do nothing
        break;
    }
  },
};
</script>

<style scoped>
footer {
  background: black;
  margin-top: 120px;
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)),
    url("https://troyerscountrymarket.com/wp-content/uploads/2020/07/Wood-background-footer.jpg");
  background-repeat: repeat;
  background-position: center center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.horse-footer {
  background-image: url(http://iconbug.com/data/43/400/cd045600f2f688024e1f9b7f9442077b.png);
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: -77px;
  right: 57px;
  height: 100px;
  width: 150px;
  z-index: -3;
}
.footer-cols {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  text-align: center;
  padding: 40px 0;
}
.footer-cols .col {
  flex-basis: 33;
}
div.col:nth-child(2) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.col h4 {
  border-bottom: 1px solid #ffffff;
  padding-bottom: 10px;
  margin: 0 20% 20px;
  opacity: 0.85;
}
.nav-link {
  color: #ffffff;
  opacity: 0.6;
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  transition-duration: 0.3s;
  transition: all 0.3s;
}
.nav-link:hover {
  opacity: 1;
}
.router-link-exact-active{
    opacity: 1;
    font-weight: 900;
    cursor: default;
}
.col table {
  margin: 0 auto;
  width: 70%;
  font-size: 16px;
  font-family: "Poppins", sans-serif;
  opacity: 0.7;
}
.address {
  margin-top: 40px;
  border-top: 1px solid #333333;
  padding-top: 40px;
}
.address h2 {
  margin: 0 10px 10px;
  padding: 0;
  opacity: 0.9;
  border: none;
}
.address p {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  margin-bottom: 0;
  opacity: 0.6;
}
.phone {
  font-family: "Poppins", sans-serif;
  font-weight: 100;
  margin-top: 5px;
  opacity: 0.6;
}
.col img {
  margin-top: 15px;
}
table tr > td:first-child {
  text-align: right;
  padding-right: 10px;
}
table tr > td:last-child {
  text-align: left;
  padding-left: 10px;
}
table td {
  padding-bottom: 5px;
}
.copyright {
  color: #ffffff;
  padding: 10px 0;
  text-align: center;
  opacity: 0.55;
  font-size: 12px;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: space-around;
}
.copyright-link {
  color: #ffffff;
  text-align: center;
  font-weight: 200;
  text-decoration: none;
}
.copyright-link.router-link-exact-active {
    font-weight: 800;
    text-decoration: none !important;
    cursor: default;
}
.copyright-link:hover {
  text-decoration: underline;
}
#sunday,
#monday,
#tuesday,
#wednesday,
#thursday,
#friday,
#saturday {
  opacity: 0.6;
}
#sunday.active,
#monday.active,
#tuesday.active,
#wednesday.active,
#thursday.active,
#friday.active,
#saturday.active {
  font-weight: 900;
  opacity: 1;
}
.btn-facebook {
  background: none;
  border-radius: 5px;
  color: #000;
  border-width: 1px;
  border-style: solid;
  border-color: none;
  border: none;
  font-size: 14px;
  padding: 5px 7px;
  transition-duration: 0.3s;
  transition: all 0.3s;
}
.fab.fa-facebook {
  font-size: 24px;
}
.btn-facebook:link,
.btn-facebook:visited {
  color: #ffffff;
  opacity: 0.5;
}
.btn-facebook:active,
.btn-facebook:hover {
  background: none;
  border: none;
  opacity: 1;
}
#danielonlinelink,
#cloudflarelink,
#icons8credit {
  color: #ffffff;
  text-decoration: none;
  font-weight: 700;
}
#danielonlinelink:hover,
#cloudflarelink:hover,
#icons8credit:hover{
  text-decoration: underline;
}

.copyright.desktop {
    display: flex;
  }
  .copyright.mobile {
    display: none;
  }
@media screen and (max-width: 768px){
  footer{
    background-size: cover;
  }
  .footer-cols {
    display: flex;
    flex-direction: column;
    padding: 80px 0;
  }
  .footer-cols > .col:nth-child(1){
    order: 2;
    margin-bottom: 60px;
  }
  .footer-cols > .col:nth-child(2){
    order: 1;
    margin-bottom: 60px;
  }
  .footer-cols > .col:nth-child(3){
    order: 3;
  }
  .col table{
    width: 100%;
  }
  .copyright.desktop {
    display: none;
  }
  .copyright.mobile {
    display: block;
  }
  .flex-row{
    display: flex;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .flex-row p{
    flex-basis: 50%;
    font-size: 10px;
  }
  .flex-row a{
    font-size: 15px;
  }
}
</style>