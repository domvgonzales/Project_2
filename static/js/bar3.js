var team1 ={
    x: ['2015'],
    y: [18],
    name: 'FC Dallas, 18',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'blue',
   }
}
var team2 ={
    x: ['2015'],
    y: [8],
    name: 'Chicago FC, 8',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'red',
   }
}
var team3 ={
    x: ['2016'],
    y: [17],
    name: 'FC Dallas, 17',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'blue',
   }
}
var team4 ={
    x: ['2016'],
    y: [7],
    name: 'Chicago FC, 7',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'red',
   }
}
var team5 ={
    x: ['2017'],
    y: [20],
    name: 'Toronto FC, 20',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'blue',
   }
}
var team6 ={
    x: ['2017'],
    y: [9],
    name: 'DC United, 9',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'red',
   }
}
var team7 ={
    x: ['2018'],
    y: [22],
    name: 'NY Red Bulls, 22',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'blue',
   }
}
var team8 ={
    x: ['2018'],
    y: [8],
    name: 'OrlandoCity, 8',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'red',
   }
}
var team9 ={
    x: ['2019'],
    y: [21],
    name: 'Los Angeles FC, 21',
    type: 'bar', 
    width:[.3],
    marker: {
      color: 'blue',
   }
}
var team10 ={
    x: ['2019'],
    y: [6],
    name: 'FC Cincinnati, 6',
    type: 'bar',
    width:[.3],
    marker: {
      color: 'red',
   }
}

// }
// var wins = {
//     x: ['FC Dallas', 'FC Dallas', 'Toronto FC','NY Red Bulls', 'Loas Angeles'],
//     y: [18, 17, 20, 22, 21],
//     name: 'Won Games',
//     type: 'bar'
//   };
  
//   var losts = {
//     x: ['2015', '2016', '2017','2018', '2019'],
//     y: [20, 17, 20, 22, 22],
//     name: 'Lost Games ',
//     type: 'bar'
//   };
  
  var data = [team1, team2,team3, team4, team5, team6, team7, team8,team9,team10];
  
  var layout = {
    title: 'Top Team Vs Bottom Team ? ', titlefont:{
        family: 'broadway',
        size:30,
        color:'darkblue',
        
      },

    xaxis: {tickfont: {
        size: 18,
        color: 'rgb(107, 107, 107)'
      }},
      yaxis: {
        title: 'Games',
        titlefont: {
          size: 18,
          color: 'darkblue'
        },
        tickfont: {
          size: 14,
          color: 'rgb(107, 107, 107)'
        }
      },
      legend:{
          x: 1.1,
          y: 0.9
      },
      barmode: 'group',
      bargap: 1,
      bargroupgap:0
    };
  
  Plotly.newPlot('myDiv', data, layout);
  