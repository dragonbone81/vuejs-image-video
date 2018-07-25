<template>
    <div>
        <div v-if="loggedIn">
            <Images/>
        </div>
        <div v-else>Please LogIn</div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import Images from './Images'

    export default {
        name: "home",
        components: {
            Images
        },
        computed: {
            ...mapState(['loggedIn']),
        },
    }
</script>

<style scoped>

</style>