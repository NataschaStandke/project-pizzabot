const pizzaArea = document.getElementById("pizzaArea");
let dragSrc = null;

document.querySelectorAll(".palette-item").forEach(item => {
  item.addEventListener("dragstart", e => {
    dragSrc = e.target.dataset.src;
  });
});

pizzaArea.addEventListener("dragover", e => {
  e.preventDefault();
});

pizzaArea.addEventListener("drop", e => {
  e.preventDefault();

  if (!dragSrc) return;

  const rect = pizzaArea.getBoundingClientRect();

  const topping = document.createElement("img");
  topping.src = dragSrc;
  topping.classList.add("dropped");

  topping.style.left = (e.clientX - rect.left - rect.width / 2) + "px";
  topping.style.top = (e.clientY - rect.top - rect.height / 2) + "px";

  pizzaArea.appendChild(topping);

  dragSrc = null;
});
