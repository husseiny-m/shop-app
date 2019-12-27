import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA1oBBInKEN5gsItl5pjJi7CdrV-18POI8',
  authDomain: 'shop-app-bab5f.firebaseapp.com',
  databaseURL: 'https://shop-app-bab5f.firebaseio.com',
  projectId: 'shop-app-bab5f',
  storageBucket: 'shop-app-bab5f.appspot.com',
  messagingSenderId: '402606393381',
  appId: '1:402606393381:web:56fd09bb412804fff257cc',
  measurementId: 'G-W7EMJHZQTX'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;