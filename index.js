// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener('click', () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
    clonedBtn.style.color="#ffffff"
    clonedBtn.style.backgroundColor="#a78b71"
document.body.appendChild(clonedBtn)
})

// здесь можете создать EventListener для вто рой кнопки