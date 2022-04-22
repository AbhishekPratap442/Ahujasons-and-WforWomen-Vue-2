<template>
<div class="page_container">
      <div class="pagesnation">
        <div class="page">
          <p>Page 1 of 6</p>
        </div>
        <div class="no_pages">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>Next &#62; </span>
        </div>
      </div>
 </div>

    
</template>
<script>
export default{
name:'Pages'



}


</script>


<style scoped>

.page{
      left: 3vw;
    position: absolute;
}
.no_pages{
      position: absolute;
    left: 40vw;
}
.pagesnation {
      margin: 35px 0px;
    display: flex;
    position: relative;
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

@media (max-width: 767px){
  .page {
    margin-top: 0px;
    margin-left: 2px;
    margin-right: 0px;
}
.no_pages {
    margin: 0px 1px

}
.no_pages span {
    font-family: "Jost";
    font-size: 14px;
    margin: 2px;
    padding: 8px;
}


}

</style>