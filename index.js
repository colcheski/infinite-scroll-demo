const container = document.querySelector('.container');
const apiUrl = 'https://api.unsplash.com/photos/random';
const accessKey = '';
let imageLoaded = false;

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

function handleScroll() {
  if (!imageLoaded && window.scrollY + window.innerHeight + 300 >= document.documentElement.scrollHeight) {
    loadImage();
    imageLoaded = true; // Set the flag to prevent repeated calls to endpoint
  }

  if (imageLoaded && window.scrollY + window.innerHeight + 300 < document.documentElement.scrollHeight) {
    imageLoaded = false; // Reset the flag to load the next image
  }
};

function loadInitialImages() {
  // Load a few images so we have enough to scroll
  let imagesLoaded = 0;
  while(imagesLoaded < 3) {
    loadImage();
    imagesLoaded++;
  }
}

window.addEventListener('scroll', handleScroll);

loadInitialImages();