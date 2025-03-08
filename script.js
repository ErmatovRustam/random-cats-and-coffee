console.log("Hello");
const url = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".content");
const button = document.querySelector(".btn");

// Ensure the section always has the correct class
section.classList.add("cats");

button.addEventListener("click", getCats);

randomCatImg = (json) => {
  let photo = json[0].url;

  let div = document.createElement("div");
  div.classList.add("cat-div");

  let image = document.createElement("img");
  image.src = photo;
  image.alt = "Random Cat";

  div.appendChild(image);
  section.appendChild(div);
};

async function getCats() {
  section.innerHTML = ""; // Clears previous image
  try {
    const response = await fetch(url);
    const data = await response.json();
    randomCatImg(data);
  } catch (error) {
    console.log("Following error happened: " + error);
  }
}
