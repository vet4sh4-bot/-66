// ЗДЕСЬ ПОТОМ БУДУТ:
// - ПЕРЕХОДЫ
// - ЗВУКИ
// - АНИМАЦИИ
// - СОСТОЯНИЯ СНА

const buttons = document.querySelectorAll(".menu-button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    console.log("ВЫБОР:", btn.innerText);
  });
});
