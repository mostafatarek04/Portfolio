<template>
    <div v-if="open" class="background-shadow">
        <transition name="alert">
        <dialog open v-if="open">
            <img src="/images/vuejs.png">
            <h3>Welcome to my Portofolio</h3>
            <p>This portfolio is based on Vue JS (a light weight javascript framework) </p>
            <p>There is another version of this portfolio which is built using React JS</p>
            <p><a href="">Visit the React Version here!</a></p>
            <base-button type="button" title="Got it"></base-button>
        </dialog >
        </transition>
    </div>
</template>

<script>
import BaseButton from "./BaseButton";
export default {
    components:{BaseButton},
    props:['open'],
    name: "CustomDialouge",
    data(){
        return{

        }
    }
}
</script>

<style scoped lang="scss">
.alert-enter-from{
    opacity: 0;
   }
.alert-enter-active{
   transition: opacity .7s ease-in;
}
.alert-enter-to{
   opacity:1;

}
img{
    display: block;
    width:100px ;

    margin: 20px auto;
    object-fit: cover;
}
.background-shadow{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.7);
 dialog{
     background-color: #fff;
     position: absolute;
     top: 50%;
     left: 50%;
     width: 50%;
     padding: 3% 5%;
     transform: translate(-50%,-50%);
     border-radius: 10px;
 }
}
</style>
