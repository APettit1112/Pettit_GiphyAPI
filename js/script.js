console.log("script.js loaded");
// Request URL
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=Sa1PMDgwgUnxP5Fl1QcHIJ7FoEJqzOxG&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

const gifContainer = document.querySelector("#gif-container");
const fetchButton = document.querySelector("#fetch-gif-btn");

fetchButton.addEventListener("click", function() {
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      const images = data.data.map(gif => gif.images.original.url);
      for (let imageURL of images) {
        gifContainer.innerHTML += `<img src="${imageURL}" class="col-3 mb-3">`;
      }
    });
});
