<template>
    <section class="section">
        <div class="container">
            <h1 class="title">Gallery</h1>
            <div v-if="loading" class="columns">
                <span class="icon column">
                    <i class="fas fa-spinner fa-spin"></i>
                </span>
            </div>
            <div v-else class="columns is-tablet is-multiline">
                <div :key="image.deletehash" class="column is-4-desktop is-6-tablet" v-for="image in imageList">
                    <figure class="image is-5by3">
                        <img :src="image.link"/>
                    </figure>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import {mapState} from 'vuex'
    import api from '../api/api'

    export default {
        name: "Images",
        data() {
            return {
                imageList: [],
                loading: false,
            }
        },
        components: {},
        computed: {
            ...mapState(['token', 'username']),
        },
        created() {
            this.getImages();
        },
        methods: {
            getImages() {
                this.loading = true;
                api.getImages(this.username, this.token).then((response) => {
                    this.setImageList(response.data);
                    this.loading = false;
                })
            },
            setImageList(list) {
                this.imageList = list;
            },
        }
    }
</script>

<style scoped>
    img {
        border-radius: 5px;
        border: 2px solid grey;
    }
    .fa-spinner {
        font-size: 100px;
    }
</style>