<template>
    <div>
         <div class="footer">
    <div class="follow_email">
      <h3>Follow Us</h3>
      <p>@ahujasonsofficial</p>
    </div>

    <div class="footer_links" id="shop">
      <h3 v-on:click="shop = !shop">
        SHOP
        <span><svg  v-show="!shop" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <svg  v-show="shop" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>
          
          </span>

      </h3>
<!-- v-if="shop" -->
      <div class="para"   :class="{ activeFooter : shop}" >
        <p> <a href="#"> Men</a></p>
        <p> <a href="#"> Women</a></p>
        <p> <a href="#"> Home</a></p>
        <p> <a href="#"> Sale</a></p>
        <p> <a href="#"> Collection</a></p>
      </div>
    </div>

    <div class="footer_links" >
      <h3 id="quick_links" v-on:click="quick_links = !quick_links">
        QUICK LINKS
        <span><svg v-show="!quick_links" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <svg  v-show="quick_links" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg></span>
      </h3>
      <div class="footer_links">
        <div class="quick_links_para"  :class="{ activeFooter : quick_links}">
          <p> <a href="#">Ahujasons Expore</a> </p>
          <p> <a href="#">Ahujasons Wholesale</a> </p>
          <p> <a href="#">Our Story</a> </p>
          <p> <a href="#">Legacy</a> </p>
          <p> <a href="#">Craftsman ship</a> </p>
          <p> <a href="#">Our Store</a> </p>
          <p> <a href="#">Blogs</a> </p>
        </div>
      </div>
    </div>

    <div class="footer_links" id="customer_services">
      <h3 id="customer_services"  v-on:click="customer_services = !customer_services">
        CUSTOMER SERVICE
        <span><svg v-show="!customer_services" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <svg  v-show="customer_services" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg></span>
      </h3>
      <div class="customer_services_para" :class="{ activeFooter : customer_services}">
        <p> <a href="#"> Terms and Condition</a></p>
        <p> <a href="#"> Shipping & Delivery</a></p>
        <p> <a href="#"> Returns & Cancellation</a></p>
        <p> <a href="#"> Contact us</a></p>
        <p> <a href="#"> Store appointment</a></p>
      </div>
    </div>

    <div class="footer_links">
      <h3 id="my_profile" v-on:click="my_profile = !my_profile">
        MY PROFILE
        <span><svg v-show="!my_profile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
          <svg  v-show="my_profile" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg></span>
      </h3>
      <div class="my_profile_para" :class="{ activeFooter : my_profile}">
        <p> <a href="#"> My Account</a></p>
        <p> <a href="#"> Track Order</a></p>
        <p> <a href="#"> My Cart</a></p>
        <p> <a href="#"> Wishlist</a></p>
        <p> <a href="#"> Order History</a></p>
      </div>
    </div>

    <div class="sign_up">
      <h3>SIGN UP AND SAVE</h3>
      <p id="newsleatter">
        Subscribe to our newsletter and get 10% off your first purchase
      </p>

      <div class="email">
        <input type="text" placeholder="Enter your email" />
        <span id="subscribe">Subscribe</span>
      </div>

      <p class="follow">GIVE US A FOLLOW</p>

      <div class="links">
        <svg class="fb" xmlns="http://www.w3.org/2000/svg" width="59.137" height="22.426" viewBox="0 0 59.137 22.426">
          <defs>
            <!-- <style>
              .a {
                fill: #303030;
              }
            </style> -->
          </defs>
          <g transform="translate(0 0)">
            <path class="a"
              d="M-299.468-61.033c-.017-.213-.049-.426-.05-.64q-.018-5.019-.03-10.039c0-.161-.016-.321-.026-.519h-2.253v-3.834h2.278c0-.249,0-.443,0-.635.03-1.109-.008-2.225.111-3.324a3.3,3.3,0,0,1,2.691-3.062,18.675,18.675,0,0,1,2.357-.273c.2-.021.393-.035.59-.053h.4l1.815.092v3.873c-.251,0-.522,0-.794,0-.563,0-1.126,0-1.688.016-.664.025-.876.208-.9.859-.032.809-.008,1.62-.008,2.483h3.424c-.108,1.218-.2,2.379-.331,3.537-.01.091-.262.217-.4.22-.876.02-1.753.01-2.7.01,0,.22,0,.4,0,.571q-.015,5.066-.034,10.132a5.341,5.341,0,0,1-.065.585Z"
              transform="translate(301.827 83.411)" />
          </g>
          <g transform="translate(36.701 0)">
            <path class="a"
              d="M-346.984,182.279q0-2.319,0-4.639a6.329,6.329,0,0,1,5.161-6.4,8.613,8.613,0,0,1,1.748-.183c2.881-.017,5.762-.009,8.644,0a6.894,6.894,0,0,1,5.259,2.2,5.639,5.639,0,0,1,1.6,3.9q.039,5.012,0,10.024a6.168,6.168,0,0,1-4.025,5.752,7.063,7.063,0,0,1-2.844.537q-4.344.005-8.689,0a6.885,6.885,0,0,1-5.224-2.18,5.768,5.768,0,0,1-1.632-4.026c-.015-1.659,0-3.318,0-4.978Zm20.776-.045h0c0-1.7,0-3.409,0-5.113a3.592,3.592,0,0,0-.541-1.911,4.974,4.974,0,0,0-4.37-2.5c-3.069-.039-6.139-.014-9.208-.013a5.149,5.149,0,0,0-2.839.846,4.41,4.41,0,0,0-2.167,3.948c.013,3.258,0,6.516,0,9.774a3.807,3.807,0,0,0,.541,2.026,4.952,4.952,0,0,0,4.361,2.512c3.054.042,6.109.013,9.163.013a5.24,5.24,0,0,0,2.867-.832,4.362,4.362,0,0,0,2.193-3.886Q-326.211,184.666-326.208,182.234Z"
              transform="translate(346.988 -171.043)" />
            <path class="a"
              d="M-297.266,223.19a5.237,5.237,0,0,1-5.246-5.252,5.248,5.248,0,0,1,5.273-5.133,5.241,5.241,0,0,1,5.247,5.205A5.249,5.249,0,0,1-297.266,223.19Zm0-1.65a3.578,3.578,0,0,0,3.629-3.506,3.573,3.573,0,0,0-3.579-3.577,3.577,3.577,0,0,0-3.64,3.518A3.572,3.572,0,0,0-297.271,221.54Z"
              transform="translate(308.491 -207.192)" />
            <path class="a"
              d="M-225.582,202.163a1.145,1.145,0,0,1-1.079,1.147,1.14,1.14,0,0,1-1.113-1.134,1.145,1.145,0,0,1,1.078-1.148A1.145,1.145,0,0,1-225.582,202.163Z"
              transform="translate(243.8 -196.997)" />
          </g>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="27.529" height="22.425" viewBox="0 0 27.529 22.425">
          <defs>
            <!-- <style>
              .a {
                fill: #303030;
              }
            </style> -->
          </defs>
          <path class="a"
            d="M52.843,273.139a11.335,11.335,0,0,0,8.3-2.331c-.19-.025-.376-.042-.562-.063a5.22,5.22,0,0,1-1.469-.392,5.633,5.633,0,0,1-2.971-2.887,5.032,5.032,0,0,1-.2-.506c-.03-.088,0-.1.078-.088a5.226,5.226,0,0,0,1.19.08,4.593,4.593,0,0,0,1.191-.2c-.116-.031-.232-.062-.347-.094a5.647,5.647,0,0,1-4.077-4.688c-.033-.244-.033-.489-.053-.734-.006-.076,0-.107.09-.06a5.615,5.615,0,0,0,1.719.591,3.024,3.024,0,0,0,.7.049c-.106-.08-.213-.158-.316-.241a5.622,5.622,0,0,1-2.044-3.347,5.234,5.234,0,0,1-.108-1.145,5.654,5.654,0,0,1,.72-2.715c.038-.068.059-.085.115-.016a15.156,15.156,0,0,0,1.6,1.687,16.151,16.151,0,0,0,2.468,1.845,15.977,15.977,0,0,0,5.479,2.078,18.675,18.675,0,0,0,1.873.228c.025,0,.05,0,.075,0,.073.009.09-.013.074-.09a5.744,5.744,0,0,1-.116-1.464,5.636,5.636,0,0,1,1.684-3.77,5.72,5.72,0,0,1,2.186-1.336,5.619,5.619,0,0,1,2.3-.261,5.5,5.5,0,0,1,3.051,1.237,4.679,4.679,0,0,1,.487.448.173.173,0,0,0,.186.058,12.093,12.093,0,0,0,1.9-.575,11.94,11.94,0,0,0,1.587-.781,5.563,5.563,0,0,1-.942,1.778,6,6,0,0,1-1.476,1.333,9.7,9.7,0,0,0,1.6-.305,11.621,11.621,0,0,0,1.544-.55l.019.021c-.106.148-.212.3-.319.443a10.894,10.894,0,0,1-1.214,1.389,10.177,10.177,0,0,1-1.2,1.011.155.155,0,0,0-.073.151c.009.221.017.441.015.662a16.05,16.05,0,0,1-.432,3.6,16.96,16.96,0,0,1-1.5,4.02,16.5,16.5,0,0,1-1.878,2.822,15.7,15.7,0,0,1-1.784,1.837,15.139,15.139,0,0,1-5.134,2.948,15.537,15.537,0,0,1-2.651.642c-.524.079-1.05.139-1.579.171-.5.03-1,.046-1.495.033a16.6,16.6,0,0,1-2.06-.181,15.95,15.95,0,0,1-2.935-.734,15.766,15.766,0,0,1-2.821-1.321c-.147-.087-.292-.178-.437-.268A.229.229,0,0,1,52.843,273.139Z"
            transform="translate(-52.843 -253.255)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="22.504" height="22.426" viewBox="0 0 22.504 22.426">
          <defs>
            <!-- <style>
              .a {
                fill: #303030;
              }
            </style> -->
          </defs>
          <path class="a"
            d="M1963.43,1045.42a2.068,2.068,0,0,1-1.558-2.32q0-8.088,0-16.176c0-.594-.017-1.188.006-1.781a2.006,2.006,0,0,1,1.555-2.034c.2.18.453.107.683.107q9,.006,18.007,0c.23,0,.478.072.683-.107a2.068,2.068,0,0,1,1.558,2.32q0,8.088,0,16.177c0,.594.017,1.188-.006,1.781a2.006,2.006,0,0,1-1.555,2.034c-.2-.18-.453-.107-.683-.107q-9-.006-18.007,0C1963.884,1045.313,1963.635,1045.241,1963.43,1045.42Zm10.858-9.08c.04-.184.065-.373.122-.551a1.891,1.891,0,0,1,2.139-1.464,1.8,1.8,0,0,1,1.579,1.813,12.179,12.179,0,0,1,.085,1.347c.01,1.567.018,3.135,0,4.7-.008.6.2.879.832.85.688-.031,1.379-.034,2.067,0,.648.033.89-.224.881-.872-.032-2.137-.02-4.274-.038-6.412a6.471,6.471,0,0,0-.411-2.154,3.421,3.421,0,0,0-2.686-2.381,4.443,4.443,0,0,0-4.58,1.358c-.09-.563.1-1.261-.7-1.3s-1.615-.028-2.423-.009a.6.6,0,0,0-.642.687q.005,5.2,0,10.4c0,.246.035.56.293.591a9.409,9.409,0,0,0,3.162-.036c.109-.024.185-.2.276-.311.24-.175.151-.433.152-.658q.01-2.494,0-4.988C1974.4,1036.744,1974.459,1036.519,1974.288,1036.34Zm-5.451.853c0-1.686-.014-3.373.007-5.059.008-.611-.265-.877-.846-.879-.689,0-1.378-.009-2.067,0-.5.008-.8.217-.8.773q.009,5.13,0,10.26c0,.5.223.746.732.74.713-.008,1.426-.02,2.138,0,.616.021.848-.255.842-.855C1968.826,1040.518,1968.837,1038.855,1968.837,1037.193Zm-1.854-11.694a2.415,2.415,0,0,0-2.407,2.392,2.407,2.407,0,1,0,4.815,0A2.416,2.416,0,0,0,1966.984,1025.5Z"
            transform="translate(-1961.865 -1023.051)" />
          <path class="a"
            d="M1992.215,1022.767c-.2.179-.453.106-.683.107q-9,.006-18.007,0c-.229,0-.478.073-.683-.107.236-.019.472-.054.708-.055q8.979,0,17.957,0C1991.743,1022.713,1991.979,1022.748,1992.215,1022.767Z"
            transform="translate(-1971.276 -1022.71)" />
          <path class="a"
            d="M1972.833,1178.732c.2-.179.453-.106.683-.106q9-.006,18.007,0c.23,0,.478-.073.683.107-.236.019-.472.054-.708.054q-8.979,0-17.957,0C1973.3,1178.787,1973.069,1178.751,1972.833,1178.732Z"
            transform="translate(-1971.268 -1156.364)" />
          <path class="a"
            d="M2048.514,1122.089c.011-2.086-.069-4.172.043-6.257.17.179.11.4.11.611q.006,2.494,0,4.988C2048.665,1121.656,2048.754,1121.914,2048.514,1122.089Z"
            transform="translate(-2036.134 -1102.543)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="22.422" height="22.425" viewBox="0 0 22.422 22.425">
          <defs>
            <!-- <style>
              .a {
                fill: #303030;
              }
            </style> -->
          </defs>
          <path class="a"
            d="M1925.6,986.822a11.213,11.213,0,1,1,11.2-11.238A11.165,11.165,0,0,1,1925.6,986.822Zm-.683-8.147a3.2,3.2,0,0,0,2.838,1.07,4.5,4.5,0,0,0,3.522-2.311c1.7-2.935,1.627-6.609-1.4-8.58a7.108,7.108,0,0,0-8.587.979,5.449,5.449,0,0,0-1.439,5.566,2.856,2.856,0,0,0,1.571,1.93c.208.093.448.2.538-.042.182-.5.524-1,.065-1.55a2.4,2.4,0,0,1-.53-1.542,4.441,4.441,0,0,1,4.02-4.677c2.254-.3,4.133.859,4.446,2.891a6.37,6.37,0,0,1-1.028,4.639,2.377,2.377,0,0,1-.867.791,1.737,1.737,0,0,1-1.964-.036,1.526,1.526,0,0,1-.443-1.814,13.558,13.558,0,0,0,.734-2.95,1.3,1.3,0,0,0-.772-1.419,1.512,1.512,0,0,0-1.738.533,3.075,3.075,0,0,0-.466,2.773,2.586,2.586,0,0,1,.014,1.272c-.354,1.435-.721,2.868-1.038,4.311a8.4,8.4,0,0,0,.032,3.892C1923.986,982.769,1924.476,980.8,1924.918,978.675Z"
            transform="translate(-1914.381 -964.397)" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="29.056" height="20.371" viewBox="0 0 29.056 20.371">
          <defs>
            <!-- <style>
              .a {
                fill: #303030;
              }
            </style> -->
          </defs>
          <path class="a"
            d="M1947.068,973.025c-3.25-.164-6.506-.081-9.753-.4-2.747-.268-3.964-1.177-4.342-3.849a39.738,39.738,0,0,1,.068-12.206c.386-2.3,1.557-3.316,3.916-3.519a130.009,130.009,0,0,1,17.675-.191,25.657,25.657,0,0,1,3.427.332,3.456,3.456,0,0,1,2.94,2.7,27.415,27.415,0,0,1,.589,6.559,33.606,33.606,0,0,1-.431,6.579c-.449,2.344-1.635,3.332-4.043,3.574C1953.772,972.944,1950.417,972.87,1947.068,973.025Zm-2.846-14.54v8.671l7.515-4.336Z"
            transform="translate(-1932.535 -952.654)" />
        </svg>
      </div>

      <div class="copyrights">
        <p>Copyright © 2021 by Ahujasons I Powered by GreenHonchos</p>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default{
    name:'Footer_Head',
    data(){
      console.log("event fire") 
        return{
            shop:false,
            quick_links:false,
            customer_services:false,
            my_profile:false,
          }
        },


        methods: {
          isMobile(){
            if(innerWidth== 760){
                  this.shop
            }
          }
        },



}

