<template>

  <div class="main_header">
    <!-- ---------------Nav bar for media queri------------------ -->
    <!-- hamburger menu--------------------- -->
    <div class="navMenu">
      <svg
        v-on:click="navbarTransform = !navbarTransform"
        class="navMenu"
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="#000000"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
      </svg>
    </div>
  <!-- --------------------close Menu---------------------- -->
    <div class="nav_links"  :class="navbarTransform ? 'active' : ''">
      <div class="login">
        <svg
          v-on:click="navbarTransform = !navbarTransform" 
          class="close_nav"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="#000000"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
          />
        </svg>

        <div class="user_login">
          <ul>
            <li>
              <a href="#">
                <img src="../assets/user_login.webp" />
              </a>
            </li>
            <li>
              LOGIN
              <svg
                class="loginsvg"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
                <path
                  d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"
                />
              </svg>
            </li>
          </ul>
        </div>
        <ul class="cetegory">
          <li>
            <a href="#">WOMEN</a>
          </li>
          <li>
            <a href="#">MEN</a>
          </li>
          <li>
            <a href="#">SALE</a>
          </li>
          <li>
            <a href="#">COLLECTION</a>
          </li>
          <li>
            <a href="#">OUR STORY</a>
          </li>
          <li>
            <a href="#">CRAFTSMANSHIP</a>
          </li>
        </ul>
      </div>
      <div class="gray_div" v-on:click="navbarTransform = !navbarTransform" ></div>
    </div>

    <div class="left1">
      <ul>
        <li>
          <a href="#">
            WOMEN
            <img src="../assets/Path_115.png" alt />
          </a>
        </li>
        <li>
          <a href="#">
            MEN
            <img src="../assets/Path_115.png" alt />
          </a>
        </li>
        <li>
          <a href="#">SALE</a>
        </li>
        <li>
          <a href="#">
            COLLECTION
            <img src="../assets/Path_115.png" alt />
          </a>
        </li>
      </ul>
    </div>

    <div class="mid">
      <img class="logo1" src="../assets/Group_195.png" />
      <img class="logo2" src="../assets/Group_2@2x.png" alt="ahujasons" />
    </div>
    <div class="right1">
      <div>
        <ul>
          <li>
            <a href="#">
              OUR STORY
              <img src="../assets/Path_115.png" alt />
            </a>
          </li>
          <li>
            <a href="#">CRAFTSMANSHIP</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <div class="svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26.772"
          height="23.785"
          viewBox="0 0 26.772 23.785"
        >
          <defs>
            <!-- <style>
              .a {
                fill: #303030;
                stroke: #fff;
                stroke-width: 0.3px;
              }
                        </style>-->
          </defs>
          <path
            class="a"
            d="M-464.188,701.437a27.776,27.776,0,0,1-.9,2.72A22.139,22.139,0,0,1-469.3,710.1a53.786,53.786,0,0,1-7.306,6.475,1.074,1.074,0,0,1-1.471.088,47.335,47.335,0,0,1-9.716-9.3,14.387,14.387,0,0,1-2.637-5.174,7.208,7.208,0,0,1,7.908-8.689,7.391,7.391,0,0,1,4.807,2.346c.094.1.187.2.278.3.469-.413.892-.847,1.376-1.2,4.431-3.273,10.889-.8,11.786,4.5a1.543,1.543,0,0,0,.091.255Zm-13.3,13.266c.14-.084.2-.11.244-.146a49.756,49.756,0,0,0,7.161-6.619,18.249,18.249,0,0,0,3.367-5.11,5.384,5.384,0,0,0,.207-3.885A5.286,5.286,0,0,0-471,695.477a5.312,5.312,0,0,0-5.378,2.869,1.123,1.123,0,0,1-1.03.751,1.125,1.125,0,0,1-1.029-.753,5.346,5.346,0,0,0-5.522-2.857,5.2,5.2,0,0,0-4.586,5.661,9.271,9.271,0,0,0,1.28,3.363,29.968,29.968,0,0,0,5.626,6.589C-480.292,712.344-478.868,713.511-477.489,714.7Z"
            transform="translate(490.809 -693.263)"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23.446"
          height="23.45"
          viewBox="0 0 23.446 23.45"
        >
          <defs>
            <!-- <style>
              .a {
                fill: #303030;
              }
                        </style>-->
          </defs>
          <path
            class="a"
            d="M261.414,369.277a9.869,9.869,0,0,1-13.4-14.464,9.826,9.826,0,0,1,13.223-.762,9.933,9.933,0,0,1,1.337,14.083,1.987,1.987,0,0,1,.415.253q2.55,2.534,5.087,5.082a4.16,4.16,0,0,1,.314.332.9.9,0,0,1-1.287,1.26,4.57,4.57,0,0,1-.331-.316q-2.527-2.525-5.051-5.053A3.492,3.492,0,0,1,261.414,369.277Zm1.674-7.551a8.043,8.043,0,1,0-8.026,8.045A8.068,8.068,0,0,0,263.088,361.726Z"
            transform="translate(-245.174 -351.855)"
          />
        </svg>
        <svg
          class="w3-badge w3-red"
          xmlns="http://www.w3.org/2000/svg"
          width="26.124"
          height="24.5"
          viewBox="0 0 26.124 24.5"
        >
          <defs>
            <!-- <style> .a { fill: #303030;
              }
                        </style>-->
          </defs>
          <g transform="translate(0)">
            <path
              class="a"
              d="M-580.708,894.107a6.915,6.915,0,0,1,6.786-7.157,6.919,6.919,0,0,1,6.784,7.157c.8,0,4.386,0,5.186,0,.648,0,.732.079.732.709q0,6.474,0,12.948a2.8,2.8,0,0,1-3,2.972h-19.4a2.8,2.8,0,0,1-3-2.976q-.01-6.474,0-12.947c0-.615.09-.7.689-.706C-585.135,894.106-581.547,894.107-580.708,894.107Zm-5.108.8v.514q0,6.149,0,12.3a1.986,1.986,0,0,0,2.193,2.222c4.61.008,14.791.009,19.4,0a1.987,1.987,0,0,0,2.189-2.225q0-6.149,0-12.3v-.509h-5.152v.526c0,.681.011,1.361-.009,2.042a.863.863,0,0,1-.183.493.379.379,0,0,1-.376.017.747.747,0,0,1-.217-.464c-.02-.862-.01-1.725-.01-2.613h-11.89c0,.8.008,1.569,0,2.339,0,.316.13.778-.395.775s-.384-.471-.391-.782c-.017-.768-.006-1.538-.006-2.333Zm17.837-.822a5.819,5.819,0,0,0-2.739-5.359,5.639,5.639,0,0,0-6.457.026,5.8,5.8,0,0,0-2.692,5.333Z"
              transform="translate(586.986 -886.593)"
            />
            <path
              class="a"
              d="M-574.569,910.449h-9.7a3.136,3.136,0,0,1-3.356-3.331q-.008-5.289,0-10.578v-2.371c0-.812.244-1.06,1.044-1.062.627,0,2.953,0,4.342,0h.535a7.184,7.184,0,0,1,2.049-4.957,7.335,7.335,0,0,1,5.09-2.2h.005a7.427,7.427,0,0,1,5.079,2.2,7.185,7.185,0,0,1,2.054,4.961h4.833c.843,0,1.087.24,1.088,1.065v2.45q0,5.249,0,10.5a3.137,3.137,0,0,1-3.359,3.328Zm-12.323-16.608a1.466,1.466,0,0,0-.022.328v2.371q0,5.288,0,10.576a2.444,2.444,0,0,0,2.643,2.62h19.4a2.445,2.445,0,0,0,2.647-2.617q.008-5.248,0-10.5v-2.45a1.548,1.548,0,0,0-.021-.331,1.734,1.734,0,0,0-.355-.022h-5.546l.005-.361a6.547,6.547,0,0,0-1.851-4.811,6.691,6.691,0,0,0-4.572-1.985h-.005a6.609,6.609,0,0,0-4.583,1.988A6.519,6.519,0,0,0-581,893.457l.005.362h-1.251c-1.388,0-3.714,0-4.34,0A1.434,1.434,0,0,0-586.893,893.841Zm12.193,15.816c-3.638,0-7.266,0-9.568-.006a2.337,2.337,0,0,1-2.548-2.578V893.9h5.864l0,1.04c0,.554,0,1.1.007,1.642,0,.064,0,.134-.006.206a1.522,1.522,0,0,0,0,.225.43.43,0,0,0,.048,0l.042,0a1.517,1.517,0,0,0,0-.224c0-.069-.007-.136-.006-.2.008-.546.007-1.092.005-1.647v-1.042h12.6l0,1.042c0,.66,0,1.285.011,1.919a.279.279,0,0,0,.031.1.484.484,0,0,0,.033-.151c.014-.489.012-.99.01-1.474v-1.44h5.865v13.163a2.336,2.336,0,0,1-2.545,2.582C-567.187,909.655-570.948,909.657-574.7,909.657Zm-11.4-15.041v12.456a1.643,1.643,0,0,0,1.837,1.866c4.673.009,14.826.009,19.4,0a1.643,1.643,0,0,0,1.834-1.869V894.618h-4.44v.724c0,.49,0,1-.01,1.5a1.22,1.22,0,0,1-.266.71.6.6,0,0,1-.439.187.612.612,0,0,1-.46-.143,1.1,1.1,0,0,1-.323-.71c-.015-.643-.013-1.272-.011-1.938v-.327h-11.176v.328c0,.56,0,1.111-.005,1.661,0,.047,0,.1.005.148a.969.969,0,0,1-.186.765.747.747,0,0,1-.565.213h-.006a.749.749,0,0,1-.566-.217.973.973,0,0,1-.185-.764c0-.052.006-.1.005-.15-.013-.55-.01-1.1-.008-1.66v-.324Zm5.267,2.4Zm-.144,0Zm12.709-3.217H-580.86l-.007-.349a6.14,6.14,0,0,1,2.855-5.64,5.991,5.991,0,0,1,6.84-.027,6.166,6.166,0,0,1,2.905,5.665Zm-11.882-.712h11.173a5.348,5.348,0,0,0-2.572-4.7,5.258,5.258,0,0,0-6.073.024A5.394,5.394,0,0,0-580.153,893.082Z"
              transform="translate(587.63 -885.949)"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default  {
  name: "Main_header",

  data(){
        return {
            navbarTransform:false
        }
  },
};
</script>

