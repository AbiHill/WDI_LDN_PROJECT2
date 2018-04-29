/* global google */
function initMap() {
  // const venue = { lat: 50.829049, lng: -0.139494 };
  const art = { 'lat': parseInt($('#map')[0].dataset.lat), 'lng': parseInt($('#map')[0].dataset.lng) };

  //google maps display
  const map = new google.maps.Map($('#map')[0], {
    zoom: 14,
    center: art
  });
  new google.maps.Marker({
    position: art,
    map: map
  });
}

$(() => {
  $('form').validate();
  initMap();
});
