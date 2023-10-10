(function ($, Drupal) {
  Drupal.behaviors.movieGrid = {
    attach: function (context, settings)
    { 
      /* const modal = document.getElementById('myModal');
      const closeModalBtn = document.getElementById('closeModalBtn');
      function closeModal() {
        modal.style.display = 'none';
      } */
      
      // Add click event listener to close button to close the modal
      /* closeModalBtn.addEventListener('click', closeModal);
       */
      // Add click event listener to modal to close it when clicking outside of it
      /* window.addEventListener('click', (event) => {
        if (event.target === modal) {
          closeModal();
        }
      }); */
      /* const closeModalBtn = document.getElementById('closeModalBtn');
      closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });      
 */
    var modal = document.getElementById("myModal");
    /* var openModalBtn = document.getElementById("openModalBtn"); */
    var closeModalBtn = document.getElementById("closeModalBtn");

    

      $('.movie-grid-item').on('click', function() {
        // Extract data from the 'views-row'
        var movieDate = $(this).find('.datetime').attr('datetime');
        var movieTitle = $(this).find('.movie-grid-item__title a').text();
        var movieImageSrc = $(this).next('.movie-grid-item__image').find('img').attr('src');
         var movieDesc = $(this).find('.movie-grid-item__desc').text();
 
        // Update the modal with the extracted data
        $('#myModal .modal-content h2').text(movieTitle);
        $('#myModal .modal-content #modal-date').text(movieDate);
        $('#myModal .modal-content .modal-img img').attr('src', movieImageSrc);
        $('#myModal .modal-content #modal-desc').text(movieDesc);

        // Show the modal
        // $('#myModal').modal('show');
        modal.style.display = "block";
      });

      closeModalBtn.onclick = function() {
        modal.style.display = "none";
      }

    // Close the modal when the background is clicked
      window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
    }
  }
})(jQuery, Drupal); 