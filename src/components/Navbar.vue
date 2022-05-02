<template>

<div class="header">
    <div class="left">
      <p>COMPLIMENTARY GIFT BOX PACKING ON ALL PRE-PAID ORDERS</p>
    </div>
    <div class="right">
      <ul>
        <li id="flags" v-on:click="filterSeen = !filterSeen">
          <span><img src="../assets/1200px-Flag_of_India.svg.webp" /></span>
          <p>IND <img src="../assets/Path_115.png" alt="" /></p>
        </li>
          <div class="flag" v-if="filterSeen" >
            <div>
              <div class="flag_name">
              <span><img src="../assets/1200px-Flag_of_the_United_States.svg.webp" /></span>
              <p>USA</p>
              </div>
              <div class="flag_name">
                <span><img src="../assets/1200px-Flag_of_the_United_Kingdom.svg.webp" /></span>
                <p>UK</p>
              </div>
            </div>
          </div>
        <li><a href="#">OUR STORES</a></li>
        <li><a href="#">MY ACCOUNT</a></li>
        <li><a href="#">BLOG</a></li>
      </ul>
    </div>
  </div>

</template>
<script>

export default{
    name:'Navbar_mark',
 data(){
   return{
      filterSeen:false
   }
 }
}

</script>
<style scoped>


.header {
  width: 100%;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f2f2f2;
}
.left{
  padding-left: 16px;
}

.flag {
  /* display: none; */
  position: absolute;
      position: absolute;
    z-index: 1111;
    top: 23px;
    right: 22.2vw;
}
.flag div span img{
  width: 24px;
}
.flag_name{
  display: flex;
}
.show {
  display: none;
}
#flags {
  cursor: pointer;
}
li {
  list-style: none;
  margin: 0px 19px;
}
.right ul {
  display: flex;
  align-items: center;
}

.right ul li a {
  text-decoration: none;
  color: black;
}
.right ul li span {
  padding: 0px 5px;
  bottom: 1px;
  position: relative;
}
.right ul li p {
  display: inline;
  padding: 0px 5px;
  bottom: 3px;
  position: relative;
}
.right ul li p img {
  width: 8px;
  position: absolute;
  top: 2px;
}
.right ul li span p {
  padding: 0px 5px;
  bottom: 5px;
  position: relative;
}

.right ul li {
  list-style: none;
}
.right ul li img {
  width: 23px;
  margin: 3px -7px -2px 0px;
}


@media (max-width: 767px){
.header{
  justify-content: space-around;
}




}



</style>