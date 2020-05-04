import Config from '../Config.json';
import firebase from 'firebase';
const config = {
  apiKey: Config.firebase.apiKey,
  authDomain: "cat-rating.firebaseapp.com",
  databaseURL: "https://cat-rating.firebaseio.com",
  projectId: "cat-rating",
  storageBucket: "cat-rating.appspot.com",
  messagingSenderId: "129371911466",
  appId: "1:129371911466:web:3abefac46e0e3b626ada53"
};
firebase.initializeApp(config);
export default firebase;
