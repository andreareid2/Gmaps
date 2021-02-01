// code for clustering and adding info window adapted from https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 21.946629500203038, lng: -78.1834635059868},
	mapTypeId: 'satellite'
  });
  var infoWin = new google.maps.InfoWindow();
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location.info);
      infoWin.open(map, marker);
    })
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
  });

}

const locations = [
{lat: -1.0847935160768962, lng: -77.61696248483315, info: "Jatun Sacha: Nature Conservation in the Amazon"},
{lat: 28.127651164452747, lng: -15.436184568581691, info: "Las Palmas de Gran Canaria: Conservation Genetics of a Rare plant species"},
{lat: 49.380521819197085, lng: -82.40328578619902, info: "Kapuskasing Site: Effects of Forestry on Biodiversity"},
{lat: 48.38293999952049, lng: -89.23475757259328, info: "Thunder Bay Site: Effects of Forestry on Biodiversity"},
{lat: 49.780394206044974, lng: -94.49326499452869, info: "Kenora Site: Effects of Forestry on Biodiversity"},
{lat: 50.11822684893797, lng: -91.95627844489808, info: "Sioux Lookout Site: Effects of Forestry on Biodiversity"},
{lat: 45.8983357422639, lng: -77.25445615678267, info: "Petawawa Site: Effects of Forestry on Biodiversity"},
{lat: 46.88328029017429, lng: 9.482322801935783, info: "Calanda Mountain: Climate Change and Species Distributions"},
{lat: 46.92771997744363, lng: 9.5364336241691, info: "Untervaz: Common Garden Site for Invasive Solidago canadensis"},
{lat: 47.449879991658534, lng: 8.683584179490559, info: "ETH Eschikon: Greenhouse Biodiversity Experiments"},
{lat: 46.195434084976625, lng: 9.019779761907323, info: "Bellinzona Office for the WWF European Alpine Programme"},
{lat: -17.739715524440804, lng: 177.1511685460128, info: "Coral Cay Conservation: Mamanuca Islands Base"},
{lat: -16.786967881751423, lng: 177.5032288832807, info: "Coral Cay Conservation: Yasawa Islands Base"}
];
