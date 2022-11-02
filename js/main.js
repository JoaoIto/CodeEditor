const save = document.querySelector("#save");

save.addEventListener("click", (event) => {
  event.preventDefault();
  montaCard();
  console.log(event)
});

function montaCard() {
  const codeEditor = document.querySelector("#editor");

  const slides = document.querySelector(".swiper-wrapper");
  const slide = document.createElement("div");
  slide.classList.add("swiper-slide");
  slides.prepend(slide);

  console.log(slides)

  const background = document.createElement("div");
  background.classList.add("editor-back");
  slide.appendChild(background);

  const card = document.createElement("div");
  card.classList.add("code-wrapper");
  background.appendChild(card);

  const code = document.createElement("code");
  code.classList.add("preview");
  code.classList.add("hljs");
  code.innerHTML = codeEditor.innerHTML;
  card.appendChild(code);
  swiper();
}