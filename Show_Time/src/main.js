import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import {
    collection,
    getDocs,
    onSnapshot,
    getFirestore,
    addDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBNRngKC6TQP-7Ifx1pb_8V8uReQ_dKThg",
    authDomain: "showtime-d8401.firebaseapp.com",
    projectId: "showtime-d8401",
    storageBucket: "showtime-d8401.appspot.com",
    messagingSenderId: "869292310681",
    appId: "1:869292310681:web:3e84f17d81deb0e9b73808"
};

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const colRef = collection(db, 'genre_col');

export function display_genre() {
    return new Promise((resolve, reject) => {
        const unsubscribe = onSnapshot(colRef, (snapshot) => {
            const genres = snapshot.docs.map((doc) => ({
                backgroundImg: doc.data().backgroundImg,
                title: doc.data().title,
                pressed: doc.data().pressed,
            }));
            resolve(genres);
        }, reject);
    });
}

export async function addNewGenre(title) {
    try {
      const docRef = await db.collection('genre_col').add({
        title: title,
        backgroundImg:'../src/assets/default_background.jpg',
        pressed: 0
      });
      return docRef.id;
    } catch (error) {
      throw error;
    }
  }
export async function deleteGenresByTitle(title) {
    const querySnapshot = await db.collection('genre_col').where('title', '==', title).get();
    console.log("main.js sunt deleteGenreByTitle")
    const batch = db.batch();
    const deletedGenres = [];
    querySnapshot.forEach((doc) => {
      deletedGenres.push(doc.data());
      batch.delete(doc.ref);
    });
  
    await batch.commit();
    return deletedGenres;
  }
  


const app = createApp(App);

app.use(router);

app.mount('#app');
