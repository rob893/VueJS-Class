<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName()">Reset Name</button>
        <button @click="resetFn">Reset Name Callback</button>
    </div>
</template>

<script>
import { eventBus } from '../main.js';

export default {
    props: 
    {
        name: String,
        resetFn: Function,
        userAge: Number
    },

    methods: {
        switchName()
        {
            return this.name.split("").reverse().join("");
        },

        resetName()
        {
            this.name = "Max";
            this.$emit('nameWasReset', this.name);
        },
    },

    created()
    {
        eventBus.$on('ageWasEdited', (data) => {
            this.userAge = data;
        });
    }
}

</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
