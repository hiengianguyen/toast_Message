var toastSuccess = {
    tittle: "Success",
    message: "Success, thank you for visit my code.",
    type: 'success',
    duration: 6000,
    icon: 'fa-circle-check',
    fideOut: 1000
}

var toastError = {
    tittle: "Error",
    message: "Error, try again please.",
    type: 'error',
    duration: 5000,
    icon: 'fa-circle-xmark',
    fideOut: 1000
}


const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $('.btn__success');
const errorBtn = $('.btn__error');
const elementToastErr = $('.toast-error');
const close = $('.toast__close');


// function toast
function toastMessage({
    tittle = '', 
    message = '', 
    type = '', 
    duration = 3000, 
    icon = '',
    fadeOut = 1000
}) {
   const main = document.querySelector('#toast')

   if(main) {
    const toast = document.createElement('div');
    var autoRemoveID = setTimeout(function() {
        main.removeChild(toast)
    }, duration + fadeOut)
    
    toast.onclick = function(e) {
        if(e.target.closest('.toast__close')) {
            main.removeChild(toast)
            clearTimeout(autoRemoveID)
        }
    }
    const delay = (duration / 1000).toFixed(2);
    toast.style.animation = `sideInLeft ease .5s, fadeOut 1s ${delay}s forwards`;
    toast.classList.add('toast', `toast-${type}`)
     toast.innerHTML = `
            <div class="toast__icon">
                <i class="fa-solid ${icon}"></i>
            </div>
            <div class="toast__body">
              <h3 class="toast__tittle">${tittle}</h3>
              <p class="toast__message">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
            `;
           
            main.appendChild(toast);
  
   }
}

//headle when click btn
successBtn.onclick = function() {
    toastMessage(toastSuccess)
}

errorBtn.onclick = function() {
    toastMessage(toastError)
}