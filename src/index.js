function generatePoem(event) {
  event.preventDefault();

  /*alert("Generating poem"); */

  /*let poemElement = document.querySelector("#poem");*/
  new Typewriter("#poem", {
    strings: ["La tombe dit a la rose"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  /* poemElement.innerHTML = "La tombe dit a la rose"; */
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
