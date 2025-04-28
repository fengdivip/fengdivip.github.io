;function validateForm() {
	var c = document.forms.myForm["name"].value;
	var b = document.forms.myForm["email"].value;
	var a = document.forms.myForm["comments"].value;
	document.getElementById("error-msg").style.opacity = 0;
	document.getElementById("error-msg").innerHTML = "";
	if (c == "" || c == null) {
		document.getElementById("error-msg").innerHTML =
			"<div class='alert alert-danger error_message'><i  data-feather='home' class='icon-sm align-middle me-2'></i> Please enter a name*</div>";
		fadeIn();
		return false
	}
	if (b == "" || b == null) {
		document.getElementById("error-msg").innerHTML =
			"<div class='alert alert-danger error_message'><i  data-feather='alert-triangle' class='icon-sm align-middle me-2'></i> Please enter a email*</div>";
		fadeIn();
		return false
	}
	if (a == "" || a == null) {
		document.getElementById("error-msg").innerHTML =
			"<div class='alert alert-danger error_message'><i class='mdi mdi-alert'></i> Please enter a comments*</div>";
		fadeIn();
		return false
	}
	var d = new XMLHttpRequest();
	d.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("simple-msg").innerHTML = this.responseText;
			document.forms.myForm["name"].value = "";
			document.forms.myForm["email"].value = "";
			document.forms.myForm["comments"].value = ""
		}
	};
	d.open("POST", "php/contact.php", true);
	d.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	d.send("name=" + c + "&email=" + b + "&comments=" + a);
	return false
}

function fadeIn() {
	var a = document.getElementById("error-msg");
	var c = 0;
	var b = setInterval(function() {
		if (c < 1) {
			c = c + 0.5;
			a.style.opacity = c
		} else {
			clearInterval(b)
		}
	}, 200)
};