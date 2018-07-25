<template>
    <div>
        <NavBar/>
        <router-view/>
    </div>
</template>

<script>
    import NavBar from './NavBar'

    export default {
        name: 'app',
        components: {
            NavBar,
        }
    }
</script>

<style>

</style>
