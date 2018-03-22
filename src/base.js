import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyB4FuF4zgCkPiMnqdRoUjWBlE85D9ZO1h0',
  authDomain: 'catch-of-the-day-john-robey.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-john-robey.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
