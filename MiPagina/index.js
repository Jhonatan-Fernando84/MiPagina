function iniciarMap(){
    var coord = {lat:6.250400694961194 ,lng:-75.56852720625092};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}