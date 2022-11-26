import './firebase.js' 
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'  
import { showmsg } from './showmsg.js' 
const loginform = document.querySelector('#login-form');
//prevenir el auto refresco del formulario
loginform.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = loginform['emailsigin'].value
    const password = loginform['passwordsigin'].value
    // console.log(email, password);
    // close modal

     try {
            const usercredentials = await signInWithEmailAndPassword(auth, email, password)
            const siginmodal = document.querySelector('#signinModal')
            const modal = bootstrap.Modal.getInstance(siginmodal)
            modal.hide();  

            showmsg('login '+usercredentials.user.email);      
     } catch (error) {
        if (error.code === 'auth/wrong-password') {
            showmsg('password invalid', error)
        }else if (error.code === 'auth/user-not-found') {
            showmsg('user invalid', error)
        }else {
            showmsg('error', error)
        }            
     }
})