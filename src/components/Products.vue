<template>
 
    <div class="products_img">
      <div class="side_filter">
        <div>
          <h3  
            class="filter_type"
            v-for="filters in productFilter"
            :key="filters.id"
          >
          <div v-on:click="seen = !seen" class="filter_type_option" >
                <span>
              {{ filters.filter_lable }}
                </span>
            <span
              ><svg
                
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            </span>
          </div>
          <div >
          <div class="filter_type_sub_option"  v-if="seen">
              <ul v-for="option in filters.options" :key="option.value_key" >
                <input type="checkbox" name="checkbox" id="checkbox"><li>{{ option.value }}  ({{option.total}})</li> 
            </ul>
     </div>
     </div>
          </h3>

</div>

</div>


      
          <div class="api_products">
            <div v-for="item in list" :key="item.id">
              <div id="productImg">
                <img :src="item.image" />
              <h4>{{ item.name }}</h4>
              <span>Rs{{ item.selling_price }}</span>
              <span id="discount">-{{ item.discount }}%</span>
              <p>Size {{ item.size }}</p>
              <span id="stock">{{ item.stock_status }}</span>
              </div>
            </div>
          </div>
      </div>
 
</template>

<script>
export default {
  name: "Products",
                // data:{
                //     seen: true
                // },
  data() {
    return {

         seen: true
    };
  },

  props: {
    list: Array,
    productFilter: Array,
    productType: Array,

    
  },

  methods:{
// filtershow(){
//     if(value1=true){
//         value1=false
//     }else{
//         value1=tuue
//     }
    
// }
  },
  mounted() {
      console.log( "product Filter", this.productFilter )
      console.log( "product list", this.list )

  },
  methods: {
    // filterShow(){
    //     console.log("evnt has click")
    //     if (item.discount<-50) {
    //         return  item.discount;
    //     }
    // }
  },
};
</script>
<style scoped>



svg {
    width: 21px;
    margin: 0px 17px;
    cursor: pointer;
}x
.productImg {
  width: 75%;
}
.productImg img {
  width: 100%;
}
.products_img {
  max-width: 1600px;
  margin: auto;
  display: flex;
  padding: 23px;
}
.products_div {
  width: 100%;
}
.api_products {
  /* position: relative; */
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  /* width: 95%; */
  align-items: center;
  /* /* padding: 7px; */
}
#discount {
  color: red;
  padding: 0px 15px;
}
#stock {
  color: green;
}
.products_img img {
  /* width: 100%; */
}
.products {
  flex: 0 0 21%;
  position: relative;
}
.products svg {
  top: 9px;
  position: absolute;
  right: 0;
}
.products p {
  position: relative;
  color: #4c0b36;
}
.filter_type {
  display: flex;
  font-size: 14px;
  font-weight: 100;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid;
}
.filter_type_option{
        display: flex;
    justify-content: space-between;
    width: 100%;
}
.filter_type_sub_option{
    width: 100%;
        /* display: flex;
    align-items: center;
    width: 100%; */
}
.filter_type_sub_option ul{
    list-style: none;
}
.side_filter {
      padding: 23px;
    /* width: 138%; */
    /* display: none; */
    /* transform: translateX(-20vw); */
    /* /* transition: all 0.5s ease-in-out; */

}
.side_filter h3{
    
    font-size: 16px;
    font-weight: 100;
    padding: 13px 0px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid;
    width: 76%;

}
.hide{
    display: block;
}
.filter_type span svg {
  width: 15px;
}
.filter_type_list {
  list-style: none;
  padding: 23px;
}

@media (max-width: 767px) {
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
  .api_products {
    /* position: relative; */
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* width: 95%; */
    align-items: center;
    /* /* padding: 7px; */
  }
}
</style>
