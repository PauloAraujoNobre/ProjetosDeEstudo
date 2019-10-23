/*
 * Learning Google Maps Geocoding by example
 * Miguel Marnoto
 * 2015 - en.marnoto.com
 *
 */

var map;
var marker;


// function initialize() {

// 	var mapOptions = {
// 		center: new google.maps.LatLng(40.680898,-8.684059),
// 		zoom: 11,
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	};

// 	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

// }

// google.maps.event.addDomListener(window, 'load', initialize);


function searchAddress() {

  var geocoder = new google.maps.Geocoder();
  
  const locations = [
    {'location': {lat: -3.744042, lng: -38.535557}},
    {'location': {lat: -3.737545, lng: -38.570824}}
  ]
  locations.forEach(loc => {
    geocoder.geocode(loc, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
          console.log("endereço mais completo: ", results[0].formatted_address)
          for (let index = 1; index < results.length; index++) {
            const result = results[index];
            console.log("outros endereços possíveis: ", result.formatted_address)
          }
          console.log("--------------------------------")
      } else {
        alert("ocorreu esse erro:" + status)
      }
    });
  });

	// geocoder.geocode({'location': {lat: -3.744042, lng: -38.535557}}, function(results, status) {

	// 	if (status == google.maps.GeocoderStatus.OK) {
  //       console.log("endereço", results[6].formatted_address)
	// 	} else {
  //     alert("ocorreu esse erro:" + status)
  //   }
	// });

}

function createMarker(latlng) {

  if(marker != undefined && marker != ''){
    marker.setMap(null);
    marker = '';
  }

  marker = new google.maps.Marker({
    map: map,
    position: latlng
  });

  return marker
}