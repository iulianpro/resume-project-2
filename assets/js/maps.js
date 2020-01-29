function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 51,
            lng: 10
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";

    var locations = [
        { lat: 51.8615669, lng: -2.2412109 },
        { lat: 51.4468180, lng: -2.6070556 },
        { lat: 52.4796992, lng: -1.9026911 },
        { lat: 46.7693790, lng: 23.5899542 },
        { lat: 46.5446244, lng: 24.5611947 },
        { lat: 44.4361414, lng: 26.1027202 }
    ];

    var markers = locations.map(function (location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });
}