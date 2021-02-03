function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {lat: 35.04160475796136, lng: -41.2718805070537},
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
	// add click listener to each marker (adapted from: https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow)
	google.maps.event.addListener(marker, 'click', function(evt) {
	  infoWin.setContent(location.info);
      infoWin.open(map, marker);
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
  // Add new marker with related content in infowindow (adapted from Google Maps Platform tutorial: https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple#maps_infowindow_simple-javascript
  const contentString =
    '<div>' +
    '<h2>Switzerland</h2>' +
    '<div>' +
    "<p>The Alpine region of Switzerland is characterised by a unique natural heritage due to its complex geography. After completing my MSc in Zurich, I worked on ecological projects across the Alpine region of Switzerland in order to understand the impact of climate change and other factors on species distributions.</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
  });
  const marker = new google.maps.Marker({
    position: {lat: 46.82135596006453, lng: 8.079794319758518},
    map,
    title: "Switzerland",
	icon: {
      path: google.maps.SymbolPath.CIRCLE,
      scale: 10,
    },
  });
  marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}
const locations = [
{lat: -1.0847935160768962, lng: -77.61696248483315, info: "Jatun Sacha"},
{lat: 28.127651164452747, lng: -15.436184568581691},
{lat: 49.380521819197085, lng: -82.40328578619902},
{lat: 48.38293999952049, lng: -89.23475757259328},
{lat: 49.780394206044974, lng: -94.49326499452869},
{lat: 50.11822684893797, lng: -91.95627844489808},
{lat: 45.8983357422639, lng: -77.25445615678267},
{lat: 46.88328029017429, lng: 9.482322801935783},
{lat: 46.92771997744363, lng: 9.5364336241691},
{lat: 47.449879991658534, lng: 8.683584179490559},
{lat: 46.195434084976625, lng: 9.019779761907323},
];
