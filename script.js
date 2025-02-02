const messages = [
    "Sure ka?",
    "Really sure??",
    "Pag sure gud ba?",
    "Mahal ko please!!...",
    "Just think about it!",
    "If you say no again, magiging sad me 🥺..",
    "Iiyak na me tamo...",
    "Lumuluha na me oh 😓...",
    "Ok fine, I will stop asking...",
    "Just kidding, pag yes na ba! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}