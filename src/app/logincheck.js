const loggedin = document.querySelectorAll('.logged-in')
const loggedout = document.querySelectorAll('.logged-out')

export const logincheck = user =>{
    if (user){
        loggedout.forEach(link => link.style.display = 'none')
        loggedin.forEach(link => link.style.display = 'block')
    } else {
        loggedin.forEach(link => link.style.display = 'none')
        loggedout.forEach(link => link.style.display = 'block')
    }
}