<template>
    <div @click="loadServerDetails()">
        Server # {{ server.id }}
    </div>
</template>

<script>
import { eventBus } from '../../main.js';

export default {
    props: 
    {
        server: Object
    },

    methods: {
        loadServerDetails()
        {
            eventBus.$emit('clickedOnServer', this.server);
        }
    }
}

</script>