//Тоглогчийн ээлжийг хадгалах хувьсагч, нэгдүгээр тоглогчыг 0, хоёрдугаар тоглогчийг 1 гэе
var activatePlayer = 0;
// Тоглогчын цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
// Тоглогчын ээлжиндээ цуглуулж байгааа оноог хадгалах хувьсагч
var roundScore = 0;
// шооны аль талаар буусаныг хадгалдаг хувьсагч хэрэгтэй , 1-6 гэсэн утгыг санамсаргүй байдлаар үүсгэж өгнө.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// Программ эхлэхэд бэлгэе
document.getElementById("score-0").textContent = " 0 ";
document.getElementById("score-1").textContent = " 0 ";
document.getElementById("current-0").textContent = " 0 ";
document.getElementById("current-1").textContent = " 0 ";

var diceDom = document.querySelector(".dice");
diceDom.style.display = " none ";
// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function() {
  // 1-6 хүртэл санамсаргүй нэг тоо гаргаж авна.
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  // шооны зургыг вэб дээр гаргаж ирнэ.
  diceDom.style.display = " block ";
  // буусан санамсаргүй тоонд харгалзах зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  // Буусан тоглогчын оноо 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдүүнэ.
  if (diceNumber !== 1) {
    // 1 ээс ялгаатай буулаа.Буусан тоог тоглогчмд нэмж өгнө.
    roundScore = roundScore + diceNumber;
    document.getElementById(
      "current-" + activatePlayer
    ).textContent = roundScore;
  } else {
    // 1 ээс ялгаатай буусан тул тоглогчийн ээлжийг энэ хэсгт сольж өгнө.
    switchToNextPlayer();
  }
});

// HOLD товчны эвент листенер
document.querySelector(".btn-hold").addEventListener("click", function() {
  // Уг тоглогчийн ээлжийн оноог глобаль оноон дээр нэмнэ.
  scores[activatePlayer] = scores[activatePlayer] + roundScore;
  // Дэлгэц дээр оноог өөрчилнө.
  document.getElementById("score-" + activatePlayer).textContent =
    scores[activatePlayer];
  // Уг тоглогчын хожсон эсэхийг шалгах (оноо нь 100 аас их буюу тэнцүүг шалгах)
  if (scores[activatePlayer] >= 100) {
    // Winner ийг гаргана.
    document.getElementById("name-" + activatePlayer).textContent =
      "WINNER !!!";
    document
      .querySelector(".player-" + activatePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activatePlayer + "-panel")
      .classList.remove("active");
  } else {
    // Тоглогчын ээлжийг солино.
    switchToNextPlayer();
  }
});

// энэ функц нь дараачийн тоглогч руу шилжүүлдэг.
function switchToNextPlayer() {
  // тоглогчын ээлжиндээ цуглуулсан оноог 0 болгоно.
  roundScore = 0;
  document.getElementById("current-" + activatePlayer).textContent = 0;
  // Тоглогчын ээлжийг нөгөө тоглогч руу шилжүүлнэ.
  activatePlayer === 0 ? (activatePlayer = 1) : (activatePlayer = 0);
  // улаан цэгийг шилжүүлнэ.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  // Ээлж солигдох үед шоог түр алга болгоно.
  diceDom.style.display = " none ";
}

// Шинэ тоглоом эхлүүлэх эвент листенер
document.querySelector(".btn-new").addEventListener("click", function)
