
(function ($, Drupal) {
  Drupal.behaviors.movieGrid = {
    attach: function (context, settings) {
      /* console.log('yash'); */
      let modal = document.getElementById("myModal"); 
      let closeModalBtn = document.getElementById("closeModalBtn");

      $('.block-views-blockmovie-grid-block-1 .view-content').on("click", function (event) {
        console.log(event.target.classList)
        /* window.random = event.target.classList */
        if (event.target.classList.contains("movie-grid-item")) {
          // Find the closest '.views-row' ancestor
          let movieItem = event.target.closest(".views-row");
          console.log(movieItem);

          if (movieItem) {
            // Extract data from the closest '.views-row'
            let movieDate = movieItem.querySelector(".datetime").getAttribute("datetime");
            let movieTitle = movieItem.querySelector(".movie-grid-item__title a").textContent;
            let movieImageSrc = movieItem
              .querySelector(".movie-grid-item__image img")
              .getAttribute("src");
            let movieDesc = movieItem.querySelector(".movie-grid-item__desc").textContent;

            // Update the modal with the extracted data
            $("#myModal .modal-content h2").text(movieTitle);
            $("#myModal .modal-content #modal-date").text(movieDate);
            $("#myModal .modal-content .modal-img img").attr("src", movieImageSrc);
            $("#myModal .modal-content #modal-desc").text(movieDesc);
            // Show the modal
            modal.style.display = "block";
          }
        }
      });

      closeModalBtn.onclick = function () {
        modal.style.display = "none";
      };

      // Close the modal when the background is clicked
      window.onclick = function (event) {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };
    },
  };
})(jQuery, Drupal);
