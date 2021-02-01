// Tutorial from Google Google Maps Platform

let map;

function initMap() {
	
  map = new google.maps.Map(document.getElementById("map"), 
  {
    center: { lat: -34.191568, lng: 18.655676},
    zoom: 9,
  }
  );
  
  // Create a marker
  const marker = new google.maps.Marker({
    position: { lat: -33.921691, lng: 18.419704},
    map: map,
  });
  
}
