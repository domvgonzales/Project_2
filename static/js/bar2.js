var data = [{
    type: 'bar',
   
    x: [22, 24, 24, 31, 34],
    y: [2015, 2016, 2017, 2018, 2019],
    orientation: 'h',
    text: ['Kei Kamara-Columbus & Sebastian Givinco-Toronto','Bradley Wright-NY Red Bulls','Nemanja Nikoli-Chicago', 'Josef Martinez-ATL','Carlos Vela-Los Angeles FC'],
    marker: {
        color: 'darkred',
        size:25
     }
     }];
  
  var layout = {
    title: 'Top Scorer',
    titlefont:{
        family: 'Cooper black',
        size:30,
        color:'darkgrey',
        
      },

    xaxis: {tickfont: {
        size: 18,
        color: 'black'
      }},
      yaxis: {
        title: 'Year',
        titlefont: {
          family: 'Cooper black',
          size: 20,
          color: 'darkgrey'
        },
        tickfont: {
          size: 18,
          color: 'black'
        }
      },
    font:{
      family: 'Raleway, sans-serif'
    },
     legend:{
        x: 2.0,
        y: 1.0,
   
    },
    bargap :0.3,
    
};

  Plotly.newPlot('myDiv', data, layout);
  