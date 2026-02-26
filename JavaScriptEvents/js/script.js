const title = document.querySelector("#title");
const titleInput = document.querySelector("#titleInput");
const bgSelect = document.querySelector("#bgSelect");
const button = document.querySelector(".clickButton");
const text = document.querySelector("#text");

titleInput.addEventListener("input", () => {
  title.textContent = titleInput.value;
});

bgSelect.addEventListener("change", () => {
  document.body.style.backgroundColor = bgSelect.value;
});

button.addEventListener("click", () => {
  if (text.style.display === "none") text.style.display = "block";
  else text.style.display = "none";
});
