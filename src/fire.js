import firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyCP7_uxf4zDz4GJc2jDCVnuO_eK-eYIXK8",
    authDomain: "login-b6ee4.firebaseapp.com",
    projectId: "login-b6ee4",
    storageBucket: "login-b6ee4.appspot.com",
    messagingSenderId: "423124756190",
    appId: "1:423124756190:web:9df7bf23f008a531f2044f"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;