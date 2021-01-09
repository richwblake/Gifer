const api = new API();

document.addEventListener("DOMContentLoaded", () => {

  addListenerToSubmitButton();
})

function addListenerToSubmitButton() {
  const btn = document.getElementById('submit-btn');
  btn.addEventListener('click', function() {
    const searchContent = document.getElementById('search-bar').value;
    api.search(searchContent)
  })
}

function addGifsToDOM(gifs) {
  const gif_div = document.getElementById('gifs');

  while (gif_div.firstChild) {
    gif_div.removeChild(gif_div.lastChild);
  }

  for (const gif of gifs) {
    const gif_img = document.createElement('iframe');
    gif_img.src = gif.embed_url
    gif_div.appendChild(gif_img);
  }
}