function displayPoem(response) {
  console.log("poem generated");

  let poemText = response.data.answer;
  console.log("Raw poem response:", poemText);

  // CLEAN ALL CODE BLOCK FENCES
  poemText = poemText
    .replace(/^```html\s*/i, "") // remove ```html at top
    .replace(/^```/, "") // remove ``` at top if no html
    .replace(/```$/, "") // remove ``` at the end if AI closes the block
    .trim(); // remove extra newlines or spaces

  new Typewriter("#poem", {
    strings: poemText,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  /*alert("Generating poem"); */
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "3df610c9ad6a624314debbt001a9fod7";
  let prompt = `Generate a french poem about ${instructionsInput.value}`;

  let context = `You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-line French poem. 
Use <br /> between each line. Do NOT use backticks, markdown, or wrap the result in code blocks. 
Only output the poem, and separate each line with a <br />. Make sure to follow the user instructions. 
Do not include the Title. Sign the poem with 'SheCodes Ai' and put it inside a <strong> element at the end of the poem and NOT at the beginning.
`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<span class="generating">⌛</span> Generating the French poem about ${instructionsInput.value}`;

  console.log("Generating Poem");
  console.log(`prompt is ${prompt}`);
  console.log(`context is ${context}`);

  axios.get(apiURL).then(displayPoem);

  /* poemElement.innerHTML = "La tombe dit a la rose"; */
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
