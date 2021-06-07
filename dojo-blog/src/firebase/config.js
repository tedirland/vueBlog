import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDeuaUZmIdhSTdqIvc9rhqGen41D9C9mu8',
  authDomain: 'dojo-blog-86ab1.firebaseapp.com',
  projectId: 'dojo-blog-86ab1',
  storageBucket: 'dojo-blog-86ab1.appspot.com',
  messagingSenderId: '823471080492',
  appId: '1:823471080492:web:cec59374bbab9f771afd89',
};

// init firebase

firebase.initializeApp(firebaseConfig);

//init firestore service

const projectFirestore = firebase.firestore();

export { projectFirestore };
