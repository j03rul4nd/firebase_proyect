  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBbaKxcyKGdCjdkDhRxxOqzEMnYUVWVH9Q",
    authDomain: "fir-app-tuto-d1956.firebaseapp.com",
    projectId: "fir-app-tuto-d1956",
    storageBucket: "fir-app-tuto-d1956.appspot.com",
    messagingSenderId: "682566008881",
    appId: "1:682566008881:web:f87206154961147f719510"
  };

  // Export initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
  export const db = getFirestore(app)
