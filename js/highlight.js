const language = document.querySelector(".language");
const area = document.querySelector(".code-wrapper");
const btn = document.querySelector("#highlight");

function highlight() {
  const code = area.innerText;
  area.innerHTML = `<code class="preview hljs 
  ${language.value}" contenteditable="true" 
  aria-label="Editor de code"></code>`;

  area.querySelector("code").textContent = code;
  hljs.highlightElement(area.querySelector("code"));
}

btn.addEventListener("click", () => {
    highlight();
})