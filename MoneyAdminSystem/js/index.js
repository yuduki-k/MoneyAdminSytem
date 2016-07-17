function login1() {
	var username = document.getElementById("username").value;
	if (username == "Yuduki") {
		localStorage.setItem("Name", username);
		login2();
		 return false;
	}else if (username == "K"){
		localStorage.setItem("Name", username);
		login2();
		 return false;
	}else{
		alert("ユーザーIDまたはパスワードが正しくありません.");
	}
}
function login2() {
	var password = document.getElementById("password").value;
	if (password == "Yuduki_Kuwata") {
		location.href = "MyPage.html";
	 return false;
	}else if(password == "Z"){
		location.href = "MyPage.html";
		return false;
	}else{
		alert("ユーザーIDまたはパスワードが正しくありません.");
	}
}
