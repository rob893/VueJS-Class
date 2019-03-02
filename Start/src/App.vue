<template>
    <div class="container">
        <my-header></my-header>
        <hr>
        <div class="row">
            <servers></servers>
            <server-details></server-details>
        </div>
        <hr>
        <my-footer></my-footer>
    </div>
</template>

<script>
import ServerDetails from './components/server/ServerDetails.vue'
import Servers from './components/server/Servers.vue'
import Header from './components/shared/Header.vue'
import Footer from './components/shared/Footer.vue'

export default 
{
    components:
    {
        'my-header': Header,
        'my-footer': Footer,
        'servers': Servers,
        'server-details': ServerDetails
    }
}
</script>

<style>

</style>
