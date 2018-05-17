var big_pin = {width: 124, height: 106};

function initMap() {
  if(document.body.clientWidth < 768) {
    var mapCenter = {lat: 59.938800, lng: 30.323200};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: mapCenter
    });

    var image = {
      url: "img/map-pin.png",
      scaledSize: {width: 62, height: 53}
    };

    var marker = new google.maps.Marker({
      position: mapCenter,
      map: map,
      icon: image
    });

  } else if (document.body.clientWidth >= 768 && document.body.clientWidth < 1300) {
    var mapCenter = {lat: 59.938800, lng: 30.323200};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: mapCenter
    });

    var image = {
      url: "img/map-pin.png",
      scaledSize: {width: 124, height: 106}
    };

    var marker = new google.maps.Marker({
      position: mapCenter,
      map: map,
      icon: image
    });

  } else if (document.body.clientWidth >= 1300) {
    var mapCenter = {lat: 59.939065, lng: 30.319335};
    var pinCenter = {lat: 59.938800, lng: 30.323200};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 17,
      center: mapCenter
    });

    var image = {
      url: "img/map-pin.png",
      scaledSize: {width: 124, height: 106}
    };

    var marker = new google.maps.Marker({
      position: pinCenter,
      map: map,
      icon: image
    });

  var center = map.getCenter();

    google.maps.event.addDomListener(window, 'resize', function() {
      if(document.body.clientWidth >= 768) {
        marker.setIcon(
          new google.maps.MarkerImage(
            marker.getIcon().url,
            null,
            null,
            null,
            new google.maps.Size(124, 106)
          )
        );
      } else {
        marker.setIcon(
          new google.maps.MarkerImage(
            marker.getIcon().url,
            null,
            null,
            null,
            new google.maps.Size(62, 53)
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
}

