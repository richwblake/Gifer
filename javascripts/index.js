const api = new API();

document.addEventListener("DOMContentLoaded", () => {
  addListenerToTextField();
})

function addListenerToTextField() {
  const textField = document.getElementById('search-bar');
  textField.addEventListener('keyup', function(event) {
    const searchContent = textField.value;
    api.search(searchContent);
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