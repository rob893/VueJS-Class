<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers" :key="server.id">
                <server :server="server"></server>
            </li>
        </ul>
    </div>
</template>

<script>
import Server from './Server.vue'

export default {
    data()
    {
        return {
            servers: 
            [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Critical'},
                { id: 3, status: 'Unknown'},
                { id: 4, status: 'Normal'}
            ]
        };
    },

    components:
    {
        'server': Server
    }
}

</script>

<style scoped>

div
{
    border: 1px solid blue;
}

</style>
