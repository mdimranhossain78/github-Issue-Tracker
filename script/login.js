const loginSection = document.getElementById('login-section')
const homeSection = document.getElementById('home-section')
// console.log(homeSection)
// console.log(homeSection)
// console.log(loginSection)
const loginBtn = document.getElementById('login-btn')
loginBtn.addEventListener('click', function(){
//   get input user name
const userName = document.getElementById('user-name')
 const nameValue = userName.value ;
 const logingPassword = document.getElementById('loging-password');
 const passValue = logingPassword.value;
 

 if(nameValue === 'admin' && passValue === 'admin123'){
    alert('success')
    loginSection.classList.add('hidden')
    homeSection.classList.remove('hidden')
 }
 else{
    alert('feiled try agine')
 }

})