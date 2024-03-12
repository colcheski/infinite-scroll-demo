const container = document.querySelector('.container');
const apiUrl = 'https://api.unsplash.com/photos/random';
const accessKey = '' // Your unsplash access key here;

function loadImage() {
  axios.get(apiUrl, {
    params: {
      client_id: accessKey
    }
  })
  .then(response => {
    const img = document.createElement('img');
    img.src = response.data.urls.regular;
    container.appendChild(img);
  })
  .catch(error => {
    console.error('Error loading image:', error);
  });
}

loadImage();

window.addEventListener('scroll', () => {
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
    loadImage();
  }
})