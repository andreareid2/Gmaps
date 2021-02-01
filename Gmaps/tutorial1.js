// Initialize and add the map
let map;

function initMap() {
  // The location of Uluru
  const zurich = {lat: 47.36998535906457, lng: 8.542487463719361};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: zurich,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: zurich,
    map: map,
  });
}