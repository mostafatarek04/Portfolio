<template>
    <tab-container>
    <template #btn1>
        <tab-button @click="appDevOn" buttonTitle="App Development"></tab-button>
    </template>
    <template #btn2>
        <tab-button @click="webDevOn" buttonTitle="Web Development"></tab-button>
    </template>
</tab-container>
    <feature-content>
        <p v-if="appShow">Hello iam an app Developer</p>
        <p v-if="webShow">Hello iam a web developer </p>
    </feature-content>


</template>


<script>
import TabButton from "./components/TabButton";
import TabContainer from "./components/TabContainer"
import ContactForm from "./components/ContactForm";
import FeatureContent from "./components/FeatureContent";

export default {
    components: {TabButton,TabContainer,ContactForm,FeatureContent},
    data (){
         return{
             appShow:true,
             webShow:false
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
        }
    }
}
</script>


<style scoped>

.temp-home{
    width: 50%;
    margin: auto;
}
h2{
    color: #0c4128;
}
</style>
