<template>
  <div>
    <Navbar_mark />
    <router-view ></router-view>
    <Border_mark />
    <Footer />
  </div>
</template>
<script>
import Navbar_mark from "./components/Navbar.vue";
import Border_mark from "./components/Border.vue";
import Footer from "./components/Footer.vue";


export default {
  name: "App",
  components: {
    Navbar_mark,
    Border_mark,
    Footer,
    // Main_header,
    // Proheading,
    // ProductPage,
    // Pages,
    
  },

};
</script>
<style>
@font-face {
  font-family: "Jost";
  src: url("../fonts/Jost-Regular.woff2") format("woff2"),
    url("../fonts/Jost-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jost* 700";
  src: url("../fonts/Jost-Bold.woff2") format("woff2"),
    url("../fonts/Jost-Bold.woff") format("woff");
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jost* 600 Semi";
  src: url("../fonts/Jost-Semi.woff2") format("woff2"),
    url("../fonts/Jost-Semi.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jost* 300";
  src: url("../fonts/Jost-Light.woff2") format("woff2"),
    url("../fonts/Jost-Light.woff") format("woff");
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Jost* 500";
  src: url("../fonts/Jost-Medium.woff2") format("woff2"),
    url("../fonts/Jost-Medium.woff") format("woff");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Playfair Display";
  src: url("../fonts/PlayfairDisplay-Regular.woff2") format("woff2"),
    url("../fonts/PlayfairDisplay-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Jost";
  max-width: 1600px;
  margin: 0 auto;
}

/* -----------------------ProHeadeing---------------- */
#proheading {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
#proheading p {
  font-family: "Playfair Display";
  font-size: 32px;
}
#proheading span {
  margin-top: 3px;
  color: #303030;
  font-size: 18px;
  opacity: 70%;
}

@media (max-width: 767px) {
  #proheading p {
    font-size: 28px;
  }
}

/* --------------Media Queri------------------------- */

.hamburder_menu {
  display: none;
}
#hamburger {
  display: none;
}
.logo1 {
  display: none;
}
.follow_email {
  display: none;
}
.footer_links h3 span {
  display: none;
}
.filter_display {
  display: block;
  transform: translateX(0vw);
}

@media (max-width: 767px) {
  .header {
    justify-content: center;
  }
  .main_header {
    z-index: 1;
    background-color: white;
    position: sticky;
    top: 0;
  }
  .navMenu {
    display: block;
  }
  .mid {
    margin: 0px;
  }

  .gray_div {
    width: 21%;
    height: 100vh;
    background-color: #05040445;
  }
  .nav_links ul {
    margin: 24px;
  }
  .nav_links ul li {
    margin: 16px 28px;
    padding: 13px 5px;
    margin-left: 0;
    color: white;
  }
  .nav_links ul li a {
    color: white;
    text-decoration: none;
  }
  .nav_links ul li a img {
    width: 23px;
  }

  .remove_nav_links {
    width: 100%;
    height: 222px;
    color: #4c0b36;
  }
  .navMenu {
    display: block;

    width: 31px;
  }

  svg {
    margin: 0px 8px;
  }
  .mid img {
    width: 64px;
    position: relative;
    top: 3px;
    left: 38px;
  }
  #proheading p {
    font-size: 28px;
  }
  .products svg {
    right: 0px;
  }
  .products h4 {
    font-size: 14px;
  }

  .products {
    position: relative;
    display: inline-block;
    margin: auto;
  }

  .products_img {
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    border-bottom: 0px;
  }
  .products_img img {
    margin: 2px;
    max-width: 100%;
  }

  .products {
    flex: 0 0 45%;
  }
  .products p {
    margin: 7px 3px;
  }
  .products svg {
    position: absolute;
  }
  .api_products_img {
    width: 49%;
  }
  .filters {
    display: flex;
    padding: 0px;
    width: 100%;
    z-index: 222;
    position: fixed;
    bottom: 0;
    background-color: white;
    justify-content: space-evenly;
  }

  .left_filter {
    border: 1px solid #000000ab;
  }
  .left_filter a {
    padding: 0px 21px;
    text-decoration: none;
    color: black;
    font-size: 11px;
    font-weight: bold;
  }
  .left_filter a svg {
    width: 15px;
  }
  .left_filter img {
    margin-left: 3px;
  }
  #shrot_by {
    margin: 0px 14px;
  }
  .right {
    display: none;
  }
  .main_header {
    position: sticky;
    display: flex;
    justify-content: space-between;
    padding: 0px 0px;
  }

  .left1 {
    display: none;
    flex-direction: column;
  }
  .left1 ul {
    flex-direction: column;
  }
  .right1 {
    display: none;
  }
  .logo1 {
    display: inline;
    width: 23px;
  }
  .logo2 {
    display: none;
  }

  .no_pages span {
    font-family: "Jost";
    font-size: 14px;
    margin: -4px;
    padding: 11px;
  }
  .no_pages {
    margin: 0px 28px;
  }

  #subscribe {
    padding-left: 0px;
    float: right;
  }
  .footer_links input {
    font-size: 12px;
  }
  .login {
    display: flex;
    flex-direction: column;
    background-color: white;
    width: 100%;
  }
  .user_login {
    background-color: #4c0b36;
  }
  .cetegory li {
    border-bottom: 0.1px solid #473e3e42;
  }
  .user_login ul li {
    color: white;
    margin: 0;
  }
  .login ul li a img {
    width: 56px;
  }
  .login ul li a {
    color: black;
  }
  .under_line ul li {
    border-bottom: 1px solid white;
  }

  /* -------------------footer responsive------------------ */
  .footer {
    display: inline;
  }
  .footer_links p {
    margin-top: 10px;
  }
  .footer_links h3 span {
    display: inline-block;
    float: right;
  }
  .footer_link_heading {
    display: flex;
  }
  .follow_email {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .copyrights {
    margin-top: 4px;
  }
  #newsleatter {
    padding: 7px 0px;
    font-size: 15px;
  }
  .footer_links {
    margin: auto;
    width: 100%;
    display: flex;
    align-items: stretch;
  }
  .footer_links h3 {
    border-bottom: 1px solid black;
    display: inline;
  }

  .sign_up {
    margin: 17px;
  }
  .sign_up h3 {
    margin: 0;
    font-size: 17px;
    font-weight: bold;
  }
  .email {
    width: 97%;
    margin: 0px auto;
  }
  .email input {
    border: none;
    padding-right: 45px;
  }
  .quick_links_para {
    display: none;
  }
  .para {
    display: none;
  }
  .customer_services_para {
    display: none;
  }
  .my_profile_para {
    display: none;
  }

  .display {
    display: block;
  }
}
</style>
