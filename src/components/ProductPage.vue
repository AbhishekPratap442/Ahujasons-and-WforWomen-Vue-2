<template>
  <div>
    <!-- <Main_header /> -->

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
      <div class="nav_links" :class="navbarTransform ? 'active' : ''">
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
        <div
          class="gray_div"
          v-on:click="navbarTransform = !navbarTransform"
        ></div>
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

    <div>
      <div v-if="loading" class="loader"></div>
      <div>{{ spinner }}</div>
      <div>
        <div class="container">
          <div id="proheading">
            <p>{{ productName }}</p>
            <span>{{ productCount }} Items</span>
            <span v-show="this.productCount < 1"> No result found </span>
          </div>
        </div>
      </div>

      <div class="filters" v-if="!navbarTransform">
        <div class="applied_filter">
          <ul
            v-for="(checkedValues, index) in checkedValues"
            :key="checkedValues.index"
          >
            <li>
              {{ checkedValues }}
              <svg
                v-on:click="closedFilter(index)"
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
            </li>
          </ul>
        </div>
        <div class="left_filter" v-on:click="filterSeen = !filterSeen">
          <h3 v-on:click="showfilter = !showfilter">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18.467"
              height="11.654"
              viewBox="0 0 18.467 11.654"
            >
              <g transform="translate(-1149.5 42.429)">
                <rect
                  width="8.992"
                  height="1.869"
                  transform="translate(1149.5 -40.656)"
                />
                <rect
                  width="3.932"
                  height="1.869"
                  transform="translate(1164.035 -40.656)"
                />
                <rect
                  width="8.992"
                  height="1.869"
                  transform="translate(1167.967 -32.406) rotate(-180)"
                />
                <rect
                  width="3.932"
                  height="1.869"
                  transform="translate(1153.432 -32.406) rotate(-180)"
                />
                <rect
                  width="1.74"
                  height="5.35"
                  transform="translate(1160.393 -42.429)"
                />
                <rect
                  width="1.74"
                  height="5.35"
                  transform="translate(1154.987 -36.124)"
                />
              </g>
            </svg>
            <span @click="toggleDetails" >{{
              detailsAreVisible ? "HIDE FILTER" : "SHOW FILTER"
            }}</span>
          </h3>
        </div>

        <div class="right_filter">
          <select
            name="shrot_by"
            id="shrot_by"
            @change="sortingdatabyprice()"
            v-model="shrot_by"
          >
            <option value="" selected>SORT BY</option>
            <option
              :value="sort.code"
              v-for="sort in productsSort"
              :key="sort.id"
            >
              {{ sort.label }}
            </option>
          </select>
        </div>
      </div>

      <div class="products_img">
        <div class="side_filter" v-if="filterSeen">
          <div>
            <div
              class="btn"
              :class="[
                this.productFilterCetegory.length == 0
                  ? 'removefilterbox'
                  : 'block',
              ]"
            >
              <button @click="removeFilter">Remove Filter</button>
            </div>
            <div
              class="filter_type"
              v-for="filters in productFilter"
              :key="filters.id"
            >
              <!-- {{filters.isVisible}} -->
              <div
                v-on:click="filters.isVisible = !filters.isVisible"
                class="filter_type_option"
              >
                <!-- {{filters.isVisible}} -->
                <span>{{ filters.filter_lable }}</span>
                <span>
                  <svg
                    v-show="!filters.isVisible"
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
                    v-show="filters.isVisible"
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

              <div class="options_box">
                <div class="filter_type_sub_option" v-show="filters.isVisible">
                  <ul v-for="option in filters.options" :key="option.index">
                    <label class="checkbox">
                      <input
                        v-model="option.value_key"
                        type="checkbox"
                        @click="
                          sortingdatabyfilter($event, option.value, option.code)
                        "
                      />
                      <span
                        class="checkmark"
                        :class="getFilterStatus(option) ? 'checkmarkbg' : ''"
                      ></span>
                      <span class="labels">
                        {{ option.value }} ({{ option.total }})</span
                      >
                    </label>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="api_products" :class="filterSeen ? 'api_products_second ' : ''" :disabled="loading">
          <div
            v-for="item in list"
            :key="item.id_product"
            class="api_products_img"
          >
            <div class="productImg">
              <img :src="item.image" />
              <div class="view-product">
                <router-link :to="`/product/${item.url_key}`"
                  >VIEW PRODUCT</router-link
                >
              </div>
              <div class="productsSpecs">
                <h4>{{ item.name }}</h4>
                <span>Rs{{ item.selling_price }}</span>
                <span
                  class="price"
                  :class="item.discount == 0 ? 'discount' : ''"
                  ><s>Rs{{ item.price }}</s></span
                >
                <span
                  id="discount"
                  :class="item.discount == 0 ? 'discount' : ''"
                  >-{{ item.discount }}%</span
                >
                <span id="stock">{{ item.stock_status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ---------------------------page------------------------ -->

      <div class="pagesnation">
        <div class="page" v-if="productCount / 20 > 1">
          <p>
            Page {{ pageofpagination }} of
            {{ Math.ceil(productCount / 20) }}
          </p>
        </div>

        <div class="Pagenation_count">
          <ul class="no_pages" v-if="productCount / 20 > 1">
            <li
              v-for="page in paginationLoopMethod()"
              :key="page"
              @click="pagination(page)"
            >
              {{ page }}
            </li>

            <li v-if="productCount / 20 > 1">.....</li>

            <li
              v-if="productCount / 20 > 1"
              @click="pagination(Math.ceil(productCount / 20))"
            >
              {{ Math.ceil(productCount / 20) }}
              <!-- v-bind="page" -->
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import Main_header from "./Main_header.vue";

export default {
  name: "ProductsPage",
  components: {
    // Main_header,
  },
  props: {
    // productFilter: Array,
  },
  data() {
    return {
      list: [],
      productsSort: [],
      productCount: "",
      productName: "",
      selected: "selected",
      navbarTransform: false,
      detailsAreVisible: false,
      filterSeen: false,
      showfilter: false,
      isVisible: false,
      closeFilter: false,
      shrot_by: this.$route.query.sort_by || "",
      value: "",
      filtersoptions: this.$route.query.filter || "",
      checkparam: "",
      pageofpagination: 1,
      productFilterCetegory: [],
      productFilter: [],
      loading: false,
      spinner: "",
      checkedValues: [],
    };
  },
  methods: {
    paginationLoopMethod() {
      if (this.pageofpagination < Math.ceil(this.productCount / 20)) {
        // console.log('this. pages 1' ,  this.pageofpagination)
        return this.getNumbers(
          this.pageofpagination,
          this.pageofpagination + 6
        );
      } else if (this.pageofpagination >= Math.ceil(this.productCount / 20)) {
        // console.log('this. pages else if' ,  this.pageofpagination)
        return this.getNumbers(
          this.pageofpagination - 6,
          this.pageofpagination
        );
      }
    },

    getNumbers(start, stop) {
      const newArrayObtaine = new Array(stop - start)
        .fill(start)
        .map((n, i) => n + i);
      // console.log(" newArrayObtaine",  newArrayObtaine)
      return newArrayObtaine;
    },

    getFilterStatus(option) {
      // console.log("Hi", option, option.code + '-' + option.value,)
      // console.log('this is gerFilterStatus' ,  this.productFilterCetegory.includes(
      //   option.code + '-' + option.value,
      // ))
      return this.productFilterCetegory.includes(
        option.code + "-" + option.value
      );
    },
    async productInfoData() {
      this.$router
        .push({
          query: {
            // service: "category",
            // store: 1,
            // url_key: "top-wear-kurtas",
            page: this.pageofpagination,
            count: 20,
            sort_by: this.shrot_by,
            // sort_dir: "desc",
            filter: this.filtersoptions,
          },
        })
        .catch((error) => {
          if (
            error.name !== "NavigationDuplicated" &&
            !error.message.includes(
              "Avoided redundant navigation to current location"
            )
          ) {
            console.log(error);
          }
        });

      console.log("before");
      this.loading = true;
      let data = await axios.get(
        `  https://pim.wforwoman.com/pim/pimresponse.php`,
        {
          params: {
            service: "category",
            store: 1,
            url_key: "top-wear-kurtas",
            page: this.pageofpagination,
            count: 20,
            sort_by: this.shrot_by,
            sort_dir: "desc",
            filter: this.filtersoptions,
          },
        }
      );
      console.log("after");

      this.loading = false;
      this.list = data.data.result.products;
      this.productsSort = data.data.result.sort;
      this.productCount = data.data.result.count;
      this.productName = data.data.result.name;
      if (this.productFilter.length == 0) {
        for (let productFilterInfo of data.data.result.filters) {
          // console.log('productFilterInfo' , productFilterInfo);
          this.productFilter.push({ ...productFilterInfo, isVisible: false });
        }
      }
      console.log("list product", this.list);
    },

    sortingdatabyfilter(event, value, code) {
      console.log("event=", event, "value=", value, "code=", code);

      if (
        !this.productFilterCetegory.includes(
          `${code}-${value}` || !this.checkedValues.includes(`${value}`)
        )
      ) {
        this.productFilterCetegory.push(`${code}-${value}`);
        this.checkedValues.push(`${value}`);
        this.filtersoptions = this.productFilterCetegory.toString();
      } else {
        let checkingIndex = this.productFilterCetegory.indexOf(
          `${code}-${value}`
        );
        let checkedValuesIndex = this.checkedValues.indexOf(`${value}`);
        this.productFilterCetegory.splice(checkingIndex, 1);
        this.checkedValues.splice(checkedValuesIndex, 1);
        this.filtersoptions = this.productFilterCetegory.toString();
        this.filtersoptions = this.productFilterCetegory.toString();
      }

      this.productInfoData();
    },

    closedFilter(index) {
      // console.log("this function is called", this.value);
      // console.log("AAA", this.checkedValues);
      if (
        this.checkedValues.includes(index) ==
        this.productFilterCetegory.includes(index)
      ) {
        this.checkedValues.splice(index, 1);
        this.productFilterCetegory.splice(index, 1);
        this.filtersoptions = this.productFilterCetegory.toString();
      }
      this.productInfoData();
    },

    removeFilter() {
      this.productFilterCetegory = [];
      this.shrot_by = "";
      this.checkedValues = [];
      this.filtersoptions = this.productFilterCetegory.toString();
      this.productInfoData();
    },

    sortingdatabyprice(shrot_by) {
      this.checkparam = shrot_by;
      // console.log("this is sort filter", this.shrot_by);
      this.productInfoData();
    },

    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    pagination(paginationNumbers) {
      this.pageofpagination = paginationNumbers;
      // console.log(this.pageofpagination);
      this.productInfoData();
    },
    // viewproduct(id_product) {
    //   // console.log("thisn is a product id", id_product);
    //   // this.$router.push("/product/:item.id_product" ,id_product);
    // },
  },

  mounted() {
    this.productInfoData();

    if (this.filtersoptions) {
      let arr = this.filtersoptions?.split(/-|,/);
      arr.forEach((element, index) => {
        if (index % 2 == 0) {
          this.sortingdatabyfilter(0,arr[index + 1], element);
          // this.productFilterCetegory.splice();
          // this.checkedValues.splice();
        }
        console.log("this is arr" , arr ,this.sortingdatabyfilter);
      });

      this.productInfoData();
    }
    if (this.shrot_by) {
      let arr1 = this.shrot_by?.split(',');
      arr1.forEach((element, index) => {
        if (index) {
          this.sortingdatabyprice(0,arr1[index], element);
          // this.productFilterCetegory.splice();
          // this.checkedValues.splice();
        }
        console.log("this is arr" , arr1 ,this.sortingdatabyprice);
      });

      this.productInfoData();
    }

    
  },
};
</script>
<style>
/* ---------------------------Main Header------------------------- */

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
.view-product a {
  color: #ffffff;
  text-decoration: none;
}
.view-product {
  position: relative;
  left: 0vw;
  bottom: 4vw;
  background-color: #631818;
  display: flex;
  align-items: baseline;
  justify-content: center;
  color: #ffffff;
  padding: 7px 0px;
  transform: translateY(3vh);
  cursor: pointer;
  transition: all 0.3s ease-in;
}
.view-product:hover {
  transform: translateY(0vh);
}
.price {
  font-size: 12px;
  color: #e4e4e4;
  margin-left: 12px;
}
.filter_display {
  display: block;
  transform: translateX(0vw);
}
@media only screen and (max-width: 1024px) and (min-width: 768px) {
  .left1 ul li {
    list-style: none;
    max-width: 43%;
    padding: 8px 7px;
  }

  .left1 ul li a {
    font-family: "Jost* 600 Semi";
    font-weight: bold;
    text-decoration: none;
    color: #303030;
    font-weight: 300;
    font-size: 9px;
  }
  .right1 ul li a {
    font-family: "Jost* 600 Semi";
    font-weight: bold;
    text-decoration: none;
    color: #303030;
    font-size: 9px;
  }
  svg {
    width: 21px;
    margin: 0px 8px;
    cursor: pointer;
  }
}

@media (max-width: 767px) {
  .header {
    justify-content: center;
  }
  .left1 ul li {
    list-style: none;
    padding: 0px 0px;
  }

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

.loader {
  position: absolute;

  left: 48vw;
  top: 35vh;
  border: 6px solid #f3f3f3;
  border-top: 6px solid #720c03;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.hide {
  display: none;
}

body {
  box-sizing: border-box;
  margin: 0 auto;
}

.filters {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px;
}

.left_filter {
  border: 1px solid;
  padding: 12px 12px;
  cursor: pointer;
}

.left_filter h3 {
  font-size: 12px;
  font-weight: 100;
}

.left_filter h3 svg {
  width: 14px;
  padding: 0px 9px !important;
  margin: 0px 0px !important;
}

.right_filter {
  border: 1px solid;
}

.right_filter select {
  border: none;
  padding: 12px 15px;
  cursor: pointer;
  width: 226px;
  height: 41px;
  font-weight: 100;
  font-size: 13px;
  font-family: "Jost";
}

.right_filter select option {
  padding: 12px 12px;
}

/* Customize the label (the container) */

.checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.checkbox .label {
  font-size: 12px;
  margin: 0 10px;
}
/* .uncheckmark {
  width: 12px;
  height: 12px;
  border: 1px solid;
  display: inline-block;
  border-radius: 0px;
  background: #fcfcfc
    url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
    center/1250% no-repeat;
} */
.checkbox .checkmark {
  width: 12px;
  height: 12px;
  border: 1px solid;
  display: inline-block;
  border-radius: 0px;
  margin-right: 12px;
}
.checkmark.checkmarkbg {
  background: #4c0b36
    url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
    center/80% no-repeat;
  /* background-size: contain; */
}
.checkbox input:checked + .checkmark {
  background-size: 60%;
}
.removefilterbox {
  display: none;
}
.checkmarkbg {
  background: #4c0b36
    url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png)
    center/1250% no-repeat;
}
.checkbox input {
  display: none;
}

.options_box {
  border-bottom: 1px solid;
  margin-bottom: 8px;
}

.applied_filter {
  display: flex;
  position: absolute;
  left: 20%;
  max-width: 57%;
  flex-wrap: wrap;
}

.applied_filter ul {
  border: 1px solid;
  border-radius: 20px;
  margin: 7px 12px;
}

.applied_filter ul li {
  list-style: none;
  font-weight: 900;
  font-size: 9px;
  display: flex;
  padding: 1px 12px;
  align-items: center;
}
.applied_filter ul li svg {
  margin: 0px 7px;
}
/* -------------------------------------Products -------------------- */
.products_img {
  display: flex;
  padding: 26px;
  box-shadow: 0px 5px 0px -4px #e4e4e4;
}

.side_filter {
  padding-right: 22px;
  width: 18%;
}

.filter_type {
  font-size: 14px;
  font-weight: 100;
}

.filter_type_option {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1px;
}

.filter_type_option span {
  margin: 9px 0px;
}

.filter_type_sub_option ul {
  max-height: 250px;
  overflow: auto;
  display: flex;
  align-items: center;
  /* padding: 0px 4px; */
  list-style: none;
}

.filter_type_sub_option ul li {
  padding-left: 12px;
  /* width: 300px; height: 200px; overflow: auto */
}

svg {
  width: 15px;
}

#checkbox {
  color: red;
}

.api_products {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.api_products_second{
 width: 80%;
}
.api_products_img {
  width: 22%;
}

.productImg img {
  width: 100%;
}

.productsSpecs {
  margin-bottom: 29px;
  margin-top: -25px;
}

.productImg h4 {
  font-size: 14px;
  font-weight: 100;
}

.productImg span {
  font-size: 14px;
  color: #4c0b36;
}

#discount {
  padding: 0px 12px;
  color: red;
}
.discount {
  display: none;
}

#stock {
  font-size: 14px;
  color: green;
  margin-left: 6px;
}

