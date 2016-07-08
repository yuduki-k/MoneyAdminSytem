function start() {
	if(('localStorage' in window) && (window.localStorage !== null)) {
		var content = document.getElementById("text").value;
		localStorage.setItem("serch",content);
		location.href = "HTML/serch.html";
		 return true
	} else {
    //var content = document.getElementById("text").value;
		//localStrage.SetItem(serch,content);
		alert("このブラウザはlocalStorageには対応していません。検索結果は保存されません。")
		location.href = "HTML/serch.html";
		 return false
	}
}
