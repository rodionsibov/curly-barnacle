import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5E-l11f3cRTnBaqxQNrRk1nb2GlRFoW8",
  authDomain: "vue-full-course-7cfe7.firebaseapp.com",
  projectId: "vue-full-course-7cfe7",
  storageBucket: "vue-full-course-7cfe7.appspot.com",
  messagingSenderId: "1078852688507",
  appId: "1:1078852688507:web:9fef36d21ed7e7d128e0de"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase