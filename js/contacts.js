var map;
function initialize() {
  var myLatlng = new google.maps.LatLng(41.668869,-8.369715);
  var myOptions = {
    zoom: 16,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.HYBRID
  }

  map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);

  var southWest = new google.maps.LatLng(47.668869,-2.369715);
  var northEast = new google.maps.LatLng(41.668869,-8.369715);
  var bounds = new google.maps.LatLngBounds(southWest,northEast);
  var lngSpan = northEast.lng() - southWest.lng();
  var latSpan = northEast.lat() - southWest.lat();
  var location = new google.maps.LatLng(southWest.lat() + latSpan, southWest.lng() + lngSpan);
  var marker = new google.maps.Marker({position: location, map: map});
  marker.setTitle("Pensão Parque - Termas de Caldelas");
  attachSecretMessage(marker, 0);
  }

function attachSecretMessage(marker, number) {
  var infowindow = new google.maps.InfoWindow(
      { 
        //max image size : 200x130
        content: '<div style=" text-align:center;font-size:14px;background-image:url(http://img340.imageshack.us/img340/8972/44715578.png); background-position:center;"><a href="http://maps.google.pt/maps?q=41.668889,-8.369726&num=1&t=h&sll=41.668817,-8.369683&sspn=0.00214,0.004356&hl=pt-PT&ie=UTF8&ll=41.668873,-8.369694&spn=0.00428,0.008712&z=17&iwloc=A" target="_blank"; style="text-decoration:none; font-family:Consolas; font-size:small; color:Gray" ><br /><b style="font-family:Calibri; font-size:large; color:#2457B2; text-align:center">Pensão Parque</b><br /><br /><b style="font-family:Calibri; font-size:small; color:Black; text-align:left">Av. Afonso Manuel Nº110</b><br /><b style="font-family:Calibri; font-size:small; color:Black; text-align:left">4720-249 Caldelas</b><br /><b style="font-family:Calibri; font-size:medium; color:Black; text-align:center">253&nbsp;361&nbsp;201</b><br /><br /></a><a href="http://www.panoramio.com/map/#lt=41.667350&ln=-8.369071&z=1&k=2&a=1&tab=1" style="text-decoration:none; color:#00674C" target="_blank"><img src="http://img156.imageshack.us/img156/476/panoramio.png" alt="Panoramio" /></a></div>'
      });
    google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}
