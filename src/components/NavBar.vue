<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <router-link class="navbar-item" to="/">
                <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox"
                     width="112" height="28">
            </router-link>
            <div class="navbar-burger burger" @click="hamburgerClicked" data-target="navbarExampleTransparentExample">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
                <div v-if="loggedIn" class="navbar-item">Welcome {{username}}</div>
            </div>

            <div class="navbar-end">
                <div v-if="!loggedIn" class="navbar-item">
                    <a @click="login" class="button">Login</a>
                </div>
                <div v-else class="navbar-item">
                    <a @click="logout" class="button">Logout</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import {mapState} from 'vuex'
    import auth from '../api/api'

    export default {
        name: "NavBar",
        data() {
            return {
                loginUrl: auth.loginUrl,
            }
        },
        computed: {
            ...mapState(['username', 'loggedIn']),
        },
        methods: {
            login() {
                window.location = this.loginUrl;
            },
            logout() {
                this.$store.dispatch('logout').then();
            },
            hamburgerClicked(event) {
                if (event.srcElement.nodeName === "SPAN") {
                    event.srcElement.offsetParent.classList.toggle('is-active');
                    document.getElementById(event.target.offsetParent.dataset.target).classList.toggle('is-active');
                } else {
                    event.srcElement.classList.toggle('is-active');
                    document.getElementById(event.target.dataset.target).classList.toggle('is-active');
                }
            },
        }
    }
</script>

<style scoped>
</style>