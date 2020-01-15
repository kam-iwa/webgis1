require (["esri/Map", "esri/views/MapView"],
   function(Map, MapView)
   {
      //tutaj wywołanie funkcji//
    let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
    let mapContainer = new MapView({
        container: "mapview",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        zoom: 7,
        center: [19,52]
    });
    let topo = document.getElementById('topo');
    let satellite = document.getElementById('satellite');
    let osm = document.getElementById('osm');

    topo.addEventListener('click', function(){
        map1.basemap = 'topo';
    })
    satellite.addEventListener('click', function(){
        map1.basemap = "satellite";
    })
    osm.addEventListener('click', function(){
        map1.basemap = 'osm';
    })


});