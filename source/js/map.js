var bigPin = {width: 124, height: 106};
var smallPin = {width: 62, height: 53};

function initMap() {
  if(document.body.clientWidth < 768) {
    var mapCenter = {lat: 59.938800, lng: 30.323200};
    var pinCenter = {lat: 59.938800, lng: 30.323200};
    var iconSize = smallPin;

  } else if (document.body.clientWidth >= 768 && document.body.clientWidth < 1300) {
    var mapCenter = {lat: 59.938800, lng: 30.323200};
    var pinCenter = {lat: 59.938800, lng: 30.323200};
    var iconSize = bigPin;

  } else if (document.body.clientWidth >= 1300) {
    var mapCenter = {lat: 59.939065, lng: 30.319335};
    var pinCenter = {lat: 59.938800, lng: 30.323200};
    var iconSize = bigPin;
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: mapCenter
  });

  var image = new google.maps.MarkerImage(
    "img/map-pin.png",
    null,
    null,
    null,
    iconSize
  );

  var marker = new google.maps.Marker({
    position: pinCenter,
    map: map,
    icon: image
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    if(document.body.clientWidth >= 768) {
      marker.setIcon(
        new google.maps.MarkerImage(
          marker.getIcon().url,
          null,
          null,
          null,
          bigPin
        )
      );
    } else {
      marker.setIcon(
        new google.maps.MarkerImage(
          marker.getIcon().url,
          null,
          null,
          null,
          smallPin
        )
      );
    }

    if(document.body.clientWidth >= 1300) {
      map.setCenter(new google.maps.LatLng(59.939065, 30.319335));
    } else {
      map.setCenter(new google.maps.LatLng(59.938800, 30.323200));
    }
  });
}
