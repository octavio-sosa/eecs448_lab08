let validateBtn = document.getElementById("validateBtn")

validateBtn.addEventListener('click', validatePw)

function validatePw(){
	let pw1 = document.getElementById('pw1')
	let pw2 = document.getElementById('pw2')

	if(pw1.value.length < 8 || pw2.value.length < 8){
		alert("The passwords are not at least 8 characters long.")
	} else if(pw1.value != pw2.value){
		alert("The passwords do not match.")
	} else {
		alert("Passwords are valid.")
	}
}
	