/* .btn{
    position: relative;
    left: 18vw;
    top: 12vh;
    display: inline-block;
} */
.btn button {
  font-size: 12px;
  font-weight: 100;
  border: 1px solid;
  padding: 12px 12px;
  cursor: pointer;
  background-color: #ffffff;
}

/* -------------------------page------------------------------  */
.page {
  margin-top: 15px;
  margin-left: 23px;
  margin-right: 0px;
  position: absolute;
}

.no_pages {
  display: flex;
  list-style: none;
  position: absolute;
  left: 38vw;
}

.no_pages li {
  cursor: pointer;
  padding: 9px 15px;
  margin: 5px 0px;
}

/* .active, .no_pages li:hover {
  background-color: #666;
  color: white;
} */
.no_pages li .active {
  background-color: #4c0b36;
  color: #ffffff;
}

.no_pages li:hover {
  background-color: #4c0b36;
  color: #ffffff;
}

.no_of_pages {
  display: flex;
}

.Pagenation_count {
  display: flex;
  position: absolute;
}

.pagesnation {
  margin: 35px 0px;
  display: flex;
  position: relative;
}

.midPageCount {
  position: absolute;
  cursor: pointer;
  left: 60vw;
  list-style: none;
}

.lastPageCount {
  position: absolute;
  cursor: pointer;
  left: 63vw;
  list-style: none;
}

