import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBrMppFos7Y1A79U4KFra2TzMu7ctzBQ9Y",
  authDomain: "book-santa-ca2f6.firebaseapp.com",
  databaseURL: "https://book-santa-ca2f6.firebaseio.com",
  projectId: "book-santa-ca2f6",
  storageBucket: "book-santa-ca2f6.appspot.com",
  messagingSenderId: "677395952728",
  appId: "1:677395952728:web:e902785665408ce7ad862d"
};
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
