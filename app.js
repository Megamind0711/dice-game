//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчыг 0, хоёрдугаар тоглогчийг 1 гэе
var activatePlayer = 1;
// Тоглогчын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгааа оноог хадгалах хувьсагч
var roundScore = 0;
// шооны аль талаар буусаныг хадгалдаг хувьсагч хэрэгтэй , 1-6 гэсэн утгыг санамсаргүй байдлаар үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

document.getElementById("score-0").textContent = " 0 ";
document.getElementById("score-1").textContent = " 0 ";
document.getElementById("current-0").textContent = " 0 ";
document.getElementById("current-1").textContent = " 0 ";

var diceDom = document.querySelector(".dice");
diceDom.style.display = " none ";

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = " block ";
  diceDom.src = "dice-" + diceNumber + ".png";
});
