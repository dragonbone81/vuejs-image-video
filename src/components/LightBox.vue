<template>
    <div id="lightboxModal" class="modal" :class="active?'is-active':''">
        <div class="modal-background"></div>
        <i @click="setPrevious" class="fas fa-angle-left"
           :class="hasPrevious?'button-active':'button-inactive'"></i>
        <div class="modal-content" style="width: auto; height: auto;overflow: visible;">
            <figure v-if="!video" class="image" style="">
                <img :src="imageUrl"/>
            </figure>
            <video v-if="video" autoplay loop>
                <source :src="imageUrl">
            </video>
        </div>
        <i @click="setNext" class="fas fa-angle-right"
           :class="hasNext?'button-active':'button-inactive'"></i>
        <button @click="toggleModal" class="modal-close is-large" aria-label="close"></button>
    </div>
</template>

<script>
    export default {
        name: "LightBox",
        props: {
            active: Boolean,
            closeLightBox: Function,
            imageUrl: String,
            setPrevious: Function,
            setNext: Function,
            hasPrevious: Boolean,
            hasNext: Boolean,
            video: Boolean,

        },
        methods: {
            toggleModal() {
                this.closeLightBox()
            },
        }
    }
</script>

<style scoped>
    .fa-angle-right {
        font-size: 80px;
        z-index: 100;
        margin-right: 20px;
        margin-left: -20px
    }

    .fa-angle-left {
        font-size: 80px;
        z-index: 100;
        margin-left: 20px;
        margin-right: -20px
    }

    .button-active {
        color: aliceblue;
    }

    .button-inactive {
        color: gray;
    }

    .modal-content {
        width: auto;
        height: auto;
        overflow: visible;
    }

    img {
        max-height: 90vh;
        max-width: 85vw;
        height: auto;
        width: auto;
    }
</style>