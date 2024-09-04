//your JS code here. If required.
function showAlert(){
	let firstName = document.getElementById("firstName").value;
	let lastName = document.getElementById("lastName").value;
	let phoneNumber = document.getElementById("phoneNumber").value;
	let emailId = document.getElementById("emailId").value;
	 let alertMessage="First Name: "+ firstName +"Last Name: "+lastName +"Phone Number: "+phoneNumber +
		                "Email ID: "+emailId;
	alert(alertMessage);
}
