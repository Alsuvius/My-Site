document.addEventListener("DOMContentLoaded", function() {
    var topBanners = document.querySelectorAll('.top-banner');
    var header1 = document.querySelectorAll('h1');
    var header2 = document.querySelectorAll('h2');
  
    topBanners.forEach(function(topBanner) {
      setTimeout(function() {
        topBanner.style.minHeight = '40vh';
      }, 4000); // Add a 3-second delay to change min-height
    });
    header1.forEach(function(header1) {
        setTimeout(function() {
          header1.style.opacity = '90%';
        }, 1000); // Add a 3-second delay to change min-height
      });
    header2.forEach(function(header2) {
        setTimeout(function() {
            header2.style.opacity = '90%';
        }, 2000); // Add a 3-second delay to change min-height
      });
  });
  