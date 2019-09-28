var data = [{
    type: "choroplethmapbox", locations: ["NY", "MA", "VT"], z: [-50, -10, -20], 
    geojson: "https://raw.githubusercontent.com/python-visualization/folium/master/examples/data/us-states.json"
  }];
  
  var layout = {mapbox: {center: {lon: -74, lat: 43}, zoom: 3.5}, width: 600, height:400};
  
  var config = {mapboxAccessToken: ""};
  
  Plotly.newPlot('graph', data, layout, config);