var rand = 0;
var hp = 35;
var Myhp = 45;
var Atack = new Audio("Atack.mp3");
function tap(){
  rand = Math.floor(Math.random() * 4);
  if (rand == 0) {
    hp = hp - 5;
    document.getElementById("hp").textContent = hp;
    document.getElementById("life").value = hp;
    Atack.play();
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }else if (rand == 1) {
    hp = hp - 10;
    document.getElementById("hp").textContent = hp;
    document.getElementById("info").textContent = "クリティカルダメージ!";
    document.getElementById("life").value = hp;
    Atack.play();
    setTimeout(infoStop,2000);
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }else if (rand == 2) {
    document.getElementById("info").textContent = "かわされた!";
    setTimeout(infoStop,2000);
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }else if (rand == 3) {
    document.getElementById("info").textContent = "反撃された!";
    hp = hp - 5;
    document.getElementById("hp").textContent = hp;
    document.getElementById("life").value = hp;
    Atack.play();
    Myhp = Myhp - 5;
    document.getElementById("Myhp").value = Myhp;
    setTimeout(infoStop,2000);
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }
}
function infoStop(){
  document.getElementById("info").textContent = "";
}
function nigeru(){
  var kakuritu = 0;
  kakuritu = Math.floor(Math.random() * 2);
  if (kakuritu == 0) {
    alert("逃げられなかった...")
  }else if(kakuritu == 1){
    alert("うまく逃げられた!");
    location.herf = "index.html";
  }
}
