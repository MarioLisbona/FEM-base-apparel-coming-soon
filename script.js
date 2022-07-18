//create variables to access DOM elements
const email = document.querySelector('.email');
const submit = document.querySelector('.btn-submit')
const errorContainer = document.querySelector('.error-container');
const errorMsg = document.querySelector('.error-message');

const emailRegex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;



submit.addEventListener('click', function (event)  {
    event.preventDefault();

    var inputValue = email.value;

    checkEmail(inputValue, emailRegex);
});




function checkEmail (userInput, regex) {
    if (userInput.match(regex)) {
        errorContainer.classList.add('hidden');
        email.style.outline = '1px solid var(--desat-red);'; 
    } else if (userInput == '') {
        email.style.outline = '1px solid red';
        errorContainer.classList.remove('hidden');
        errorMsg.textContent = 'Email cannot be empty';   
    } else {
        email.style.outline = '1px solid red';
        errorContainer.classList.remove('hidden');
        errorMsg.textContent = 'Please provide a valid email';
    }
};