const gameButton = document.querySelector("#game-button");
const chatButton = document.querySelector("#chat-button");
const pictureButton = document.querySelector("#picture-button");

// gameButton.textContent = "게임";
// chatButton.textContent = "Chat GPT";
// pictureButton.textContent = "인생네컷";

gameButton.addEventListener("click", () => {
  gameButton.style.backgroundColor = "#ff9800";
  gameButton.textContent = "로딩 중...";
  // 페이지 이동
  location.href = "./gameList/index.html";
});



chatButton.addEventListener("click", () => {
  chatButton.style.backgroundColor = "#9c27b0";
  chatButton.textContent = "로딩 중...";
  location.href = "./chatgpt/index.html";
});

pictureButton.addEventListener("click", () => {
  chatButton.style.backgroundColor = "#4c2800";
  chatButton.textContent = "로딩 중...";
  location.href = "./pictureOfLife/index.html";
});