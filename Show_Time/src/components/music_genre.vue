<template>
  <div class="genre-component">
    <img :src = genre.backgroundImg alt="Genre Image" class="genre-image" />
    <h1 class="genre-title">{{ genre.title }}</h1>
    
    <button class="btn btn-danger delete-button" @click="deleteGenre(genre.title)">Delete Genres</button>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import { deleteGenresByTitle } from '../main.js';

export default {
  props: ['genre'],
  methods: {
    async deleteGenre(title) {
      try {
        await deleteGenresByTitle(title);
        this.$emit('genre-deleted');
        console.log('Genre deleted:', title);
      } catch (error) {
        console.error('Error deleting genre:', error);
      }
    },
  }
};
</script>

<style lang="scss" scoped>
.genre-component {
  position: relative;
  width: 800px;
  height: 300px;
  border: solid rgb(72, 4, 46) 5px;
  overflow: hidden;
  transition: all .5s;
  margin-bottom: 25px;
}

.genre-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all .5s;
}

.genre-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  transition: all .5s;
  z-index: 1; /* Ensure the title appears above the image */
}

.delete-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 2; /* Ensure the button appears above the image */
}

.genre-component:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 1);
}

.genre-component:hover .genre-image {
  filter: blur(5px);
}

.genre-component:hover .genre-title {
  font-size: 28px;
}
</style>
