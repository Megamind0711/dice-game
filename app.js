//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчыг 0, хоёрдугаар тоглогчийг 1 гэе
var activatePlayer = 1;
// Тоглогчын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгааа оноог хадгалах хувьсагч
var roundScore = 0;
// шооны аль талаар буусаныг хадгалдаг хувьсагч хэрэгтэй , 1-6 гэсэн утгыг санамсаргүй байдлаар үүсгэж өгнө.
var dice = Math.floor(Math.random() * 6) + 1;
/* <div class="player-score" id="score-0">43</div> */
document.querySelector("#score-0").textContent = 0;

document.querySelector("#score-1").textContent = 0;

document.querySelector("#current-0").textContent = 0;

document.querySelector("#current-1").textContent = 0;

document.querySelector(".dice").style.display = " none ";
// console.log("Шоо :" + dice);
