<template>
  <main>
    <h1>IT'S SHOW TIME</h1>
    <h2>START VOTE</h2>
    <div v-if="genres.length === 0">Loading genres...</div>
    <div v-else>
      <Music_genre v-for="genre in genres" :key="genre.title" :genre="genre" @genre-deleted="handleGenreDeleted" />
    </div>
    <button class="btn btn-primary new-genre" @click="addNewGenre">
      <RouterLink to="/add">ADD NEW GENRE</RouterLink>
    </button>
  </main>
</template>

<script>
import Music_genre from '../components/music_genre.vue';
import { display_genre, addNewGenre, deleteGenresByTitle } from '../main.js';

export default {
  components: {
    Music_genre
  },
  data() {
    return {
      genres: []
    };
  },
  async created() {
    await this.fetchGenres();
  },
  methods: {
    addNewGenre() {
          this.fetchGenres();
        },
    async fetchGenres() {
      this.genres = await display_genre();
    },
    handleGenreDeleted() {
      // Update genres list after genre deletion
      this.fetchGenres();
    }
  }
};
</script>



<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 850px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
    color: #e2d1d1;
  }

  h2 {
    margin-bottom: 16px;
    text-align: center;
    color: #e2d1d1;
  }
}
button a{
  text-decoration: none;
  color: rgb(255, 255, 255);
}
</style>
