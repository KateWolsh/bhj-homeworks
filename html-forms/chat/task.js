const chat = document.querySelector(".chat-widget");

chat.addEventListener("click", function () {
  chat.classList.add("chat-widget_active");
});


const input = document.getElementById("chat-widget__input");
const messages = document.querySelector('.chat-widget__messages');
const robotAnswers = [
  "Привет!",
  "Что бы ты хотел узнать?",
  "Я не понимаю.",
  "Что с тобой?",
  "Пока",
  "Я не могу согласиться."
];

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && input.value.trim() !== "") {
    const valueMassage = input.value;
    const today = new Date();
    const time = today.toLocaleString();
    
    messages.innerHTML += `
      <div class="message message_client">
        <div class="message__time">${time}</div>
        <div class="message__text">${valueMassage}</div>
      </div>
    `;

    const randomIndex = Math.floor(Math.random() * robotAnswers.length);
    const robotMessage = robotAnswers[randomIndex];
    messages.innerHTML += `
      <div class="message">
        <div class="message__time">${time}</div>
        <div class="message__text">${robotMessage}</div>
      </div>
    `;
    input.value = "";
  }
});


