<template>
  <div>
    <Main_header />
    <!-- ------------------------Upper Nevigation------------------- -->
    <div class="upper-product-nav">
      <span class="home-page-link">
        <router-link to="/">Home</router-link>
      </span>
      <span class="navigation-arrow">/</span>
      <span class="current-product-name"> {{ this.ProductName }}</span>
      <!-- <span>/</span> -->
    </div>

    <div class="single-product">
      <div class="single-product-img" v-if="singleProducts.length">
        <div class="first-slider">
          <VueSlickCarousel
            v-bind="settingMainImg"
            class="first-img"
            ref="c1"
            :asNavFor="$refs.c2"
            :focusOnSelect="true"
          >
            <div v-for="item in singleProducts" :key="item.id_product">
                <img :src="item.image" alt="" />
               
            </div>
          </VueSlickCarousel>
        </div>
        <div class="second-slider">
          <VueSlickCarousel
            v-bind="settings"
            :style="{ height: '372px' }"
            class="first-img"
            ref="c2"
            :asNavFor="$refs.c1"
            :slidesToShow="4"
            :focusOnSelect="true"
          >
            <div v-for="item in singleProducts" :key="item.id_product">
              <img :src="item.image" alt="" />
            </div>
          </VueSlickCarousel>
        </div>
      </div>

      <div class="product-info-box">
        <div class="product-info-name">{{ ProductsInfo.name }}</div>
        <div class="rating">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path
                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path
                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path
                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <g>
              <path d="M0,0h24v24H0V0z" fill="none" />
              <path d="M0,0h24v24H0V0z" fill="none" />
            </g>
            <g>
              <path
                d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
              />
            </g>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#000000"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"
            />
          </svg>
          <span class="review">(10) ></span>
        </div>
        <span class="product-info-selling_price"
          >Rs: {{ ProductsInfo.selling_price }}</span
        >
        <span
          class="product-info-discount"
          :class="ProductsInfo.discount == 0 ? 'active' : ''"
          >{{ ProductsInfo.discount }}%off</span
        >
        <div class="product-info-price">
          <span :class="ProductsInfo.discount == 0 ? 'active' : ''">
            <s> MRP:{{ ProductsInfo.price }}</s>
            <span class="taxes">(inclusive of all taxes)</span>
          </span>
        </div>
        <div class="product-info-description">
          {{ ProductsInfo.description }}
        </div>
        <div class="size-box">
          <span class="size"
            >SELECT SIZE :
            <span class="size-no"> {{ selectedSize }} </span></span
          >
        </div>
        <div class="product-info-size-box">
          <span
            class="product-info-Product_Title_FH"
            v-for="size in NewSizeInfo"
            :key="size.id_product"
            @click="changeSize(size.size)"
            v-bind:class="selectedSize == size.size ? 'active' : ''"
            >{{ size.size }}</span
          >
        </div>

        <div class="product-color">
          <div class="product-color">
            <div class="product-info-color">
              <span>COLOURS :</span
              ><span v-if="selectedColor" class="selected-color">{{
                selectedColor
              }}</span>
            </div>
          </div>
        </div>
        <div class="product-color-img">
          <div
            class="single-color"
            v-for="color in this.colorVarient"
            :key="color.id"
          >
            <div
              class="product-info-color-img"
              @click="changeColor(color.color_name)"
              v-bind:class="selectedColor == color.color_name ? 'active2' : ''"
            >
              <img :src="color.image_url" alt="" />
            </div>
          </div>
        </div>

        <div class="add-to-cart">
          <div class="sellingPrice">Rs:{{ SellingPrice }}</div>
          <button>ADD TO CART</button>
          <div class="wish-list">
            <a href="#">Add to wishlist</a>
          </div>
        </div>

        <div class="product-title-box" v-on:click="isVisible = !isVisible">
          <h3>PRODUCT DESCRIPTION</h3>
          <span>
            <svg
              v-show="!isVisible"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <svg
              v-show="isVisible"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </span>
        </div>

        <div>
          <div class="product-attributes-box" v-show="isVisible">
            <div class="product-info">
              <div class="lable-box">
                <ul class="product-attributes">
                  <li v-for="Attribute in Attributes" :key="Attribute.id">
                    <span class="lable"> {{ Attribute.label }}</span>
                    <span class="value">{{ Attribute.value }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="product-title-box" v-on:click="show = !show">
          <h3>PRODUCT INFORMATION</h3>
          <span>
            <svg
              v-show="!show"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
            <svg
              v-show="show"
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M19 13H5v-2h14v2z" />
            </svg>
          </span>
        </div>
        <div>
          <p v-show="show">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur quibusdam, sunt fuga labore aspernatur maxime
            recusandae? Facere, earum cumque. Officia neque ad ab, non
            laboriosam dignissimos ex quos, sapiente et amet perferendis maxime
            quasi minus vel dolorem! Ducimus, rerum mollitia. Expedita nesciunt
            officiis sit natus.
          </p>
        </div>

        <div class="checkPin">
          <h3>CHECK PINCODE FOR DELIVERY</h3>
        </div>
        <div class="location">
          <label for="pin">
            <input
              id="pin"
              name="pin"
              type="tel"
              pattern="[0-9]*"
              maxlength="6"
              placeholder="Enter pincode"
            />
          </label>

          <span>CHECK</span>
        </div>
      </div>
    </div>
    <div class="shipping-info-box">
      <div class="shipping">
        <div class="shipping-box">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="M11.2 39.95Q8.75 39.95 7.025 38.225Q5.3 36.5 5.3 34.05H2V11Q2 9.8 2.9 8.9Q3.8 8 5 8H33.95V16.35H39.2L46 25.4V34.05H42.45Q42.45 36.5 40.725 38.225Q39 39.95 36.55 39.95Q34.1 39.95 32.375 38.225Q30.65 36.5 30.65 34.05H17.1Q17.1 36.5 15.375 38.225Q13.65 39.95 11.2 39.95ZM11.2 36.95Q12.4 36.95 13.25 36.1Q14.1 35.25 14.1 34.05Q14.1 32.85 13.25 32Q12.4 31.15 11.2 31.15Q10 31.15 9.15 32Q8.3 32.85 8.3 34.05Q8.3 35.25 9.15 36.1Q10 36.95 11.2 36.95ZM5 31.05H6.1Q6.95 29.7 8.25 28.9Q9.55 28.1 11.15 28.1Q12.75 28.1 14.075 28.925Q15.4 29.75 16.25 31.05H30.95V11H5Q5 11 5 11Q5 11 5 11ZM36.55 36.95Q37.75 36.95 38.6 36.1Q39.45 35.25 39.45 34.05Q39.45 32.85 38.6 32Q37.75 31.15 36.55 31.15Q35.35 31.15 34.5 32Q33.65 32.85 33.65 34.05Q33.65 35.25 34.5 36.1Q35.35 36.95 36.55 36.95ZM33.95 26.75H43.25L37.7 19.35H33.95ZM18 21.55Q18 21.55 18 21.55Q18 21.55 18 21.55Q18 21.55 18 21.55Q18 21.55 18 21.55Q18 21.55 18 21.55Q18 21.55 18 21.55Z"
            />
          </svg>
          <p>Free shipping</p>
        </div>

        <div class="quality">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="M21.8 30.65 33.2 19.25 31.1 17.2 21.95 26.35 16.9 21.3 14.7 23.5ZM24 43.95Q17 42.2 12.5 35.825Q8 29.45 8 21.85V9.95L24 3.95L40 9.95V21.85Q40 29.45 35.5 35.825Q31 42.2 24 43.95ZM24 24.55Q24 24.55 24 24.55Q24 24.55 24 24.55Q24 24.55 24 24.55Q24 24.55 24 24.55ZM24 40.85Q29.75 38.95 33.375 33.675Q37 28.4 37 21.85V12.05L24 7.15L11 12.05V21.85Q11 28.4 14.625 33.675Q18.25 38.95 24 40.85Z"
            />
          </svg>
          <p>High Quality, Unbeatable value</p>
        </div>

        <div class="exchange">
          <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
            <path
              d="M22.55 41.9Q16.4 41.4 12.2 36.85Q8 32.3 8 26.05Q8 22.2 9.775 18.8Q11.55 15.4 14.75 13.25L16.9 15.4Q14.1 17.05 12.55 19.925Q11 22.8 11 26.05Q11 31.05 14.3 34.7Q17.6 38.35 22.55 38.9ZM25.55 41.9V38.9Q30.55 38.3 33.8 34.675Q37.05 31.05 37.05 26.05Q37.05 20.6 33.275 16.825Q29.5 13.05 24.05 13.05H23.05L26.05 16.05L23.9 18.2L17.25 11.55L23.9 4.9L26.05 7.05L23.05 10.05H24.05Q30.75 10.05 35.4 14.725Q40.05 19.4 40.05 26.05Q40.05 32.3 35.875 36.85Q31.7 41.4 25.55 41.9Z"
            />
          </svg>

          <p>Easy Exchange</p>
        </div>
      </div>
    </div>
    <div class="similarProduct">
      <h2>YOU MAY ALSO LIKE</h2>
    </div>

    <div class="best-product" v-if="BestProducts.length">
      <VueSlickCarousel v-bind="settingsslides">
        <div
          class="best-product-img"
          v-for="BestProduct in BestProducts"
          :key="BestProduct.id_product"
        >
          <div class="best-product-box">
            <img :src="BestProduct.image" alt="" />
            <p class="trend">/ IN TREND /</p>
            <p class="bestproduct-name">{{ BestProduct.name }}</p>
            <span class="bestproduct-selling-price"
              >Rs: {{ BestProduct.selling_price }}</span
            >
            <span
              class="bestproduct-price"
              :class="BestProduct.discount == 0 ? 'active' : ''"
            >
              Rs: <s>{{ BestProduct.price }}</s>
            </span>
            <span
              class="bestproduct-discount"
              :class="BestProduct.discount == 0 ? 'active' : ''"
              >{{ BestProduct.discount }}% off</span
            >
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import Main_header from "./Main_header.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
// import imageZoom from 'vue-image-zoomer';
// import 'lazysizes'
import axios from "axios";
export default {
  name: "SingleProductPage",
  components: {
    Main_header,
    VueSlickCarousel,
    // imageZoom
  },

  data() {
    return {
      selectedColor: "YELLOW",
      selectedSize: 6,
      colorVarient: [
        {
          image_url:
            "https://upload.wikimedia.org/wikipedia/en/f/fb/Yellow_icon.svg",
          color_name: "YELLOW",
        },
        {
          image_url:
            "data:image/png;base64,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",
          color_name: "PINK",
        },
        {
          image_url:
            "data:image/png;base64,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",
          color_name: "BLACK",
        },
      ],
      id_product: "",
      ProductName: "",
      SellingPrice: "",
      singleProducts: [],
      ProductsInfo: [],
      NewSizeInfo: [],
      Attributes: [],
      BestProducts: [],
      imageURl: "",
      isVisible: false,
      show: false,

      settingMainImg: {
        // autoplay: true,
        // autoplaySpeed: 3500,
      },
      settings: {
        // autoplay: true,
        // autoplaySpeed: 3500,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
      },
      settingsslides: {
        // autoplay: true,
        // autoplaySpeed: 2500,
        // arrows: true,
        dots: true,
        focusOnSelect: true,
        infinite: true,
        speed: 2500,
        slidesToShow: 3,
        slidesToScroll: 3,
        touchThreshold: 5,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: true
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            },
          },
        ],
      },
    };
  },

  methods: {
    changeSize(size) {
      this.selectedSize = size;
    },
    singleProductInfo() {
      axios
        .get(`https://pim.wforwoman.com/pim/pimresponse.php/`, {
          params: {
            service: "product",
            store: 1,
            url_key: this.id_product,
          },
        })
        .then((data) => {
          // console.log(data);
          // console.log("this is a single product data", data.data);

          // console.log("this is product", this.imageURl);

          this.ProductName = data.data.result.name;
          // console.log("this is a product name", this.ProductName);
          this.singleProducts = data.data.result.gallery;
          this.ProductsInfo = data.data.result;
          this.NewSizeInfo = data.data.result.new_size_chart.result;
          this.Attributes = data.data.result.visible_attributes;
          this.BestProducts = data.data.result.bestseller_products;
          this.SellingPrice = data.data.result.selling_price;
          // console.log("this is bestseller product", this.BestProducts);

          // console.log("this is a single size data", this.NewSizeInfo);
          // console.log("this is a single product data", this.singleProducts);
          // console.log("this is a single product info", this.ProductsInfo);
        });
    },
    changeColor(color) {
      this.selectedColor = color;
    },
  },

  mounted() {
    this.id_product = this.$route.params.id_product;
    this.singleProductInfo();
    // console.log("router", this.$router);
  },
};
</script>
<style >
.slick-slide.slick-active.slick-current {
    border: 1px solid #c11d14;
}

