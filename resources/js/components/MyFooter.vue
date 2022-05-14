<template>
<footer>
    <div class="x-col-1 x-col">
        <footer-element title="Contact us "></footer-element>
        <footer-element title="About us "></footer-element>
        <footer-element title="Home"></footer-element>
        <footer-element title="Portfolio"></footer-element>
    </div>
    <div class="x-col-2 x-col"></div>
    <div class="x-col-3 x-col"></div>
</footer>
</template>

<script>
import footerElement from "./FooterElement";
export default {
    name: "MyFooter",
    components:{footerElement}
}
</script>

<style scoped lang="scss">
    footer{
        min-height:400px;
        background-color:#383838;
        display:flex;
        justify-content:space-around;
        align-items:center;
       .x-col{
            width: 30%;

        }

    }

</style>
