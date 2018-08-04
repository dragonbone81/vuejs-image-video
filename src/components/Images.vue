<template>
    <div>
        <LightBox :imageUrl="imageList[currentImageLightBox]?imageList[currentImageLightBox].link:''"
                  :active="lightBoxLaunched"
                  :closeLightBox="closeLightBox"
                  :setNext="setNext"
                  :setPrevious="setPrevious"
                  :hasNext="hasNext"
                  :hasPrevious="hasPrevious"
                  :video="isVideo"
        />
        <section class="section">
            <div class="container" style="text-align: center">
                <h1 class="title">Gallery</h1>
                <div v-if="loading" class="columns is-centered" style="text-align: center">
                <span class="column">
                    <i class="fas fa-spinner fa-spin"></i>
                </span>
                </div>
                <div v-else class="columns is-tablet is-multiline">
                    <div :key="image.deletehash" class="column is-4-desktop is-6-tablet"
                         v-for="(image, index) in imageList">
                        <div v-if="image.type.includes('video')">
                            <video muted="muted" loop @click="setLightBox(index)" @mouseleave="stopVideo"
                                   @mouseover="playVideo">
                                <source :src="image.link">
                            </video>
                        </div>
                        <div v-else>
                            <figure class="image is-5by3">
                                <img data- :src="image.link" @click="setLightBox(index)"/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import LightBox from './LightBox'
    import api from '../api/api'

    export default {
        name: "Images",
        data() {
            return {
                imageList: [],
                loading: false,
                lightBoxLaunched: false,
                currentImageLightBox: 0,
                video: false,
            }
        },
        components: {LightBox},
        computed: {
            ...mapState(['token', 'username']),
            hasPrevious() {
                return this.currentImageLightBox > 0
            },
            hasNext() {
                return this.currentImageLightBox < this.imageList.length - 1
            },
            isVideo() {
                return this.video
            }
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
            setLightBox(index) {
                this.currentImageLightBox = index;
                this.lightBoxLaunched = !this.lightBoxLaunched;
                this.setIsVideo();
            },
            closeLightBox() {
                this.lightBoxLaunched = false
            },
            setNext() {
                this.currentImageLightBox = this.currentImageLightBox + 1 >= this.imageList.length ?
                    this.currentImageLightBox :
                    this.currentImageLightBox + 1;
                this.setIsVideo();
            },
            setPrevious() {
                this.currentImageLightBox = this.currentImageLightBox - 1 < 0 ?
                    0 :
                    this.currentImageLightBox - 1;
                this.setIsVideo();
            },
            setIsVideo() {
                this.video = this.imageList[this.currentImageLightBox].type.includes("video");
            },
            playVideo(event) {
                event.target.play();
            },
            stopVideo(event) {
                event.target.pause();
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