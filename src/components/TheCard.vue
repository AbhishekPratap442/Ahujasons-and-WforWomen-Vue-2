<!-- <template>
    <div>
        <div>
            <img :src="item.image" />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.726"
                height="20.197"
                viewBox="0 0 22.726 20.197"
            >
                <defs />
                <path
                    class="a"
                    d="M-468.23,700.218a23.53,23.53,0,0,1-.766,2.3,18.755,18.755,0,0,1-3.569,5.035,45.564,45.564,0,0,1-6.19,5.486.91.91,0,0,1-1.246.074,40.1,40.1,0,0,1-8.231-7.878,12.188,12.188,0,0,1-2.234-4.383,6.106,6.106,0,0,1,6.7-7.361,6.261,6.261,0,0,1,4.073,1.988c.08.085.159.171.235.254.4-.35.756-.717,1.166-1.02a6.32,6.32,0,0,1,9.985,3.813,1.3,1.3,0,0,0,.077.216ZM-479.5,711.456c.119-.071.166-.093.207-.124a42.148,42.148,0,0,0,6.067-5.607,15.46,15.46,0,0,0,2.853-4.329,4.561,4.561,0,0,0,.176-3.291A4.478,4.478,0,0,0-474,695.17a4.5,4.5,0,0,0-4.556,2.43.951.951,0,0,1-.873.636.953.953,0,0,1-.871-.638,4.529,4.529,0,0,0-4.678-2.421,4.4,4.4,0,0,0-3.885,4.8,7.854,7.854,0,0,0,1.084,2.849,25.386,25.386,0,0,0,4.766,5.582C-481.873,709.458-480.666,710.447-479.5,711.456Z"
                    transform="translate(490.805 -693.271)"
                />
            </svg>
        </div>
        <h4>{{ item.name }}</h4>
        <p>Rs{{ item.price }}</p>
    </div>
</template>

<script>
    import axios from "axios"
    // import TheCard from "./TheCard.vue"
    // import { list } from "postcss"
    // import TheCard from "./TheCard.vue"
export default {
    name: 'TheCard',
   
       data() {
        return {
            list: []
        };
    },
    methods: {
        async apiCall() {
            let data = await axios.get("https://pim.wforwoman.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=20&sort_by=&sort_dir=desc&filter=");
            // data.data.result.products.map(()=>{
            // })
            this.list = data.data.result.products;
            console.log("eee", this.list);
            for (let i = 0; i < this.list.length; i++) {
                console.log(this.list[i].image);
            }
            //           .then( data => {
            //   console.log("list", this.list),
            //   console.log(data)
            //   this.list = data.data.result.products
            //   console.log("list ", this.list)
            //   }, 
            //   );
        }
    },
    mounted() {
        this.apiCall();
        console.log("API DATA");
    },

}



</script> -->