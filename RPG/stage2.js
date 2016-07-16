var rand = 0;
var hp = 30;
var Myhp = 10;
var gop = 0;
function tap(){
  rand = Math.floor(Math.random() * 4);
  if (rand == 0) {
    hp = hp - 5;
    document.getElementById("hp").textContent = hp;
    document.getElementById("life").value = hp;
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }else if (rand == 1) {
    hp = hp - 10;
    document.getElementById("hp").textContent = hp;
    document.getElementById("info").textContent = "クリティカルダメージ!"
    document.getElementById("life").value = hp;
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }else if (rand == 2) {
    document.getElementById("info").textContent = "かわされた!"
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }else if (rand == 3) {
    document.getElementById("info").textContent = "かわされるどころか攻撃された!"
    Myhp = Myhp - 10;
    document.getElementById("Myhp").value = Myhp;
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }
}
function nigeru(){
  gop = Math.floor(Math.random() * 2);
  if(gop == 0){
    alert("うまく逃げられた!");
    document.getElementById("img").style.display = none;
  }else if(gop == 0){
    alert("逃げられなかった...");
  }
}
