<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="server == null">Select Server</p>
        <div v-else>
            <p>Server: {{ server.id }}</p>
            <p>Status: {{ server.status }}</p>
            <button @click="changeStatus">Change Status</button>
        </div>
    </div>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
    data()
    {
        return {
            server: null
        };
    },

    methods:
    {
        changeStatus()
        {
            this.server.status = 'Normal';
        }
    },

    created()
    {
        eventBus.$on('clickedOnServer', (server) => {
            this.server = server;
        });
    }
}

</script>

<style scoped>

div
{
    border: 1px solid red;
}

</style>

