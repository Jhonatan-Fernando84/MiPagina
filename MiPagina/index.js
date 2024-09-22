function iniciarMap(){
    var coord = {lat:48.8542845 ,lng: 2.6673875};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}