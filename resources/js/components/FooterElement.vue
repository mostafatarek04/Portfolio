<template>
    <div class="footer-entry">
        <p>{{title}}</p>
    </div>
</template>


<script>
export default {
    name:'FooterElement',
    props:['title']

}

</script>


<style scoped lang="scss">
   .footer-entry{
       padding: 5px 2px;
       border-bottom: 1px solid #fff;
       color: #fff;
       p{
           font-size: 21px;
           text-align: center;

           &::after{
               content: " >";
               font-size: 21px;
           }
       }

   }
</style>
