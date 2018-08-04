<template>
    <div>
        <NavBar/>
        <router-view/>
    </div>
</template>

<script>
    import NavBar from './NavBar'
    import {mapState} from 'vuex'

    export default {
        name: 'app',
        components: {
            NavBar,
        },
        computed: {
            ...mapState(['loggedIn']),
        },
        created() {
            if (!this.loggedIn && localStorage.getItem("access_token") && localStorage.getItem("account_username")) {
                this.$store.dispatch('login', {
                    access_token: localStorage.getItem("access_token"),
                    account_username: localStorage.getItem("account_username")
                }).then();
            }
        }
    }
</script>

<style>

</style>
