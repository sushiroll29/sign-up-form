const form = document.querySelector('form');
// const submitButton = document.querySelector('button');

function checkPassword(){
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    if(password.value !== confirmPassword.value){
        password.style.cssText = 'box-shadow: 0 0 0 2pt red;';
        confirmPassword.style.cssText = 'box-shadow: 0 0 0 2pt red;';
        return false;
    } else {
        return true;
    }

}

