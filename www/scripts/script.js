require (["esri/Map", "esri/WebMap","esri/views/MapView", "esri/geometry/support/webMercatorUtils"],
   function(Map, WebMap, MapView, webMercatorUtils)
   {
      //tutaj wywołanie funkcji//
    let map1 = new Map({basemap:"topo"}); //słowo klucz new + nazwa modułu
    let mapContainer = new MapView({
        container: "mapview",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
        map: map1,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
        zoom: 7,
        center: [19,52]
    });
    let map2 = new WebMap({
        portalItem:{
            id:'ca06d14d225645d3b5c566c819631a3a'
        }
    })
    let topo = document.getElementById('topo');
    let satellite = document.getElementById('satellite');
    let osm = document.getElementById('osm');
    let agol = document.getElementById('agol');
    let photo = document.getElementsByTagName('img');
    //console.log(photo);
    

    /*mapContainer.on("click", function(evt){
        let coords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint);
        //console.log('x : '+ coords.x.toFixed(5) +', '+ coords.y.toFixed(5));
    });*/
    topo.addEventListener('click', function(){
        if(mapContainer.map !== map1){
            mapContainer = new MapView({
                container: "mapview",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
                map: map1,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
                zoom: 7,
                center: [19,52]
            });
        }
        map1.basemap = 'topo';
    })
    satellite.addEventListener('click', function(){
        if(mapContainer.map !== map1){
            mapContainer = new MapView({
                container: "mapview",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
                map: map1,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
                zoom: 7,
                center: [19,52]
            });
        }
        map1.basemap = "satellite";
    })
    osm.addEventListener('click', function(){
        if(mapContainer.map !== map1){
            mapContainer = new MapView({
                container: "mapview",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
                map: map1,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
                zoom: 7,
                center: [19,52]
            });
        }
        map1.basemap = 'osm';
    })
    agol.addEventListener('click', function(){
        mapContainer.map = map2;
    })
    for(let i = 0; i < photo.length; i++){
        photo[i].addEventListener('click', function(){
            if (photo[i].alt === 'Żulin'){
                mapContainer.zoom = 16;
                mapContainer.center = [23.17205, 51.06718];
            }
            else if (photo[i].alt === 'Zgorzelec Miasto'){
                mapContainer.zoom = 16;
                mapContainer.center = [15.01996, 51.15393];
            }
            else if (photo[i].alt === 'Rejowiec'){
                mapContainer.zoom = 16;
                mapContainer.center = [23.23959,  51.11861];
            }
            else if (photo[i].alt === 'Włoszczowa Północ'){
                mapContainer.zoom = 16;
                mapContainer.center = [19.94624, 50.85699];
            }
            else if (photo[i].alt === 'Leszno'){
                mapContainer.zoom = 16;
                mapContainer.center = [16.56497, 51.84571];
            }
            else if (photo[i].alt === 'Lublin Główny'){
                mapContainer.zoom = 16;
                mapContainer.center = [ 22.56907, 51.23138];
            }
            else if (photo[i].alt === 'Warszawa Centralna'){
                mapContainer.zoom = 16;
                mapContainer.center = [21.00329, 52.22907];
            }
            else if (photo[i].alt === 'Łódź Fabryczna'){
                mapContainer.zoom = 16;
                mapContainer.center = [19.46941, 51.77002];
            }

        })
    }



});