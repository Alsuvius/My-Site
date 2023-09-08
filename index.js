// Page load animations

window.onload = function () {
	var topBanners = document.querySelectorAll('.top-banner');
	var header1 = document.querySelectorAll('h1');
	var header2 = document.querySelectorAll('h2');

	topBanners.forEach(function (topBanner) {
		setTimeout(function () {
			topBanner.style.minHeight = '40vh';
		}, 4000);
	});
	header1.forEach(function (header1) {
		setTimeout(function () {
			header1.style.opacity = '90%';
		}, 500);
	});
	header2.forEach(function (header2) {
		setTimeout(function () {
			header2.style.opacity = '90%';
		}, 2500);
	});
};

// Tilly DNA pop-up

document.addEventListener('DOMContentLoaded', function () {
	const popupTriggers = document.querySelectorAll('.mixed-breed');
	const popups = document.querySelectorAll('.dna-image-popup');

	function showPopup(index) {
		popups[index].style.display = 'block';
	}

	function closePopup(index) {
		popups[index].style.display = 'none';
	}

	popupTriggers.forEach(function (trigger, index) {
		trigger.addEventListener('click', function () {
			showPopup(index);
		});

		trigger.addEventListener('keydown', function (event) {
			if (event.key === 'Enter' || event.keyCode === 13) {
				showPopup(index);
			}

			if (event.key === 'Escape' || event.keyCode === 27) {
				closePopup(index);
			}
		});
	});

	popups.forEach(function (popup, index) {
		popup.addEventListener('click', function (event) {
			if (event.target === popup) {
				closePopup(index);
			}
		});
	});
});

//Youtube pop-ups

document.addEventListener("DOMContentLoaded", function() {
  const popupLinks = document.querySelectorAll(".popup-link");
  const overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  
  popupLinks.forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault();
          const videoId = link.getAttribute("data-video-id");
          const iframe = createVideoIframe(videoId);
          
          overlay.innerHTML = "";
          overlay.appendChild(iframe);
          document.body.appendChild(overlay);
          overlay.style.display = "block";
      });
  });
  
  overlay.addEventListener("click", function() {
      const iframe = overlay.querySelector("iframe");
      if (iframe) {
          iframe.src = ""; // Stop the video by clearing the src
      }
      overlay.style.display = "none";
  });
  
  function createVideoIframe(videoId) {
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.className = "popup-video";
      iframe.setAttribute("width", "640");
      iframe.setAttribute("height", "360");
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "true");
      return iframe;
  }
});