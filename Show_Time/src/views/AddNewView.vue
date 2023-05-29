    
<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { display_genre, addNewGenre, deleteGenresByTitle } from '../main.js';

export default {
    data() {
        return {
            genreName: ''
        };
    },
    methods: {
        addNewGenre() {
            addNewGenre(this.genreName)
                .then(() => {
                    console.log('New genre added successfully');
                    this.$router.push('/');
                })
                .catch((error) => {
                    console.error('Error adding new genre:', error);
                });
        },
    }
};
</script>
    
<template>
    <div class="add-new-view">
        <div class="container h-100">
            <div class="row h-100 justify-content-center align-items-center">
                <div class="col-md-6">
                    <h1 class="text-center mb-4">Add New Genre</h1>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" v-model="genreName" placeholder="Enter genre name" />
                    </div>
                    <div class="text-center">
                        <button class="btn btn-primary" @click="addNewGenre">Add Genre</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
.add-new-view {
    height: 100vh;
    background-color: rgb(12, 2, 21);
}

.add-new-view .container {
    height: 100%;
}

h1 {
    color: rgb(255, 255, 255);
}
</style>
  