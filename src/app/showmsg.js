export function showmsg (message, type = 'success'){
   Toastify({
    text: message,
    duration: 3000, //segundos
    // destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
        background: type === "success" ? "linear-gradient(to right, #5433ff, #20bdff, #a5fecb)" : "red"
        
    },
    onClick: function(){} // Callback after click
  }).showToast(); 
}
