// Fetching Cat Image
const catUrl = "https://api.thecatapi.com/v1/images/search";
const section = document.querySelector(".content");
const catButton = document.querySelector(".btn-cat");

catButton.addEventListener("click", getCats);

const randomCatImg = (json) => {
    let photo = json[0].url;
    section.classList.add("cats");

    let image = document.createElement("img");
    image.src = photo;
    image.classList.add("img-cat");
    image.alt = photo;
    section.appendChild(image);
};

async function getCats() {
    // Clear the content section before displaying new cat image
    section.innerHTML = "";

    try {
        const response = await fetch(catUrl);
        const data = await response.json();
        randomCatImg(data);
    } catch (error) {
        console.log("This error happened: " + error);
    }
}

// Fetching Coffee Data
async function getCoffeeData() {
    // Clear the content section before displaying coffee data
    section.innerHTML = "";

    try {
        const response = await fetch("https://api.sampleapis.com/coffee/hot");
        const coffee = await response.json();

        // Adding data dynamically
        coffee.forEach((cof) => {
            const div = document.createElement("div");
            div.classList.add("coffee");
            const h1 = document.createElement("h1");
            const h5 = document.createElement("h5");
            const p = document.createElement("p");
            const img = document.createElement("img");

            h1.innerText = cof.title;
            h5.innerText = cof.description;
            p.innerText = `Ingredients: ${cof.ingredients ? cof.ingredients.join(", ") : "Unknown"}`;
            img.src = cof.image;
            img.classList.add("coffee-img");

            // Handling image load error
            img.onerror = () => {
                img.src = "https://via.placeholder.com/150"; // Placeholder image if original fails
            };

            div.appendChild(h1);
            div.appendChild(h5);
            div.appendChild(p);
            div.appendChild(img);
            section.appendChild(div);
        });
    } catch (err) {
        console.log("This error happened: " + err);
        alert("An error occurred while fetching coffee data.");
    }
}

document.querySelector(".btn-coffee").addEventListener("click", getCoffeeData);
