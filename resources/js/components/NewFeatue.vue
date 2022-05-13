<template>
 <div class="feature-main">
     <div class="feature-main-content">
         <h3>{{featTitle}}</h3>
         <p>{{featText}}</p>
     </div>
     <div class="feature-img-div" :class="floatDir">
         <img class="feature-img" :src="imgPath" alt="">
     </div>

 </div>
</template>

<script>
export default {
    name: "NewFeatue",
    props:['imgPath','floatDir','featTitle','featText']
}
</script>

<style scoped lang="scss">
  .feature-main{
     // background-color: #fff;
      border-radius: 10px;
      margin: 20px 0;
      padding: 20px 10px;
      display: flex;
      border: 2px solid #000;
      min-height: 200px;
      gap: 10%;
      .feature-img-div{
          flex-basis: 200px;
          align-self: stretch;
          img{
              width: 100%;
              object-fit: cover;
          }

      }
      .feature-main-content{
          flex-basis: 60%;
          align-self: stretch;
          text-align: center;
          padding: 30px 0 30px;
      }
  }
</style>
