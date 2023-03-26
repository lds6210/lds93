const gameButton = document.querySelector("#game-button");
const chatButton = document.querySelector("#chat-button");

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
