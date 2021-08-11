import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyCfUnRH_rkUcPHTRO0tKUfMpdUzElizMF0",
    authDomain: "netflix-clone-toutube.firebaseapp.com",
    projectId: "netflix-clone-toutube",
    storageBucket: "netflix-clone-toutube.appspot.com",
    messagingSenderId: "1046179554322",
    appId: "1:1046179554322:web:cca04b154cb7850bf9e4cb"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;