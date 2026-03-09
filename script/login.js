
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
   window.location.assign("./home.html")
 }
 else{
    alert('feiled try agine')
 }

})