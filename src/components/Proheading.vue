<template>
    <div>
        <div class="container">
    <div id="proheading">
      <p>{{productName}}</p>
      <span>{{productCount}} Items</span>
    </div>
    </div>
    </div>
</template>
<script>
export default{
    name:'Proheading_page',
    props: {
      productCount: String,
      productName: String
    }
}


</script>
<style>
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


@media (max-width: 767px){
   #proheading p {
    font-size: 28px;
  }
}

</style>