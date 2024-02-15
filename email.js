var shown=false;
function showhideEmail(){
	var emailid = document.getElementById('email');
	if(!emailid){
		console.error("Element with id 'email' not found");
	}
	if(shown){
		document.getElementById('email').innerHTML="<i class='fa fa-envelope' style='color:skyblue; font-size: 20px;'></i> Show my email";
		shown=false;
	}
	else{
		var myemail= "<a href='mailto:madishsn" + "@" + "mail.uc.edu'>madishsn" + "@" + "mail.uc.edu</a>";
		document.getElementById('email').innerHTML = myemail;
		shown=true;
	}
}
