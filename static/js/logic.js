// markerSize function
// function markerSize(win_percent) {
//   return win_percent * 2000;
// }

function amarkerSize(avg_attendance) {
  return avg_attendance * 3;
}
function wmarkerSize(avg_attendance) {
  return avg_attendance * 1200;
}
var WC = [{
  location: [47.5952, -122.3316],
  name: "Seattle",
  avg_attendance: 37570,
  win_percent: 45
},
{
  location: [33.8644, -118.2611],
  name: "LA Galaxy",
  avg_attendance: 27857,
  win_percent: 37
},
{
  location: [45.5215, -122.6918],
  name: "Portland",
  avg_attendance: 22408,
  win_percent: 42

},
{
  location: [34.0126, -118.2841],
  name: "Los Angeles FC",
  avg_attendance: 22147,
  win_percent: 54

},
{
  location: [44.9531, -93.1651],
  name: "Minnesota",
  avg_attendance: 21388,
  win_percent: 35

},
{
  location: [	49.246292, -123.116226],
  name: "Vancouver",
  avg_attendance: 20173,
  win_percent: 36

},
{
  location: [37.3512, -121.9247],
  name: "San Jose",
  avg_attendance: 19719,
  win_percent: 30

},
{
  location: [39.1216, -94.8232],
  name: "Sporting KC",
  avg_attendance: 19559,
  win_percent: 39

},
{
  location: [40.5829, -111.8934],
  name: "Real Salt Lake",
  avg_attendance: 18991,
  win_percent: 39

},
{
  location: [29.7530, -95.3519],
  name: "Houston",
  avg_attendance: 18164,
  win_percent: 31

},
{
  location: [33.1543, -96.8352],
  name: "FC Dallas",
  avg_attendance: 16015,
  win_percent: 44

},
{
  location: [39.8056, -104.8918],
  name: "Colorado",
  avg_attendance: 15446,
  win_percent: 31

},
];

var EC = [{
  location: [39.8328, -75.3785],
  name: "Philadelphia ",
  avg_attendance: 17082,
  win_percent: 37

},
{
  location: [43.6332, -79.4186],
  name: "Toronto FC",
  avg_attendance: 25871,
  win_percent: 42
},
{
  location: [40.0095, -82.9912],
  name: "Columbus",
  avg_attendance: 15370,
  win_percent: 37

},
{
  location: [28.5411, -81.3893],
  name: "Orlando City",
  avg_attendance: 27165,
  win_percent: 28

},
{
  location: [40.8296, -73.9262],
  name: "NYCFC",
  avg_attendance: 24570,
  win_percent: 44

},
{
  location: [40.7368, -74.1502],
  name: "NY Red Bulls",
  avg_attendance: 19561,
  win_percent: 49

},
// {
//   location: [36.1665, -86.7713],
//   name: "Nashville",
//   avg_attendance: "2,720,546"
// },
{
  location: [42.0909, -71.2643],
  name: "New England",
  avg_attendance: 18853,
  win_percent: 35

},
{
  location: [45.5623, -73.5530],
  name: "Montreal",
  avg_attendance: 18641,
  win_percent: 37

},
// {
//   location: [26.1955, -80.1614],
//   name: "Miami",
//   avg_attendance: "446,599"
// },
{
  location: [41.8623, -87.6167],
  name: "Chicago",
  avg_attendance: 15224,
  win_percent: 29

},
{
  location: [33.7555, -84.4010],
  name: "Atlanta",
  avg_attendance: 51237,
  win_percent: 53
},
{
  location: [38.8689, -77.0129],
  name: "D.C. United",
  avg_attendance: 17322,
  win_percent: 36

},
{
  location: [39.1312, -84.5162],
  name: "FC Cincinnati",
  avg_attendance: 27336,
  win_percent: 18

},
];
var WCcityMarkers = [];

for (var i = 0; i < WC.length; i++) {
  var city = WC[i];
  WCcityMarkers.push(
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Average Attendance: " + city.avg_attendance +"</h1> <hr> <h3>Winning Percentage: " + city.win_percent )
  );}

var ECcityMarkers = [];
 
for (var i = 0; i < EC.length; i++) {
  var city = EC[i];
  ECcityMarkers.push(
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Average Attendance: " + city.avg_attendance +"</h1> <hr> <h3>Winning Percentage: " + city.win_percent )
  );}

// for (var i = 0; i < WC.length; i++) {
//   var city = WC[i];
//   L.circle(city.location, {
//     fillOpacity: 0.50,
//     color: "white",
//     fillColor: "blue",
//     radius: markerSize(city.avg_attendance)
//   }).bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Average Attendance: " + city.avg_attendance + "</h3>").
//   addTo(myMap);
//   }

