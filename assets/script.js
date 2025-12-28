const slider = document.getElementById("styleSlider");
const pizzaBase = document.getElementById("pizzaBase");

slider.addEventListener("input", () => {
  pizzaBase.src = `images/pizza-base-${slider.value}.png`;
});


const checkboxes = document.querySelectorAll("input[type='checkbox']");

checkboxes.forEach(box => {
  box.addEventListener("change", () => {
    const topping = document.getElementById(box.dataset.top);
    topping.classList.toggle("hidden", !box.checked);
  });
});
