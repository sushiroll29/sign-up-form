const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const messageBox = document.querySelector('.password-match');

function checkPassword(){
    if(password.value !== confirmPassword.value){
        password.style.cssText = 'box-shadow: 0 0 0 2pt #c72132;';
        confirmPassword.style.cssText = 'box-shadow: 0 0 0 2pt #c72132;';
        messageBox.textContent = '*Passwords do not match';

        password.addEventListener('keydown', removeFieldStyle);
        confirmPassword.addEventListener('keydown', removeFieldStyle);

        return false;
    } else {
        return true;
    }

}

//removes the red outline when the user retypes their password
function removeFieldStyle(){
    password.style.cssText = '';
    confirmPassword.style.cssText = '';
    messageBox.textContent = '';
}