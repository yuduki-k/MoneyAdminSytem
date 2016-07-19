var username;
var charge;
function start(){
	username = localStorage.getItem("Name");
	username = username + "さん、こんにちは!";
	document.getElementById("name").textContent = username;
}


function calc(mode){
	if (document.getElementById('shikiBox1').value == "" || document.getElementById('shikiBox1').value == null)  {
    alert("空欄です。")
}else{
		var num1 = document.getElementById("shikiBox1").value;
		var num2 = document.getElementById("shikiBox2").value;
		var num3 = Number(num1);
		var num4 = Number(num2);
		var num10 = 1.08;
		if (mode == "+") {
			var num5 = num3 + num4;
			document.getElementById("kotae").textContent = num5;
		}else if(mode == "-"){
			var num6 = num3 - num4;
			document.getElementById("kotae").textContent = num6;
		}else if(mode == "*"){
			var num7 = num3 * num4;
			document.getElementById("kotae").textContent = num7;
		}else if(mode == "/"){
			var num8 = num3 / num4;
			document.getElementById("kotae").textContent = num8;
		}else if(mode == "Z"){
			var num9 = (num3 + num4) * num10;
			document.getElementById("kotae").textContent = Math.floor(num9);

		}else{
			return;
		}
	}
}
function deposit(){
	var SYSnum = "1";
	var	SYSnum2 = placeInt(SYSnum);
	SYSnum2 = SYSnum2 + 1;
	var 0 = "item" + SYSnum2;
	charge = document.getElementById("charge").value;
	subject = document.getElementById("subject").value;
	var item{
		charge: charge;
		subject: subject;
	}
	localStorage.setItem(0, JSON.stringify(item));
}
