const inputName=document.getElementById('name');
const inputEmail=document.getElementById('email');
const form=document.getElementById('form_login');


function validationName(data){
	return data.length>=3;
}
	

function validationEmail(data){
	return data.includes('@');
}
	

inputName.addEventListener('input',function(event){	
	const elem=event.target;
	if (!validationName(elem.value)){
		elem.classList.add('error');
	}else{
		elem.classList.remove('error');
}});
		

inputEmail.addEventListener('input',function(event){
	const elem=event.target;	
	if (!validationEmail(elem.value)){
		elem.classList.add('error');
	} else {
		elem.classList.remove('error');
}});
	
form.addEventListener('submit',function(event){
event.preventDefault();

const nameData=inputName.value;
const emailData=inputEmail.value;
const isNameValid=validationName(nameData);
const isEmailValid=validationEmail(emailData);
if (isNameValid && isEmailValid){
	alert('Thanks for adding to our comminity');
}else{
	alert('You make mistakes');
}
});
