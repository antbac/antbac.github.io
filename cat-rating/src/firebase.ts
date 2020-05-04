import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBeobdOJ-PFkIlswatl67ZRUatd4wSO5G8",
  authDomain: "cat-rating.firebaseapp.com",
  databaseURL: "https://cat-rating.firebaseio.com",
  projectId: "cat-rating",
  storageBucket: "cat-rating.appspot.com",
  messagingSenderId: "129371911466",
  appId: "1:129371911466:web:3abefac46e0e3b626ada53"
};
firebase.initializeApp(config);
export default firebase;