.slick-dots{
 display: none  !important;
} 
.slick-dots li button {
  display: none  !important;
}
.upper-product-nav {
  padding: 14px 51px;
  padding-top: 20px;
}
.home-page-link a,
.navigation-arrow {
  font-size: 12px;
  color: #565656;
  margin-right: 5px;
  text-decoration: none;
}
.slick-prev:before,
.slick-next:before {
  font-family: "slick";
  font-size: 20px;
  line-height: 1;

  opacity: 0.75;
  color: rgb(27, 26, 26);

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.active {
  display: none;
}
.first-slider {
  width: 81%;
}
.second-slider {
  width: 10%;
}

.share-svg {
  display: inline-block;
  position: absolute;
  top: 12px;
  right: 78px;
}
.share-svg svg {
  width: 32px;
}
.current-product-name {
  font-size: 12px;
  color: #000000;
  margin-right: 5px;
  font-weight: 600;
}

.first-img img {
  width: 100%;
      /* margin-top: 4px !important; */
}
.slick-vertical .slick-slide{
  width: 61px;
}

.single-product-img {
  display: flex;
  position: relative;
  width: 60%;
}
.product-info-box {
  width: 42%;
}
.product-info-name {
  margin-bottom: 10px;
  font-weight: 400;
  font-size: 20px;
  text-transform: uppercase;
  color: #2c2a2a;
}
.rating {
  display: flex;
  width: 100%;
  align-items: center;
}
.rating svg {
  margin: 0px 0px;
}
.review {
  font-size: 12px;
  margin-left: 8px;
}
.product-info-selling_price {
  margin: 13px 0px;
}
.single-product {
  display: flex;
  justify-content: space-between;
  padding: 0px 51px;
}
.product-color-img {
  display: flex;
}
.product-info-discount {
  margin: 0px 9px;
  color: #ff0000;
}
.taxes {
  color: #ffd63c;
  margin-left: 10px;
}
.selected-color {
  margin-left: 12px;
}
.product-info-price {
  color: #7e7e7e;
  border-bottom: 1px solid #7e7e7e;
  margin-bottom: 5px;
  margin-top: 1px;
  padding-bottom: 13px;
  font-size: 14px;
}

.product-info-description {
  font-size: 13px;
  border-bottom: 1px solid #7e7e7e;
  margin-bottom: 12px;
  padding: 11px 0px;
}
.product-info-size-box {
  display: flex;
  flex-wrap: wrap;
  left: -7px;
  position: relative;
  margin-bottom: 25px;
}
.product-info-Product_Title_FH {
  display: inline-block;
  cursor: pointer;
  margin: 30px 10px;
  padding: 4px 12px;
  margin: 5px;
  padding: 12px 17px;
  border: 1px solid #7e818c;
  border-radius: 0px;
  /* color: #7e818c; */
}
.active {
  background-color: #000000;
  color: #ffffff;
}
.product-info-Product_Title_FH:hover {
  background-color: #000000;
  color: #ffffff;
}
.product-title-box {
  border-top: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background-color: #fafafa78;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 23px 0px;
}
/* .product-info ul{
    height: 40px;
} */
.product-title-box h3 {
  margin: 7px 0px;
  color: gray;
  font-size: 16px;
  font-weight: 400;
}
.product-title-box svg {
  margin: 7px 0px;
}
.size-box {
  display: flex;
  justify-content: space-between;
  margin-bottom: 7px;
  margin-top: 20px;
}
.size {
  font-weight: 400;
  color: #808080;
  letter-spacing: 1px;
  font-size: 12px;
}
.size-no {
  color: #7e7e7e;
}
.size-char {
  text-decoration: underline;
  font-weight: 600;
  font-size: 12px;
}
.single-color {
  width: 6%;
  margin-right: 20px;
}
.product-info-color-img {
  display: flex;
  width: 100%;
}
.activeColor {
  border-radius: 50%;
  border: 1px solid;
  padding: 3px;
}
.product-info-color-img img {
  cursor: pointer;
  width: 100%;
  /* padding: 5px; */
}
.active2{
  border: 1px solid black;
  border-radius: 50%;
  padding: 2px;
}
.sellingPrice {
  display: none;
}
.add-to-cart {
  display: flex;
  align-items: center;
  margin: 37px 0px;
}
.add-to-cart button {
  cursor: pointer;
  border: none;
  padding: 20px 0px;
  border-radius: 0px;
  background-color: black;
  color: #c2990e;
  width: 65%;
}
.add-to-cart button:hover {
  background-color: rgb(55, 53, 53);
}
.wish-list {
  margin: auto;
}
.wish-list a {
  color: #686868;
}
.wish-list a:hover {
  color: #000000;
}
/* .add-to-cart svg {
  width: 47px;
  margin: 8px;
} */
.product-info {
  display: flex;
}
.product-info-color {
  font-size: 12px;
  margin-bottom: 6px;
}
.product-info-color span {
  font-weight: 400;
  color: #808080;
  letter-spacing: 1px;
}
.first-img {
  width: 90%;
}
.product-attributes-box {
  margin-top: 23px;
}
.product-attributes {
  padding-left: 0;
  margin-bottom: 0;
  margin-top: 12px;
  display: flex;
  flex-flow: row wrap;
}
.product-attributes li {
  list-style: none;
  vertical-align: top;
  line-height: 15px;
  border-bottom: 1px solid #eaeaec;
  margin: 0 0 8px;
  padding: 0 0 7px;
  width: 45%;
}
.product-attributes li:nth-child(odd) {
  margin-right: 10%;
}
.product-attributes li span {
  line-height: 18px;
  display: inline-block;
  vertical-align: top;
}
/* .lable-box {
  width: 32%;
} */
.lable {
  float: left;
  width: 100%;
  text-align: left;
  font-size: 12px;
  color: #7e818c;
  position: relative;
}
.value {
  width: 100%;
  text-align: left;
  color: #282c3f;
  font-size: 15px;
  word-break: break-word;
  font-size: 15px;

  /* width: 100%;
  text-align: left;
  color: #282c3f;
  font-size: 15px;
  word-break: break-word; */
}
.best-product {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center; */
  padding: 0px 50px;
}
.best-product-img {
  width: 100% !important;
  display: inline-block;
}
.similarProduct {
  margin: 30px 27px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.checkPin {
  margin-top: 45px;
}
.checkPin h3 {
  color: #7e818c;
  font-size: 16px;
  font-weight: 400;
}
.location {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 53px;
  background-color: #f5f4f4;
  border-radius: 0px;
  margin-top: 20px;
}
.location svg {
  width: 23px;
  margin: -7px 5px;
  cursor: pointer;
}
.location span {
  cursor: pointer;
  background-color: black;
  padding: 15px 27px;
  color: #c2990e;
}
.location input {
  border: none;
  background-color: #f5f4f4;
  padding: 19px;
  border-radius: 4px;
}
.location input:focus {
  outline: none;
}
.best-product-box {
  cursor: pointer;
  width: 97%;
}
.best-product-box img {
  width: 100%;
}
.bestproduct-name,
.bestproduct-price {
  color: #7e7e7e;
}
.bestproduct-discount {
  color: #ff0000;
  margin-left: 6px;
}
.shipping-info-box {
  padding: 0px 50px;
}
.shipping {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 59px 0px;
  border-bottom: 1px solid #d5cece;
  border-top: 1px solid #d5cece;
  padding: 10px 0px;
  width: 100%;
}
.shipping svg {
  width: 45px;
}
.shipping svg:hover {
  fill: #686868;
}
.shipping-box,
.quality,
.exchange {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.trend {
  font-size: 12px;
  padding: 6px 0px;
  color: #bcbcbc;
  border-bottom: 1.5px solid;
  margin-bottom: 5px;
}
.slick-prev,
.slick-next {
  display: none !important;
}
.slick-dots li {
  display: none !important;
}

@media (max-width: 767px) {
  .upper-product-nav {
    padding: 0px 23px;
    padding-top: 15px;
  }
  .single-product-img {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .first-img {
    width: 100%;
  }
  .product-info-box {
    width: 100%;
  }
  .single-product {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 23px;
  }
  .nav_links {
    z-index: 22222;
    /* justify-content: center; */
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
  .product-info-description {
    width: 90vw;
  }
  .rating {
    width: 100%;
  }

  .product-info-price {
    width: 90vw;
  }
  .product-info-size-box {
    width: 100%;
  }
  /* .best-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    /* flex-direction: column; */
  /* /* padding: 23px; */
  /* } */
  .best-product-img {
    width: 50%;
    margin-bottom: 31px;
  }
  .best-product-img img {
    width: 97%;
  }
  .location .lable {
    margin: -6px -8px;
  }
  .location svg {
    margin: 0px 0px;
  }
  .location span {
    background-color: black;
    padding: 11px 23px;
    color: #a48b00;
  }
  .similarProduct {
    margin: 6px 28px;
  }
  .add-to-cart button {
    cursor: pointer;
    border: none;
    width: 95vw;
    padding: 17px 57px;
    border-radius: 10px;
    background-color: black;
    color: #ffffff;
    width: 35%;
  }
  .location {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
    background-color: #f5f4f4;
    border-radius: 0px;
    margin-top: 8px;
  }
  .second-slider {
    display: none;
  }
  .first-slider {
    width: 100%;
  }
  .wish-list {
    margin: auto;
    display: none;
  }
  .add-to-cart {
    display: inline-block;
    position: fixed;
    background-color: #f4f4f4;
    bottom: 0;
    width: 100%;
    left: 0;
    z-index: 1;
    margin: 0px 0px;
  }
  .sellingPrice {
    display: inline-block;
    top: 25px;
    position: relative;
    left: 25px;
  }
  .add-to-cart button {
    cursor: pointer;
    border: none;
    width: 95vw;
    padding: 19px 21px;
    border-radius: 0px;
    background-color: black;
    color: #ffffff;
    width: 47%;
    float: right;
    color: #c2990e;
    margin: 8px 18px;
  }
  .shipping {
    display: none;
  }
}
</style>
