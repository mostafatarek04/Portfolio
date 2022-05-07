<template>
   <FormGroup>
       <template #label><label for="name">Full name</label></template>
       <template #input><input type="text" name="name" id="name" :value="user_name" @input="updateName"></template>
       <template v-if="!inputValid" #errormsg><p>Please enter something Valid</p></template>
   </FormGroup>
</template>


<script>
import FormGroup from "./FormGroup";
export default {
    components:{FormGroup},
    data(){
        return{
         user_name:""
        }
    },
    computed:{
        inputValid(){
            if (this.user_name.trim() === "") {
                return false
            }
                else{
                    return true
                }
            }
        },
    methods:{
        updateName(event){
            this.user_name = event.target.value
        }
    }

}
</script>

<style>

</style>
