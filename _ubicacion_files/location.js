function obtenerdireccion(coords) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode({'latLng' : coords}, function (results, status) {

        if (status == google.maps.GeocoderStatus.OK) {

            var address = results[0].address_components;
            var direccion = "", ciudad = "", distrito = "";

            if (address[0].long_name) {
                direccion = direccion + address[0].long_name;
            }
            if (address[1].long_name) {
                direccion = direccion + " " + address[1].long_name;
            }
            if (address[2].long_name) {
                distrito = address[2].long_name;
                direccion = direccion + " " + address[2].long_name;
            }
            if (address[3].long_name) {
                distrito = address[3].long_name;
                direccion = direccion + " " + address[3].long_name;
            }
            if (address[4].long_name) {
                ciudad = address[4].long_name;
                direccion = direccion + " " + address[4].long_name;
            }
            if (direccion == "") {
                direccion = results[1];
            }
            document.getElementById("inputAddress").value = direccion;
            document.getElementById("inputDistrict").value = distrito;
            document.getElementById("inputCity").value = ciudad;
          }

                     });

    
}

var FRDLocation = function () {
    var Marker;
    
    var coords;
   
    
};







FRDLocation.set_location = function (position) {

    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    
     coords = new google.maps.LatLng(latitude, longitude);

    var options = {
        zoom                    : 16,
        center                  : coords,
        mapTypeControl          : false,
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
        },
        disableDefaultUI        : true,
       // zoomControl: true,
        mapTypeId               : google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("location-map"), options);

    
    
    
    
    
    
    
    
    
    
     Marker = new google.maps.Marker({
        position: coords,
        map: map
    });  
    

    
    google.maps.event.addListener(map, 'click', function(event) {
        coords = event.latLng;
        Marker.setPosition(coords);
       // document.getElementById("inputAddress").value = coords;
        obtenerdireccion(coords);
    });


    
     Marker.setMap(map);
    // obtenerdireccion(coords);
    
    
   




};

jQuery(document).ready(function () {
    Utils.geo_location(FRDLocation.set_location);

});

