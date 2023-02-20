function checkPassword(){
    const password = document.querySelector('#password');
    const confirmPassword = document.querySelector('#confirm-password');
    const messageBox = document.querySelector('.password-match');
    if(password.value !== confirmPassword.value){
        password.style.cssText = 'box-shadow: 0 0 0 2pt red;';
        confirmPassword.style.cssText = 'box-shadow: 0 0 0 2pt red;';
        messageBox.textContent = '*Passwords do not match'
        return false;
    } else {
        return true;
    }

}