<style>

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transform: translateX(0vw);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-100vw);
}
.navMenu {
  display: none;
}
.display {
  display: block;
}
.main_header {
  font-size: 16px;
  color: #303030;
  padding: 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 5px 6px -4px #e4e4e4;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
  height: 100px;
}
.nav_links {
  display: none;
}

.left1 {
  margin-left: 40px;
}

.mid {
  margin: auto;
}

.left1 ul {
  display: flex;
}
.left1 ul li {
  list-style: none;
  padding: 12px 12px;
}
.right1 ul li {
  list-style: none;
  padding: 12px 12px;
}

.right1 {
  margin: -27px;
  display: flex;
  justify-content: space-between;
}
.right1 ul {
  display: flex;
  margin-right: 37px;
}
.left1 ul li a {
  font-family: "Jost* 600 Semi";
  font-weight: bold;
  text-decoration: none;
  color: #303030;
  font-weight: 300;
  font-size: 14px;
}
.left1 ul li a img {
  padding: 1px 3px;
}
.right1 ul li a {
  font-family: "Jost* 600 Semi";
  font-weight: bold;
  text-decoration: none;
  color: #303030;
  font-size: 14px;
}
.right1 ul li a img {
  padding: 1px 3px;
}
.mid img {
  width: 155px;
}
.svg {
  display: flex;
  justify-content: space-between;
}
.loginsvg {
  fill: #ffffff;
  position: absolute;
  right: -6vw;
  top: 2vw;
}
svg {
  width: 21px;
  margin: 0px 17px;
  cursor: pointer;
}
@media (max-width: 767px) {
  .header {
    justify-content: center;
  }
  .left1 ul li {
  list-style: none;
  padding: 0px 0px;}

  .main_header {
    z-index: 1;
    background-color: white;
    position: sticky;
    top: 0;
    height: 68px;
  }
  .navMenu {
    display: block;
  }
  .mid {
    margin: 0px;
  }
  .user_login ul li {
    list-style: none;
  }
  .user_login ul li a img {
    width: 112px;
  }
  .gray_div {
    width: 21%;
    height: 100vh;
    background-color: #05040445;
  }
  /* .nav_links {
    z-index: 35;
 
    display: flex;
    flex-direction: row;
    position: absolute;
    top: 14vh;
    background-color: #272727d1;
    transform: translateX(-100vw);
    transition: all 0.5s ease-in-out;
    width: 100%;
     top: -16px;
    left: 0;
  }
  .active {
    transform: translateX(0vw);
  }
  .navlinktransition{
      transform: translateX(-100vw);
    transition: all 0.5s ease-in-out;
  } */

  .nav_links ul {
       margin: 4px 15px;
  }
  .nav_links ul li {
    margin: 16px 28px;
    padding: 13px 5px;
    margin-left: 0;
    color: white;
    position: relative;
  }
  .nav_links ul li a {
    color: black;
    text-decoration: none;
  }
  .nav_links ul li a img {
    width: 60px;
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

  .right1 {
    display: none;
  }
  svg {
    margin: 0px 8px;
  }
  .close_nav {
    margin: 0px 8px;
    position: absolute;
    fill: white;
    z-index: 111;
    right: 19vw;
    top: 6vh;
  }
  .mid img {
    width: 64px;
    position: relative;
    top: 3px;
    left: 38px;
  }
}
</style>