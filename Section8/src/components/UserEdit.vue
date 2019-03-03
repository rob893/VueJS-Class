<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>Current Age: {{ userAge }}</p>
        <button @click="editAge">Edit Age</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default 
{
    props: ['userAge'],

    methods: 
    {
        editAge()
        {
            this.userAge = 30;
            //this.$emit('ageWasEdited', this.userAge);
            //eventBus.$emit('ageWasEdited', this.userAge);
            eventBus.changeAge(this.userAge);
        }
    }
}

</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
