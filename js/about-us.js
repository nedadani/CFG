function initMap() {
// The location of London
var london = {lat: 51.507552, lng: -0.127756};
// The map, centered at London
var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 13, center: london});
// The marker, positioned at London
var marker = new google.maps.Marker({position: london, map: map});
}