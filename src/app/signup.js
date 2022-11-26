import './firebase.js' 
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'  
import { showmsg } from './showmsg.js' 

const logupform = document.querySelector('#logup-form');


//prevenir el auto refresco del formulario
logupform.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = logupform['emailsigup'].value
    const password = logupform['passwordsigup'].value
    // console.log(email, password);
    try {
         const usercredentials =await createUserWithEmailAndPassword(auth, email, password);
         //close modal
         const siginupmodal = document.querySelector('#signupModal')
         const modal = bootstrap.Modal.getInstance(siginupmodal)
         modal.hide();
        //  notificacion de creacion de cuenta
        showmsg('Welcome '+usercredentials.user.email);

    } catch (error) {
        // console.log(error.message)
        // console.log(error.code)
        if (error.code === 'auth/email-already-in-use') {
            showmsg('Account already in use', error)
        }
        else if (error.code === 'auth/invalid-email') {
            showmsg('invalid email', error)
        } else if (error.code === 'auth/weak-password') {
            showmsg('weak password', error)
        } else if(error.code){
            showmsg('Something went wrong', error)
        }

    }
})
