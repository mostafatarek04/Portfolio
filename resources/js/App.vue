<template>

    <router-view></router-view>
    <custom-dialouge :open="showDialoge" @click="closeDialoge"></custom-dialouge>




</template>


<script>
import TabButton from "./components/TabButton";
import TabContainer from "./components/TabContainer"
import ContactForm from "./components/ContactForm";
import FeatureContent from "./components/FeatureContent";
import CustomDialouge from "./components/CustomDialouge";

import homePage from "./Pages/HomePage";

export default {
    components: {TabButton,TabContainer,ContactForm,FeatureContent,CustomDialouge},
    data (){
         return{
             appShow:false,
             webShow:true,
             showDialoge:true

         }
    },
    methods:{
        appDevOn(){
            this.webShow = false;
            this.appShow = true;
        },
        webDevOn(){
            this.appShow = false;
            this.webShow = true;
        },
        closeDialoge(){
            this.showDialoge = false
        }
    }
}
</script>


<style scoped lang="scss">

.temp-home{
    width: 50%;
    margin: auto;
}
h2{
    color: #0c4128;
}
.float-l{
    float: left;
}

.photo-album {
    display: flex;
    flex-wrap: wrap;
    width: 35%;
    gap:10px;
    float: right;

    img{
        width: 40%;
        object-fit: cover;
    }

    .img-single{
        width:100%;
        object-fit: cover;

    }


}
.container-M-child{
    padding: 20px;
    min-height: 400px;
}
.even{
    background-color: #ccc;
}
.container-M-child::after{
    content: "";
    clear: both;
    display: table;

}

.animation-block{
    width: 35%;
    float: right;
    background-color: #fff;
    display: flex;
    justify-content: center;
    gap: 30px;
    div{
        width: 15px;
        margin: 10px 5px;
        height: 150px;
        border-radius: 20px;
        background-color: black;
        display: inline-block;
    }
}

</style>
