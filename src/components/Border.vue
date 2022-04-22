<template>
    <div>
         <div id="border">
                    <div class="right_border"></div>
                    <div class="mid_border">
                    <img src="../assets/Group_195.png" alt="" />
                    </div>
                    <div class="left_border"></div>
  </div>

    </div>
</template>
<script>

export default {
name:'Border_mark'
}


</script>


<style scoped>
#border {
        margin-top: 62px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.right_border {
    width: 550px;
    height: 6px;
    border-top: 1px solid #eae4cf;
    border-bottom: 1px solid #eae4cf;
}

.mid_border {
  margin: 0px 19px;
}
.mid_border img {
  width: 72px;
}
.left_border {
 width: 550px;
    height: 6px;
    border-top: 1px solid #eae4cf;
    border-bottom: 1px solid #eae4cf;
}



</style>