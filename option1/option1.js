// code for clustering and adding info window adapted from https://stackoverflow.com/questions/40047210/integrate-google-maps-markerclusterer-with-infowindow

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 21.946629500203038, lng: -78.1834635059868},
	// add "Aubergine" style from https://mapstyle.withgoogle.com/
	styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
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
    imagePath: 'http://andreareid2.github.io/Gmaps/option1/m/m'
  });

}

const locations = [
{lat: -1.0847935160768962, lng: -77.61696248483315, info: "<img src='images/JatunSacha.jpg' height='200px' width='300px'><h3 class='infoWin'>Jatun Sacha, Ecuador</h3><p class='infoWin'>Nature Conservation in the Amazon</p>"
},
{lat: 28.127651164452747, lng: -15.436184568581691, info: "<img src='images/Gran_Canaria.jpg' height='200px' width='300px'><h3 class='infoWin'>Las Palmas de Gran Canaria</h3><p class='infoWin'>Conservation Genetics of a Rare plant species</p>"
},
{lat: 49.380521819197085, lng: -82.40328578619902, info: "<img src='images/forest.jpg' height='200px' width='250px'><h3 class='infoWin'>Kapuskasing Site</h3><p class='infoWin'>Effects of Forestry on Biodiversity</p>"},
{lat: 48.38293999952049, lng: -89.23475757259328, info: "<img src='images/forest.jpg' height='200px' width='250px'><h3 class='infoWin'>Thunder Bay Site</h3><p class='infoWin'>Effects of Forestry on Biodiversity</p>"},
{lat: 49.780394206044974, lng: -94.49326499452869, info: "<img src='images/forest.jpg' height='200px' width='250px'><h3 class='infoWin'>Kenora Site</h3><p class='infoWin'>Effects of Forestry on Biodiversity</p>"},
{lat: 50.11822684893797, lng: -91.95627844489808, info: "<img src='images/forest.jpg' height='200px' width='250px'><h3 class='infoWin'>Sioux Lookout Site</h3><p class='infoWin'>Effects of Forestry on Biodiversity</p>"},
{lat: 45.8983357422639, lng: -77.25445615678267, info:
"<img src='images/forest.jpg' height='200px' width='250px'><h3 class='infoWin'>Petawawa Site</h3><p class='infoWin'>Effects of Forestry on Biodiversity</p>"
},
{lat: 46.88328029017429, lng: 9.482322801935783, info:
"<img src='images/calanda.jpg' height='200px' width='300px'><h3 class='infoWin'>Calanda Mountain, Graubuenden</h3><p class='infoWin'>Effect of Climate Change on Species Distributions</p>"
},
{lat: 46.92771997744363, lng: 9.5364336241691, info: 
"<img src='images/untervaz.jpg' height='200px' width='300px'><h3 class='infoWin'>Untervaz, Graubuenden</h3><p class='infoWin'>Common Garden Site for Invasive Solidago canadensis</p>"
},
{lat: 47.449879991658534, lng: 8.683584179490559, info: 
"<img src='images/alps.jpg' height='200px' width='300px'><h3 class='infoWin'>ETH Zurich - Eschikon</h3><p class='infoWin'>Greenhouse biodiversity experiments and genetic diversity analyses.</p>"
},
{lat: 46.195434084976625, lng: 9.019779761907323, info: "<img src='images/ealp.jpg' height='200px' width='300px'><h3 class='infoWin'>WWF European Alpine Programme</h3><p class='infoWin'>Collaborative conservation initiatives across four Alpine countries</p>"},
{lat: -17.739715524440804, lng: 177.1511685460128, info: 
"<img src='images/fiji_mamanucas.jpg' height='200px' width='300px'><h3 class='infoWin'>Coral Cay Conservation</h3><p class='infoWin'>Coral reef surveying in the Mamanuca Islands</p>"
},
{lat: -16.786967881751423, lng: 177.5032288832807, info:"<img src='images/fiji_mamanucas.jpg' height='200px' width='300px'><h3 class='infoWin'>Coral Cay Conservation</h3><p class='infoWin'>Coral reef surveying in the Yasawa Islands</p>"}
];
