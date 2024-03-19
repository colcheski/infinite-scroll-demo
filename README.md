# infinite-scroll-demo
A small application to create an infinite scroll using unsplash api with random images

**If testing without an API is desired, you can add an image to the root directory and replace
calls to loadImage with something like this to play around with before hooking into a real API:**

function loadImageStatic() {
   const img = document.createElement('img');
   img.src = './IMG_0425.jpg';
   //img.style.height = '400px'
   container.appendChild(img);
 }
