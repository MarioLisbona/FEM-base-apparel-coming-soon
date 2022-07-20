//create variables to access DOM elements
const email = document.querySelector('.email');
const submit = document.querySelector('.btn-submit')
const errorContainer = document.querySelector('.error-container');
const errorMsg = document.querySelector('.error-message');
const errorIcon = document.querySelector('.error-icon');

const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

email.oninput = () => {
    checkEmail(email, emailRegex);
}


function checkEmail(email,regex) {

    if (email.value == '') {
        email.style.outline = '1px solid red';
        errorContainer.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
        errorMsg.textContent = 'Email cannot be empty';   
    } else if (!email.value.match(emailRegex)) {
        email.style.outline = '1px solid red';
        errorContainer.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
        errorMsg.textContent = 'Please provide a valid email';
    } else if (email.value.match(emailRegex)) {
        email.style.outline = '1px solid var(--desat-red)'; 
        errorIcon.classList.add('hidden');
        errorContainer.classList.add('hidden');
    }
}
