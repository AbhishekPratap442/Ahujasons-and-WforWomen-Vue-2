<template>
    <div class="pagenotfound">
        <div>          
                  <h1>Page not found</h1>
                <h3><router-link to='/'>Home</router-link></h3>
     </div>

    </div>
</template>
<script>
export default {
    name:"ErrorPage"
}
</script>
<style scoped>
.pagenotfound{
    display: flex;
    justify-content: center;
    justify-content: center;
    align-content: center;
    /* flex-direction: column; */
    text-transform: uppercase;
        margin: 102px 0px;
}

/* h1 {
    text-transform: uppercase;
    left: 40%;
    position: relative;

    top: 50%;
    margin: 36px 0px;
    padding: 59px 0px;
}*/
 h3{
      margin: 6px 98px
} 
</style>

