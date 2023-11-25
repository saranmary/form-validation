const form =document.querySelector('#form');
const username =document.querySelector('#name');
const email =document.querySelector('#email');
const num =document.querySelector('#num');
const password =document.querySelector('#password');
const cpassword =document.querySelector('#cpassword');


form.addEventListener('submit',(e)=>{
  validateinput();
  e.preventDefault();
})

function validateinput(){
  const usernameval = username.value.trim();
  const emailval = email.value.trim();
  const numval = num.value.trim();
  const passwordval = password.value.trim();
  const cpasswordval = cpassword.value.trim();

  if(usernameval === ''){
    setError(username,'Username is required')
  }
  else{
    setSuccess(username)
  }

  if(emailval === ''){
    setError(email,'Email is required')
  }
  else if(!validateEmail(emailval)){
    setError(email,'please enter a valid email')
  }
  else{
    setSuccess(email)
  }

  if(numval === ''){
    setError(num,'mobile no is required')
  }
  else if(numval.length < 10 || numval.length> 10){
    setError(num,'please enter a valid mobile no')
  }
  else{
    setSuccess(num)
  }

  if(passwordval === ''){
    setError(password,'password is required')
  }
  else if(passwordval.length<8){
    setError(password,'password length must be atleast 8 characters ')
  }
  else{
    setSuccess(password)
  }

  if(cpasswordval === ''){
    setError(cpassword,'confirm password is required')
  }
  else if(cpasswordval!==passwordval){
    setError(cpassword,'password does not match')
  }
  else{
    setSuccess(cpassword)
  }
}

function setError(element,message){
  const inputs = element.parentElement;
  const errorElement = inputs.querySelector('.error')
  errorElement.innerText = message;
  inputs.classList.add('error')
  inputs.classList.remove('success')
}

function setSuccess(element){
  const inputs = element.parentElement;
  const errorElement = inputs.querySelector('.error')
  errorElement.innerText = '';
  inputs.classList.add('success')
  inputs.classList.remove('error')
}

const validateEmail =(email) =>{
  return String(email).toLowerCase()
  .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
