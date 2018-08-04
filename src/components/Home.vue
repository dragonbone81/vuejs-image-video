<template>
    <div>
        <div v-if="loggedIn">
            <Images/>
        </div>
        <div v-else>
            <section class="section">
                <div class="columns is-centered">
                    <div class="column" style="text-align: center">
                        <h1 style="font-size: 30px">Please Login</h1>
                    </div>
                </div>
            </section>
        </div>
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
        created() {
            document.title = "Gallery";
        }
    }
</script>

<style scoped>

</style>