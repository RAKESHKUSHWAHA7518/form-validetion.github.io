const form= document.getElementById('form');
const password1El =document.getElementById('password1');
const password2El =document.getElementById('password2');
const messageContainer= document.querySelector('message-container');
const message= document.getElementById('message');
//const submit = document.getElementById('submit');

let isValid= false;
let passwordsMatch= false;

function validateForm(){
  //Using Contraint API

   isValid=form.checkValidity();
 
  // console.log(isValid);
if(!isValid){



  message.textContent= 'please fill out all fields.';
  message.style.color= 'red';
  messageContainer.style.bordercolor= 'red';
 return;
}
//  check password
if(password1El.value===password2El.value){
  passwordsMatch=true;
  password1El.style.bordercolor='green';
  password2El.style.bordercolor='green';
  return;

}else{
  passwordsMatch= false;
  message.textContent='make sure passwords match';
  messageContainer.style.bordercolor='red';
  password1El.style.bordercolor= 'red';
  password2El.style.bordercolor='red';

}

// if form is valid  and password match

if( isValid && passwordsMatch){
message.textContent='Successfully Registered';
message.style.color='green';


  messageContainer.style.bordercolor= 'green';
}



}


function storeFormData(){

  const user={
    name: form.name.value,
    phone:form.phone.value,
    email: form.email.value,
    website:form.website.value,
    password:form.password.value
  };
  console.log(user)
}
  function processFormData(e){
 
   e.preventDefault();
  //   console.log(e);

  validateForm();
  if(isValid && passwordsMatch){
    storeFormData();
  }
}

// event Listener 
form.addEventListener('submit',  processFormData);

  

