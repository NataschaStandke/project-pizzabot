const pizzaArea = document.getElementById("pizzaArea");
let dragSrc = null;
let dragSize = { w: 0, h: 0 };

document.querySelectorAll(".palette-item").forEach(item => {
  item.addEventListener("dragstart", e => {
    dragSrc = e.target.dataset.src;

    const r = e.target.getBoundingClientRect();
    dragSize.w = r.width;
    dragSize.h = r.height;
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

  if (dragSize.w > 0) {
    topping.style.width = dragSize.w + "px";
    topping.style.height = "auto";
  }

  const placeTopping = () => {
    const w = topping.width || topping.naturalWidth || 0;
    const h = topping.height || topping.naturalHeight || 0;

    let left = e.clientX - rect.left - w / 2;
    let top = e.clientY - rect.top - h / 2;

    left = Math.max(0, Math.min(left, rect.width - w));
    top = Math.max(0, Math.min(top, rect.height - h));

    topping.style.left = left + "px";
    topping.style.top = top + "px";
  };

  topping.onload = placeTopping;
  pizzaArea.appendChild(topping);
  placeTopping();

  dragSrc = null;
  dragSize.w = 0;
  dragSize.h = 0;
});
