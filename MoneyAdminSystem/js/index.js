function start() {
	var username = "test";
	username = prompt("ユーザー名を指定してください.","管理 太郎");
	localStorage.setItem("Name",username);
	location.href = "MyPage.html";
}
