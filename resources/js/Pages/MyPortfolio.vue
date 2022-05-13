<template>
    <header>
        <div class="portfolio-header">
            <div class="portfolio-header-shadow">
                <div class="portfolio-header-shadow-content">
                    <h3>Work Portfolio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sapiente.</p>
                </div>
            </div>
        </div>
    </header>

    <main>
        <div class="portfolio-main">
            <div class="portfolio-title"><hr class="title-hr"><span>Latest Work</span><hr class="title-hr"></div>
             <div class="portfolio-content">
                 <portfolio-comp
                     class="flex-child"
                     img-path="/images/vuejs.png"
                     title="VueJS Web APP"
                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, impedit?"></portfolio-comp>

                 <portfolio-comp
                     class="flex-child"
                     img-path="/images/physics.png"
                     title="ReactJS Web APP"
                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, impedit?"></portfolio-comp>

                 <portfolio-comp
                     class="flex-child"
                     img-path="/images/nodejs.png"
                     title="NodeJS BackEnd"
                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, impedit?"></portfolio-comp>

                 <portfolio-comp
                     class="flex-child"
                     img-path="/images/vuejs.png"
                     title="VueJS Web APP"
                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, impedit?"></portfolio-comp>
                 <portfolio-comp
                     class="flex-child"
                     img-path="/images/vuejs.png"
                     title="VueJS Web APP"
                     paragraph="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, impedit?"></portfolio-comp>


             </div>
        </div>

    </main>
</template>

<script>
import portfolioComp from "../components/PortfolioComp";
export default {
    name: "MyPortfolio",
    components:{portfolioComp}
}
</script>

<style scoped lang="scss">
.portfolio-header{
    background-image: url("/images/portofolioImg.png");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    position: relative;

    &-shadow{
        position: absolute;
        background-color: rgba(0,0,0,.7);
        color: white;
        top:0;
        left: 0;
        width: 40%;
        height: 100%;
        &-content{
            background-color: transparent;
            opacity: 1;
            padding: 20px 20px 0;
            position: absolute;
            top: 25%;
            h3{
                text-align: center;
            }

        }
    }
}

.portfolio-title{
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    .title-hr{
        border-top: 1px solid #000;
        flex-grow: 1;
    }
    span{
        font-size: 20px;
    }
}
.portfolio-content{
    display: flex;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: wrap;
    padding: 20px 0;
    .flex-child{
       width: calc(25% - 20px - 90px);
        min-height: 300px;
        border: 1px solid #000;
        padding: 10px;
    }

}

</style>
