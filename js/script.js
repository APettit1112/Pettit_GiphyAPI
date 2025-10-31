console.log("script.js loaded");
// Request URL
const endpoint = "https://api.giphy.com/v1/gifs/search?api_key=Sa1PMDgwgUnxP5Fl1QcHIJ7FoEJqzOxG&q=cats&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips";

fetch(endpoint)
  .then(response => response.json())
  .then(data => {
    const images = data.data.map(gif => gif.images.original.url);
    console.log(images);
  });