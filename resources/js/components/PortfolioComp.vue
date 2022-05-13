<template>
    <div class="portfolio-comp-main">
        <div class="img-div"><img :src="imgPath" alt=""></div>
        <div class="title-div"><h3>{{title}}</h3></div>
        <transition name="content" >
            <div v-if="contentVisible" class="content-div"><p>{{paragraph}}</p></div>
        </transition>
        <transition name="button" mode="out-in">
            <button class="tog-btn" v-if="!contentVisible"    @click="showParagraph">Show more</button>
            <button class="tog-btn" v-else-if="contentVisible" @click="hideParagraph">Show less</button>
        </transition>

    </div>
</template>

<script>
export default {
    name: "PortfolioComp",
    props:['imgPath','title','paragraph'],
    data(){
        return{
            contentVisible:false,
        }
    },
    methods:{
        showParagraph(){
            this.contentVisible = true;

        },
        hideParagraph(){
            this.contentVisible = false;
        }
    }
}
</script>

<style scoped lang="scss">
.portfolio-comp-main{
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    min-height: 300px;
    .img-div{
        flex-basis: 150px;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
            object-fit: contain;

        }

    }
    .title-div{
        margin-top: 20px;
    }
    .content-div{
        margin-top: 20px;
    }
    .tog-btn{
        margin-top: auto;
    }


}
.content-enter-from{opacity: 0}
.content-enter-active{
    transition: all 1s ease-in;
}
.content-enter-to{
    opacity: 1;
}

.button-enter-from{
    transform: translateY(20px);
    opacity: 0;
}

.button-leave-to{
    transform: translateY(20px);
    opacity: 0;
}
.button-enter-active{
    transition: all 1s ease-in;
}
.button-leave-active{
    transition: all 1s ease-out;
}
.button-enter-to,
.button-leave-from{
    transform: translateY(0);
    opacity: 1;
}


</style>
