import firebase from 'firebase/app'
require('firebase/auth')
require('firebase/firestore')
require('firebase/storage')
var firebaseConfig = {
    apiKey: "AIzaSyA1ps_BzodqoU34-d-MBkS49NxrHDq4f6o",
    authDomain: "my-project-1526186979592.firebaseapp.com",
    projectId: "my-project-1526186979592",
    storageBucket: "my-project-1526186979592.appspot.com",
    messagingSenderId: "818827816330",
    appId: "1:818827816330:web:382865edc561057d196c73",
    measurementId: "G-3BREZ6RBB6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;