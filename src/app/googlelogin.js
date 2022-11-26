import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'  
import { showmsg } from './showmsg.js' 

const googlebtn = document.querySelector('#google_login');

googlebtn.addEventListener('click', async() =>{


    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth, provider);

        //cerrar ventana modal
        const siginmodal = document.querySelector('#signinModal')
        const modal = bootstrap.Modal.getInstance(siginmodal)
        modal.hide();
        //notificacion de login
        showmsg('login success '+ credentials.user.displayName)
    } catch (error) {
        showmsg('error', error)
    }
}) 