// for (var i = 0; i < EC.length; i++) {
//   var city = EC[i];
//   L.circle(city.location, {
//     fillOpacity: 0.50,
//     color: "white",
//     fillColor: "red",
//     radius: markerSize(city.avg_attendance)
//   }).bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Average Attendance: " + city.avg_attendance + "</h3>").
//   addTo(myMap);
//   }

// for (var i = 0; i < WC.length; i++) {
//   var city = WC[i];
//   L.circle(city.location, {
//     fillOpacity: 0.50,
//     color: "white",
//     fillColor: "blue",
//     radius: markerSize(city.win_percent)
//   }).bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Winning Percentage: " + city.win_percent + "</h3>").
//   addTo(myMap);
//   }

// for (var i = 0; i < EC.length; i++) {
//   var city = EC[i];
//   L.circle(city.location, {
//     fillOpacity: 0.50,
//     color: "white",
//     fillColor: "red",
//     radius: markerSize(city.win_percent)
//   }).bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Winning Percentage: " + city.win_percent + "</h3>").
//   addTo(myMap);
//   }

var WCAttendance = [];
var ECAttendance = [];
var WCwinp = [];
var ECwinp = [];

for (var i = 0; i < WC.length; i++) {

  // Conditionals for countries points
  var color = "";
  if (WC[i].avg_attendance > 30000) {
    color = "red";
  }
  else if (WC[i].avg_attendance > 25000) {
    color = "yellow";
  }
  else if (WC[i].avg_attendance > 20000) {
    color = "green";
  }
  else {
    color = "blue"
  ;}

  // Setting the marker radius for the state by passing population into the markerSize function
  var city = WC[i];
  WCAttendance.push(
    L.circle(city.location, {
      fillOpacity: 0.50,
      color: "white",
      fillColor: color,
      radius: amarkerSize(city.avg_attendance)
    })
  );}

for (var i = 0; i < EC.length; i++) {

  var color = "";
  if (EC[i].avg_attendance > 30000) {
    color = "red";
  }
  else if (EC[i].avg_attendance > 25000) {
    color = "yellow";
  }
  else if (EC[i].avg_attendance > 20000) {
    color = "green";
  }
  else {
    color = "blue"
  ;}

  // Setting the marker radius for the city by passing population into the markerSize function
  var city = EC[i];
  ECAttendance.push(
  L.circle(city.location, {
    fillOpacity: 0.50,
    color: "white",
    fillColor: color,
    radius: amarkerSize(city.avg_attendance)
    })
  );}

for (var i = 0; i < WC.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  var city = WC[i];
  WCwinp.push(
    L.circle(city.location, {
      fillOpacity: 0.50,
      color: "white",
      fillColor: "yellow",
      radius: wmarkerSize(city.win_percent)
    })
  );}

  // Setting the marker radius for the city by passing population into the markerSize function
for (var i = 0; i < EC.length; i++) {
  var city = EC[i];
  ECwinp.push(
  L.circle(city.location, {
    fillOpacity: 0.50,
    color: "white",
    fillColor: "yellow",
    radius: wmarkerSize(city.win_percent)
    })
  );
}
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: "pk.eyJ1IjoiZG9tZ29uemFsZXMiLCJhIjoiY2tpam96djQwMDIzYjJwcTlibW4zeGYxaCJ9.8LKLu5tJwBBACavlTv1llA"
});

var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: "pk.eyJ1IjoiZG9tZ29uemFsZXMiLCJhIjoiY2tpam96djQwMDIzYjJwcTlibW4zeGYxaCJ9.8LKLu5tJwBBACavlTv1llA"
});

var EastC_Attendance = L.layerGroup(ECAttendance);
var EastC_Win_Percentage = L.layerGroup(ECwinp);
var EastC_Team_Markers = L.layerGroup(ECcityMarkers);
var WestC_Attendance = L.layerGroup(WCAttendance);
var WestC_Win_Percentage = L.layerGroup(WCwinp);
var WestC_Team_Markers = L.layerGroup(WCcityMarkers);



var baseMaps = {
  "Street Map": streetmap,
  "Dark Map": darkmap
};
var overlayMaps = {
  "East Coast Average Attendance": EastC_Attendance,
  "East Coast Average Win % Per Season": EastC_Win_Percentage,
  "East Coast MLS Teams": EastC_Team_Markers,
  "West Coast Average Attendance": WestC_Attendance,
  "West Coast Average Win % Per Season": WestC_Win_Percentage,
  "West Coast MLS Teams": WestC_Team_Markers 
};

var myMap = L.map("map", {
  center: [41.850033, -87.6500523],
  zoom: 4,
  layers: [streetmap, EastC_Attendance, EastC_Win_Percentage, EastC_Team_Markers,
    WestC_Attendance,WestC_Win_Percentage,WestC_Team_Markers]
});

L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
