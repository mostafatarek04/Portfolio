<template>
    <div class="main-tab-container">
        <slot name="btn1"></slot>
        <slot name="btn2"></slot>
    </div>
</template>

<script>
export default {
    data(){

    }
}
</script>


<style scoped>
.main-tab-container{
    display: flex;
    flex-direction: row;
    gap: 0px;
    width: 100%;
    align-items: center;
    justify-content: center;
    /*background-color: #777;*/
    padding: 10px;
}
</style>