</script>
<style scoped>

.footer {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
  align-items: flex-start;
  border-bottom: 1px solid #eae4cf;
}

.footer_links {

  align-items: flex-start;
  display: flex;
  flex-direction: column;
}
.footer_links a{
  text-decoration: none;
    color: #372b54;
}
.footer_links a:hover{
  text-decoration: underline;
}
.footer_links h3 {
  font-size: 16px;
  margin: 6px 10px 6px 16px;
  font-weight: 100;
  font-size: 14px;
  cursor: pointer;
}
.footer_links p {
  font-size: 14px;
 padding:10px 19px;
}
#newsleatter {
  padding: 7px 13px;
  margin: 3px 0px 33px 1px;
  font-size: 14px;
}
.email {
  margin-left: 13px;
  border-bottom: 2px solid black;
  width: 94%;
}
.email input{
  width: 76%;
  border:none
}
.email input:focus{
  outline: none;
}

.sign_up h3{
  margin: 6px 10px 6px 16px;
  font-weight: 100;
  font-size: 14px;
}
.footer_links input {
  border: none;

  font-size: 14px;
  font-family: "Jost";
}
#subscribe {
  font-weight: bold;
  cursor: pointer;
  float: right;

  cursor: pointer;
}

.follow {
  font-weight: bold;
  letter-spacing: 4px;
  margin: 16px 10px;
}
.links {
  margin-top: 23px;
}
.fb {
  width: 55px;
}
.links svg{
  margin: 10px;
}


.copyrights {
  margin-top: 17px;
}
@media (max-width: 767px){
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
  .follow {
        margin: 16px 6px;
}
  .copyrights {
    margin-top: 4px;
        margin-left: 9px;
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

  .sign_up{
    margin: 17px;
    padding-bottom: 61px;
  }
  .sign_up h3{
       margin: 0;
       font-size: 17px;
      font-weight: bold;
  
  }
  .email {
    width: 97%;
    margin: 0px auto;
}
.email input{
  width: 73%;
  border: none;
 
}
.para {
    display: block;
  }

  .quick_links_para {
    display: none ;
  }
  .para {
    display: none;
  }
  .activeFooter{
    display: block !important;
  }
  .customer_services_para {
    display: none  ;
  }
  .my_profile_para {
    display: none  ;
  }
  .side_filter{
    display: none  ;
  }
  /* .display {
    display: block;
  } */

}

</style>