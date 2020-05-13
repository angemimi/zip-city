$(document).ready(function() {
  $('[name="zipcode"]').off('keydown').on('keydown', _.debounce(function(e) {
    // e.preventDefault();
    zipcity.getFrCity($(e.target).val(), $('#cities'), $('#city-name'));
  }, 300));
});