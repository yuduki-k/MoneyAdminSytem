function login1() {
	var username = document.getElementById("username").value;
	if (username == "Yuduki") {
		localStorage.setItem("Name", username);
		login2();
	}else if (username == "K"){
		localStorage.setItem("Name", username);
		login2();
	}else{
		alert("ユーザーIDまたはパスワードが正しくありません.");
	}
}
function login2() {
	var password = document.getElementById("password").value;
	if (password == "Yuduki_Kuwata") {
		location.href = "MyPage.html";
	 return true;
	}else if(password == "Z"){
		location.href = "MyPage.html";
	}else{
		alert("ユーザーIDまたはパスワードが正しくありません.");
	}
}
