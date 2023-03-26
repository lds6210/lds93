// OpenAI API Key
const apiKey = "";

// 요청 정보
const prompt = "Hello,";
const model = "gpt-3.5-turbo-0301";
const maxTokens = 10;
const temperature = 0.5;

// DOM 객체 참조
const chatbox = document.querySelector(".chatbox");
const messageInput = document.getElementById("message");
const sendButton = document.getElementById("send");

// 메시지 추가 함수
function addMessage(message, isBot = false) {
  const chatboxList = chatbox.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = message;
  if (isBot) {
    li.style.fontWeight = "bold";
  }
  chatboxList.appendChild(li);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// API 호출 함수
function callOpenAI(message) {
  const url = `https://api.openai.com/v1/engines/${model}/completions`;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
  const data = {
    prompt: message,
    max_tokens: maxTokens,
    temperature: temperature,
  };

  fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      const text = data.choices[0].text.trim();
      addMessage(text, true);
    })
    .catch((error) => console.error(error));
}

// Send 버튼 클릭 이벤트 처리
sendButton.addEventListener("click", () => {
  const message = messageInput.value.trim();
  if (message) {
    addMessage(message);
    callOpenAI(message);
    messageInput.value = "";
  }
});

// 엔터키 입력 이벤트 처리
messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
    event.preventDefault();
  }
});
