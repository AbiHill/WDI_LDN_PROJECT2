/* global google */
function initMap() {
  // const venue = { lat: 50.829049, lng: -0.139494 };
  const venue = { 'lat': parseInt($('#map')[0].dataset.lat), 'lng': parseInt($('#map')[0].dataset.long) };

  const map = new google.maps.Map($('#map')[0], {
    zoom: 5,
    center: venue
  });
  new google.maps.Marker({
    position: venue,
    map: map
  });
}

$(() => {
  $('form').validate();
  initMap();
});
