var team1 ={
  x: [2015],
  y: [43],
  name: 'Luis Robles, NY Red Bulls',
  type: 'bar',
  marker: {
    color: 'lightblue',
 }
}

var team2 ={
  x: [2016],
  y: [44],
  name: 'Luis Robles, NY Red Bulls',
  type: 'bar',
  marker: {
    color: 'lightblue',
 }
}
var team3 ={
  x: [2017],
  y: [47],
  name: 'Luis Robles, NY Red Bulls',
  type: 'bar',
  marker: {
    color: 'lightblue',
 }
}
var team4 ={
  x: [2018],
  y: [41],
  name: 'Tim Melia, Sporting KC',
  type: 'bar',
  marker: {
    color: 'darkgray',
 }
}
var team5 ={
  x: [2019],
  y: [43],
  name: 'Brad Guzan, Atlanta United',
  type: 'bar',
  marker: {
    color: 'gray',
 }
}

var data = [team1, team2, team3, team4, team5];
  
var layout = {
  title: 'Best Goalkeeper',
  titlefont:{
    family: 'Courier New, monospace',
    size:30,
    color:'darkred',
     style:'bolder'
  },
  xaxis: {tickfont: {
      size: 18,
      color: 'black'
    }},
    yaxis: {
      title: 'Goals',
      titlefont: {
        size: 18,
        color: 'darkred'
      },
      tickfont: {
        size: 18,
        color: 'rgb(107, 107, 107)'
      }
    },
    legend:{
        x: 1.1,
        y: 0.9
    },
    
    bargap: 0.3
    
  };
  Plotly.newPlot('myDiv', data, layout);