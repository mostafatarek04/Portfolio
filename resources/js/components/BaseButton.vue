<template>
   <button :type="type">{{title}}</button>
</template>

<script>
export default {
    name: "BaseButton",
    props:['title','type'],

}
</script>

<style scoped lang="scss">
button{
    border-radius: 10px;
    padding: 5px 10px;
    display: block;
    width: 40%;
    margin: auto;
}

</style>
