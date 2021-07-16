import firebase from 'firebase';
var firebaseConfig = {
  apiKey: "AIzaSyCQP6yXpcKo40HHONn7scqVTPG5SU-l_mA",
    authDomain: "mypracticeapp-f7381.firebaseapp.com",
    projectId: "mypracticeapp-f7381",
    storageBucket: "mypracticeapp-f7381.appspot.com",
    messagingSenderId: "446294002271",
    appId: "1:446294002271:web:4d682780875af377d269ea"
};
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
