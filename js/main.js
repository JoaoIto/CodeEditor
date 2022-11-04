let save = document.querySelector("#save");
let slide = document.createElement("div");
save.addEventListener("click", (event) => {
  event.preventDefault();
  buildCard();
});

function buildCard() {
  const codeEditor = document.querySelector("#editor");

  let slides = document.querySelector(".swiper-wrapper");
  slide.classList.add("swiper-slide");
  slides.prepend(slide);

  console.log(slides);
  let color = document.getElementById("color");
  let colorValue = color.value;
  let background = document.createElement("div");
  background.classList.add("editor-back");
  background.style.backgroundColor = colorValue;
  slide.appendChild(background);

  let wrapper = document.createElement("div");
  wrapper.classList.add("code-wrapper");
  background.appendChild(wrapper);

  let preview = document.createElement("pre");
  let code = document.createElement("code");
  code.classList.add("preview");
  code.classList.add("hljs");
  preview.appendChild(code);
  code.innerHTML = codeEditor.innerHTML;
  wrapper.appendChild(preview);

  let name = document.getElementById("name-project");
  let desc = document.getElementById("desc-project");
  let languageInput = document.getElementById("language");
  

  let nameValue = name.value;
  let descValue = desc.value;
  let languageValue = languageInput.options[languageInput.selectedIndex].text;

  let card = document.createElement("div");
  card.classList.add("card");
  slide.appendChild(card);

  let title = document.createElement("h4");
  title.classList.add("title-project");
  title.innerText = nameValue;
  card.appendChild(title);

  let description = document.createElement("p");
  description.innerText = descValue;
  card.appendChild(description);

  let languageCard = document.createElement("span");
  languageCard.classList.add("lang-project");
  languageCard.innerText = languageValue;
  card.appendChild(languageCard);
  highlight();
  swiper();
}
