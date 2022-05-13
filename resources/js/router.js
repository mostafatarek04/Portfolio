import {createRouter,createWebHistory} from "vue-router";
import contactForm from "./components/ContactForm";
import homePage from "./Pages/HomePage";
import myPortfolio from "./Pages/MyPortfolio";

const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component:homePage},
        {path:'/aboutus', component:myPortfolio}
    ]
});

export default router;


