function API() {
  // Create a key at giphy.com and replace API_KEY with your own personal key
  this.key = API_KEY
  this.search_endpoint = 'https://api.giphy.com/v1/gifs/search?&api_key=fenzrRrpQAzbw4nCQJQrTjRKMZTfdTUf&q='
}

API.prototype.search = function(query) {
 fetch(this.search_endpoint + query)
 .then(resp => resp.json())
 .then(json => addGifsToDOM(json.data))
}
