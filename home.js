const gameButton = document.querySelector("#game-button");
const chatButton = document.querySelector("#chat-button");
const pictureButton = document.querySelector("#picture-button");
const spaGPTButton = document.querySelector("#spaGPT-button");
const fastcamButton = document.querySelector("#fastcam-button");

gameButton.textContent = "게임";
chatButton.textContent = "chatGPT";
pictureButton.textContent = "인생네컷";
spaGPTButton.textContent = "spaGPT";
fastcamButton.textContent = "소셜로그인";

gameButton.addEventListener("click", () => {
  gameButton.textContent = "로딩 중...";
  location.href = "./gameList/index.html";
});

chatButton.addEventListener("click", () => {
  chatButton.textContent = "로딩 중...";
  location.href = "./chatgpt/index.html";
});

pictureButton.addEventListener("click", () => {
  pictureButton.textContent = "로딩 중...";
  location.href = "./pictureOfLife/index.html";
});

spaGPTButton.addEventListener("click", () => {
  spaGPTButton.textContent = "로딩 중...";
  location.href = "./spaGPT/index.html";
});

fastcamButton.addEventListener("click", () => {
  fastcamButton.textContent = "로딩 중...";
  location.href = "./fastcam/index.html";
});