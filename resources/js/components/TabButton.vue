<template>
    <button class="tab-button">{{buttonTitle}}</button>
</template>


<script>
export default {
    props:['buttonTitle'],

    data(){
        return{

        }
    }
}
</script>

<style>
     .tab-button{
         padding: 10px 5px;
         background-color: #eee;
         color: #000000;
         padding: 5px 10px;
         border-radius: 10px;
         transform:skewX(-20deg);
         flex-basis:40%;

     }
</style>
