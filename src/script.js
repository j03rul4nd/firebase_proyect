import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
// import { } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"
import { auth, db } from "./app/firebase.js"
import {logincheck} from './app/logincheck.js'
import { setuposts } from  './app/postlist.js'

import './app/signup.js' 
import './app/siginform.js'
import './app/googlelogin.js'
import './app/githublogin.js'
import './app/logout.js' 

// import './app/postlist.js'

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const querysnapshot = await getDocs(collection(db, 'posts'))
        setuposts(querysnapshot.docs)
    } else {
        setuposts([])
    }
    logincheck(user);
})