/* global google */
function initMap() {
  // const venue = { lat: 50.829049, lng: -0.139494 };
  const venue = { 'lat': parseFloat($('#map')[0].dataset.lat, 10), 'lng': parseFloat($('#map')[0].dataset.long, 10) };
  console.log(venue);
  //google maps display
  const map = new google.maps.Map($('#map')[0], {
    zoom: 14,
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
