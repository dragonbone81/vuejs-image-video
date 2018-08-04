<template>
    <div>
        <div v-if="loggedIn">
            <div v-if="uploadedFiles.length" class="notification" style="margin-bottom: -2vh">
                <button @click="uploadedFiles=[]" class="delete"></button>
                Your files have been uploaded. Go to your
                <router-link to="/">Gallery</router-link>
                to view them.
            </div>
            <section class="section">
                <div class="columns is-centered">
                    <div class="column">
                        <form enctype="multipart/form-data" novalidate id="uploadForm">
                            <div id="uploadBox" class="column">
                                <div v-if="uploading" class="column uploading-spinner" style="text-align: center">
                                    <i class="fas fa-spinner fa-spin"></i>
                                </div>
                                <input @click="uploadedFiles=[]" v-else class="input-file" type="file" multiple
                                       accept="image/*" @change="fileInputed"/>
                                <div style="text-align: center;padding-top: 14vh">
                                    <h1 style="font-size: 30px">Upload</h1>
                                    <h3>Drag and drop or click to upload</h3>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
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
    import api from '../api/api'

    export default {
        name: "upload",
        data() {
            return {
                uploading: false,
                uploadedFiles: []
            }
        },
        computed: {
            ...mapState(['loggedIn', 'token'])
        },
        methods: {
            fileInputed(event) {
                this.uploadedFiles = [];
                if (!event.target.files.length)
                    return;
                this.uploadImages(event.target.files);
            },
            uploadImages(files) {
                this.uploading = true;
                const promises = [];
                for (let i = 0; i < files.length; i++) {
                    const formData = new FormData();
                    formData.append('image', files[i]);
                    promises.push(api.uploadImage(this.token, formData))
                }
                Promise.all(promises).then((val) => {
                    this.uploadedFiles = val;
                    this.uploading = false;
                })
            }
        },
        created() {
            document.title = "Upload";
        }
    }
</script>

<style scoped>
    #uploadBox {
        outline: 2px dashed grey;
        color: dimgray;
        padding: 0;
        margin: 0 5vh 0 5vh;
        min-height: 40vh;
        position: relative;
        cursor: pointer;
    }

    .input-file {
        opacity: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        cursor: pointer;
    }

    .fa-spinner {
        font-size: 100px;
    }

    .uploading-spinner {
        position: absolute;
        width: 100%;
        height: 50%;
    }
</style>