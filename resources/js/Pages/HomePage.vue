<template>
    <header>
        <div class="home-header">
            <div class="home-header-shadow">
                <div class="home-header-shadow-content">
                    <h3>App & Web Developer</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sapiente.</p>
                </div>
            </div>
        </div>
    </header>
    <main>

        <div class="features-div">
            <div class="tab-container">
                <base-button @click="activateWebTab"  :class="{active :webTabActive}" type="button" title="Web Development"></base-button>
                <base-button @click="activateAppTab" :class="{active : appTabActive}" type="button" title="App development"></base-button>
            </div>
            <transition mode="out-in">
                <div v-if="webTabActive">
                    <new-featue
                                feat-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, maiores!"
                                feat-title="Latest Web Technologies"
                                img-path="/images/nodejs.png"

                    ></new-featue>
                    <new-featue
                                feat-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, maiores!"
                                feat-title="Responsive  Web Design"
                                img-path="/images/responsive2.jpeg"

                    ></new-featue>
                    <new-featue
                                feat-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, maiores!"
                                feat-title="Animated Web Design"
                                img-path="/images/nodejs.png"

                    ></new-featue>
                </div>
                <div v-else-if="appTabActive">
                    <new-featue
                        feat-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, maiores!"
                        feat-title="ios App Development"
                        img-path="/images/swift.png">

                    </new-featue>
                    <new-featue
                        feat-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, maiores!"
                        feat-title="Android App Development"
                        img-path="/images/android.png">

                    </new-featue>
                    <new-featue
                        feat-text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, maiores!"
                        feat-title="Third party Apps (React native flutter)"
                        img-path="/images/swift.png">

                    </new-featue>
                </div>
            </transition>

        </div>
    </main>
</template>


<script>
import baseButton from "../components/BaseButton";
import newFeatue from "../components/NewFeatue";
export default {
    components: {baseButton,newFeatue},
    data(){
        return{
            webTabActive:true,
            appTabActive:false,

        }
    },
    methods:{
        activateWebTab(){
            this.webTabActive = true
            this.appTabActive = false

        },
        activateAppTab(){
            this.appTabActive = true
            this.webTabActive = false

        }
    }
}

</script>


<style scoped lang="scss">
.v-enter-from,
.v-leave-to{
    opacity: 0;
}

.v-enter-active,
.v-leave-active{
   transition: all 1s ease-in;
}

.v-enter-to,
.v-leave-from{
opacity: 1;
}
.home-header{
    background-image: url("/images/home-back.jpg");
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
.tab-container{
    display: flex;
    padding: 10px 0;
    justify-content: center;
    gap:10px;
    button{
        margin: 0 !important;
    }
}
.active{
    background-color: #999;
    color: #0f5132;

}
</style>
