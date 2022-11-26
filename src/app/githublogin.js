import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'  
import { showmsg } from './showmsg.js' 

const githubbtn = document.querySelector('#github_login');

githubbtn.addEventListener('click', async() =>{


     const provider = new GithubAuthProvider();

    try {
         const credentials = await signInWithPopup(auth, provider);

        //cerrar ventana modal
        const siginmodal = document.querySelector('#signinModal')
        const modal = bootstrap.Modal.getInstance(siginmodal)
        modal.hide();
        //notificacion de login
        showmsg('login success '+ credentials.user.displayName)
    } catch (error) {
        console.log('error'+ error);
    }
}) 