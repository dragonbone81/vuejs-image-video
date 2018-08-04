<template>
    <div>
        <div v-if="loggedIn">
            {{loggedIn}}
        </div>
        <div v-else>
            Loading
        </div>
    </div>

</template>

<script>
    import qs from 'qs'
    import {mapState} from 'vuex'
    import router from "../router";

    export default {
        name: "auth",
        created() {
            const callbackResponse = qs.parse(this.$route.hash.split("#")[1]);
            this.$store.dispatch('login', callbackResponse).then();
            router.push('/');
        },

        computed: {
            ...mapState(['loggedIn']),
        },
        methods: {}
    }
</script>

<style scoped>

</style>