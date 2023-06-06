const wrapper  = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup =document.querySelector('.btnLogin-popup')
const loginButton = document.querySelector('#btn-login')
const iconclose =document.querySelector('.icon-close')
registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconclose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

loginButton.addEventListener("click", login);

console.log("hahahah");

function login(){
    console.log("test");
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if(email =="123@gmail.com" && password =="123456")
    {
        alert(" alogin succesfully");
        setTimeout(() => window.location.assign("./index2.html"), 100)
    }
    else{
        alert("aaaInvalid information ");
        return;
    } 
}



