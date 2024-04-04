document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
      // Pronađite otvoreni lightbox i zatvorite ga
      var lightbox = document.querySelector('.lightbox');
      if (lightbox) {
        lightbox.remove();
      }
    }
  });

  
  