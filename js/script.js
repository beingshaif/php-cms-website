// User Credentials
var users = [{
	name: 'Developer',
	username: 'developer123',
	password: 'pass123'
}, {
	name: 'Administrator',
	username: 'admin123',
	password: 'secret123'
}, {
	name: 'Hacker',
	username: 'hacker123',
	password: 'hackme'
}];



$(document).on("click", "#loginBtn", function() {
	// Fetch credentials
	var username = $("#username").val();
	var password = $("#password").val();

	// Check credentials
	if( username == '' ) {
		alert('Please enter a valid username!');
		return;
	}

	if( password == '' ) {
		alert('Please enter a valid password!');
		return;
	}

	var counter = 0;
	for (var i=0; i < users.length; i++) {
		if( users[i].username == username && users[i].password == password ) {
			alert('Welcome ' + users[i].name + '! You have successfully loggedin.');
			$(".logged-user").text(users[i].name);
			$(".logged-user").addClass('active');
			counter = 1;
			break;
		}
	}

	if (counter == 0) {
		alert('Invalid Credentials! Please try again.');
	}
	
});