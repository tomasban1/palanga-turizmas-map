

function initMap() {
    let map = new google.maps.Map(document.getElementById("map"), {
        mapId: "24d769e758061e97",
        center: { lat: 55.918212147981734, lng: 21.060849185029266 },
        zoom: 15,
    });


    let palangosBridgeOptions = {
        position: new google.maps.LatLng(55.91985429417008, 21.04666103504898),
        map: map,
        icon: {
            url: './icons/Artboard-9.png',
            scaledSize: new google.maps.Size(150, 100)

        },
        label: 'Palangos tiltas',
        optimized: false,

    }
    let birutesKalnasptions = {
        position: new google.maps.LatLng(55.90581601915155, 21.053030476500684),
        map: map,
        icon: {
            url: './icons/birutesKalnas.png',
            scaledSize: new google.maps.Size(100, 100)

        },
        label: 'Birutės kalnas',
        optimized: false,

    }
    let gintaroMuziejusOptions = {
        position: new google.maps.LatLng(55.90686239799944, 21.056024685780738),
        map: map,
        icon: {
            url: './icons/gintaroMuziejus.png',
            scaledSize: new google.maps.Size(100, 100)

        },
        label: 'Gintaro muziejus',
        // animation: google.maps.Animation.BOUNCE,
        optimized: false,

    }
    let gintaroMuziejusWifiOptions = {
        position: new google.maps.LatLng(55.90755235871318, 21.05585489772897),
        map: map,
        icon: {
            url: './icons/wifi.png',
            // icon: './icons.wifi.png',
            offset: '100%',
            scaledSize: new google.maps.Size(20, 20)

        },
        optimized: false,

    }
    let skulpturuParkasOptions = {
        position: new google.maps.LatLng(55.91464554143305, 21.06275218869156),
        map: map,
        icon: {
            url: './icons/skulpturu-parkas.png',
            scaledSize: new google.maps.Size(100, 100)

        },
        label: 'Skulptūrų parkas',
        optimized: false,

    }
    let kurhauzasOptions = {
        position: new google.maps.LatLng(55.915953280530196, 21.064593762676857),
        map: map,
        icon: {
            url: './icons/palangos-kurhauzas.png',
            scaledSize: new google.maps.Size(100, 100)

        },
        label: 'Palangos kurhauzas',
        optimized: false,

    }
    let kurortoMuziejusOptions = {
        position: new google.maps.LatLng(55.91815898676592, 21.05579762396571),
        map: map,
        icon: {
            url: './icons/kurortoMuziejus.png',
            scaledSize: new google.maps.Size(100, 100)

        },
        label: 'Kurorto muziejus',
        optimized: false,

    }
    let palangosBaznyciaOptions = {
        position: new google.maps.LatLng(55.91762474596878, 21.065789812089672),
        map: map,
        icon: {
            url: './icons/palangos-baznycia.png',
            scaledSize: new google.maps.Size(100, 100)

        },
        label: 'Palangos Švč Mergelės Priėmimo į dangų bažnyčia',
        optimized: false,

    }
    let palangosFontanasOptions = {
        position: new google.maps.LatLng(55.92060436339909, 21.067372669825644),
        map: map,
        icon: {
            url: './icons/fontanas.png',
            scaledSize: new google.maps.Size(100, 100)

        },
        label: 'Muzikinis fontanas',
        optimized: false,

    }

    let autobusuStWifiOptions = {
        position: new google.maps.LatLng(55.91358733617893, 21.077731125475786),
        map: map,
        icon: {
            url: './icons/wifi.png',
            // icon: './icons.wifi.png',
            // offset: '100%',
            scaledSize: new google.maps.Size(25, 20)

        },
        optimized: false,

    }

    const palangosBridgeMarker = new google.maps.Marker(palangosBridgeOptions);
    const biruteskalnasMarker = new google.maps.Marker(birutesKalnasptions);
    const gintaroMuziejusMarker = new google.maps.Marker(gintaroMuziejusOptions);
    const gintaroMuziejusWifiMarker = new google.maps.Marker(gintaroMuziejusWifiOptions);
    const skulpturuParkasMarker = new google.maps.Marker(skulpturuParkasOptions);
    const palangosKurhauzasMarker = new google.maps.Marker(kurhauzasOptions);
    const kurortoMuziejusMarker = new google.maps.Marker(kurortoMuziejusOptions);
    const palangosBaznMarker = new google.maps.Marker(palangosBaznyciaOptions);
    const palangosFontanasMarker = new google.maps.Marker(palangosFontanasOptions);
    const autobusuStWifiMarker = new google.maps.Marker(autobusuStWifiOptions);

}

window.initMap = initMap;

//position: { lat: 55.92041008439923, lng: 21.049040228196723 },