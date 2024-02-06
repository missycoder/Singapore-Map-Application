document.addEventListener("DOMContentLoaded", async function () {
   
    // setup the map
    const map = L.map("singaporeMap");
    map.setView([1.3521, 103.8198], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' }).addTo(map);

    // const hdbLayer = await createLayer("hdb.json", map);
    // const mallLayer = await createLayer("mall.json", map);
    // const natureLayer = await createLayer("nature.json", map);

    // load the hdb.json and create a layer group and the markers for each of time
    const hdbResponse = await axios.get("hdb.json");
    const hdbLayer = L.layerGroup();
    hdbLayer.addTo(map);
    for (let hdb of hdbResponse.data) {
        // this technique is known as function chaining
        // this works because .bindPopup also returs the marker
        L.marker(hdb.coordinates).bindPopup(`<h1>${hdb.name}</h1>`).addTo(hdbLayer);
    }

    // load in the mall.json and create a layer group and the markers for each mall
    const mallResponse = await axios.get('mall.json');
    const mallLayer = L.layerGroup();
    mallLayer.addTo(map);
    for (let mall of mallResponse.data) {
        L.marker(mall.coordinates).bindPopup(`<h1>${mall.name}</h1>`).addTo(mallLayer);
    }

    const natureResponse = await axios.get('nature.json');
    const natureLayer = L.layerGroup();
    natureLayer.addTo(map);
    for (let nature of natureResponse.data) {
        L.marker(nature.coordinates)
         .bindPopup(`<h1>${nature.name}</h1>`).addTo(natureLayer);
    }

    L.control.layers({
        'HDB': hdbLayer,
        'Malls': mallLayer,
        "Nature": natureLayer
    }, {}).addTo(map);

});

async function createLayer(jsonFileName, map) {
    const response = await axios.get(jsonFileName);
    const layer = L.layerGroup();
    layer.addTo(map);
    for (let location of response.data) {
        // this technique is known as function chaining
        // this works because .bindPopup also returs the marker
        L.marker(location.coordinates).bindPopup(`<h1>${location.name}</h1>`).addTo(layer);
    }
    return layer;
}
