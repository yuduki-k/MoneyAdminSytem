var rand = 0;
var hp = 35;
var Myhp = 45;
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
    document.getElementById("info").textContent = "反撃された!"
    hp = hp - 5;
    document.getElementById("hp").textContent = hp;
    document.getElementById("life").value = hp;
    Myhp = Myhp - 5;
    document.getElementById("Myhp").value = Myhp;
    if (0 > hp || hp == 0) {
      alert("クリア!");
      document.getElementById("btn").disabled = true;
    }
  }
}
