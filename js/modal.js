// Get the modal For Branding Design

var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var images = document.getElementsByClassName('myLogos');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    modal.style.display = 'flex';
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

// Get the <span> element that closes the modal
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
