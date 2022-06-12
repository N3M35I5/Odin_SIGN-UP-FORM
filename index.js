const pswd = document.querySelector('#userPassword');
const cpswd = document.querySelector('#confirmUserPassword');
const btn = document.querySelector('#submitBtn');
const mid = document.querySelector('.mid');
const errorMsg = document.createElement('p');
errorMsg.style.cssText = "color: red;font-family: 'Roboto Mono', monospace; font-size: 10px;"; 
btn.addEventListener('click',()=>{
    if(pswd.value!=cpswd.value){
        pswd.classList.add('errorClass');
        cpswd.classList.add('errorClass');
        errorMsg.textContent = '*Passwords do not match!';
        mid.append(errorMsg);
    }
    else{
        pswd.classList.remove('errorClass');
        cpswd.classList.remove('errorClass');
        errorMsg.remove();
    }
});