.no_pages span {
  font-family: "Jost";
  font-size: 18px;
  margin: 8px;
  padding: 9px;
}

.no_pages span:last-child {
  border: 1px solid #e4e4e4;
}

.no_pages span:hover {
  cursor: pointer;
  color: white;
  background-color: #4c0b36;
}

@media (max-width: 767px) {
  .btn {
    position: absolute;
    right: 26px;
  }

  .api_products_img {
    width: 49%;
  }
  .applied_filter {
    display: none;
  }
  .productsSpecs {
    margin-bottom: 29px;
    margin-top: -8px;
  }

  .filters {
    display: flex;
    padding: 0px;
    width: 100%;
    z-index: 22;
    position: fixed;
    bottom: 0;
    background-color: white;
    justify-content: space-evenly;
  }

  .left_filter {
    width: 48%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .right_filter {
    width: 52%;
  }

  .right_filter select {
    padding: 13px 7px;
  }

  .options_box {
    border-bottom: 1px solid;
    margin-bottom: 8px;
  }

  .side_filter {
    width: 90%;
    position: fixed;
    background: #ffffff;
    border: none;
    top: 0vh;
    z-index: 1;
    left: 0px;
    padding: 26px;
    height: 98%;
    overflow: auto;
  }

  .products_img {
    padding: 4px;
  }

  #shrot_by {
    width: 93%;
  }
  .nav_links {
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
  .navlinktransition {
    transform: translateX(-100vw);
    transition: all 0.5s ease-in-out;
  }

  /* -----------------------page------------------ */
  .page {
    font-size: 12px;
    margin-top: 5px;
    margin-left: 23px;
    margin-right: 0px;
  }

  .no_pages {
    margin: 0px 1px;
    font-size: 12px;
  }

  .no_pages li {
    cursor: pointer;
    padding: 0px 5px;
  }

  .no_pages span {
    font-family: "Jost";
    font-size: 14px;
    margin: 2px;
    padding: 8px;
  }

  .loader {
    position: absolute;

    left: 42vw;
    top: 35vh;
    border: 6px solid #f3f3f3;
    border-top: 6px solid #720c03;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: spin 2s linear infinite;
  }

  .side_filter {
    width: 90%;
    position: fixed;
    background: #ffffff;
    border: none;
    top: 0vh;
    z-index: 1;
    left: 0px;
    padding: 26px;
    height: 98%;
    overflow: auto;
  }
  .view-product {
    position: relative;
    left: 2px;
    bottom: 45px;
    background-color: #631818;
    display: flex;
    align-items: baseline;
    justify-content: center;
    color: #ffffff;
    padding: 7px 0px;
    /* transform: translateY(3vh); */
    cursor: pointer;
    /* transition: all 0.3s ease-in; */
  }
}
</style>
