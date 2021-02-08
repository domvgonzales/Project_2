function buildPlot(){
    d3.csv("static/MLSTEAMWEST.csv").then(function(westData){
      console.log(westData);
      westData.forEach(function(data){
        console.log(data);
        data.DAL = +data.DAL;
        data.VAN = +data.VAN;
        data.POR = +data.POR;
        data.SEA = +data.SEA;
        data.LAG = +data.LAG;
        data.KC = +data.KC;
        data.SJ = +data.SJ;
        data.HOU = +data.HOU;
        data.SL = +data.SL;
        data.COL = +data.COL;
        data.MIN = +data.MIN;
        data.LAFC = +data.LAFC;       
      });
      var DAL = [
        westData[0].DAL,
        westData[1].DAL,
        westData[2].DAL,
        westData[3].DAL,
        westData[4].DAL,
        westData[5].DAL
      ];
      var VAN = [
        westData[0].VAN,
        westData[1].VAN,
        westData[2].VAN,
        westData[3].VAN,
        westData[4].VAN,
        westData[5].VAN
      ];
      var POR = [
        westData[0].POR,
        westData[1].POR,
        westData[2].POR,
        westData[3].POR,
        westData[4].POR,
        westData[5].POR
      ];
      var SEA = [
        westData[0].SEA,
        westData[1].SEA,
        westData[2].SEA,
        westData[3].SEA,
        westData[4].SEA,
        westData[5].SEA
      ];
      var LAG = [
        westData[0].LAG,
        westData[1].LAG,
        westData[2].LAG,
        westData[3].LAG,
        westData[4].LAG,
        westData[5].LAG
      ];
      var KC = [
        westData[0].KC,
        westData[1].KC,
        westData[2].KC,
        westData[3].KC,
        westData[4].KC,
        westData[5].KC
      ];
      var SJ = [
        westData[0].SJ,
        westData[1].SJ,
        westData[2].SJ,
        westData[3].SJ,
        westData[4].SJ,
        westData[5].SJ
      ];
      var HOU = [
        westData[0].HOU,
        westData[1].HOU,
        westData[2].HOU,
        westData[3].HOU,
        westData[4].HOU,
        westData[5].HOU
      ];
      var SL = [
        westData[0].SL,
        westData[1].SL,
        westData[2].SL,
        westData[3].SL,
        westData[4].SL,
        westData[5].SL
      ];
      var COL = [
        westData[0].COL,
        westData[1].COL,
        westData[2].COL,
        westData[3].COL,
        westData[4].COL,
        westData[5].COL
      ];
      var MIN = [
        westData[0].MIN,
        westData[1].MIN,
        westData[2].MIN,
        westData[3].MIN,
        westData[4].MIN,
        westData[5].MIN
      ];
      var LAFC = [
        westData[0].LAFC,
        westData[1].LAFC,
        westData[2].LAFC,
        westData[3].LAFC,
        westData[4].LAFC,
        westData[5].LAFC
      ];
        
      console.log(DAL);
      console.log(westData[0].DAL);
      var dates = [2015, 2016, 2017, 2018, 2019, 2021]
      var trace1 = {
          type: "scatter",
          mode:"lines",
          name: "FC Dallas",
          x: dates,
          y: DAL,
          line: {
            color: "red"
          }
      };
      var trace2 = {
          type: "scatter",
          mode:"lines",
          name: "Vancouver Whitecaps FC",
          x: dates,
          y: VAN,
          line: {
            color: "blue"
          }
      };
      var trace3 = {
          type: "scatter",
          mode:"lines",
          name: "Portland Timbers",
          x: dates,
          y: POR,
          line: {
            color: "Green"
          }
      };
      var trace4 = {
        type: "scatter",
        mode:"lines",
        name: "Seattle Sounders",
        x: dates,
        y: SEA,
        line: {
          color: "chartreuse"
        }
      };
      var trace5 = {
        type: "scatter",
        mode:"lines",
        name: "LA Galaxy",
        x: dates,
        y: LAG,
        line: {
          color: "DarkGoldenRod"
        }
      };
      var trace6 = {
        type: "scatter",
        mode:"lines",
        name: "Sporting Kansas City",
        x: dates,
        y: KC,
        line: {
          color: "grey"
        }
      };
      var trace7 = {
        type: "scatter",
        mode:"lines",
        name: "San Jose Earthquakes",
        x: dates,
        y: SJ,
        line: {
          color: "purple"
        }
      };
      var trace8 = {
        type: "scatter",
        mode:"lines",
        name: "Houston Dynamo FC",
        x: dates,
        y: HOU,
        line: {
          color: "DeepSkyBlue"
        }
      };
      var trace9 = {
        type: "scatter",
        mode:"lines",
        name: "Real Salt Lake",
        x: dates,
        y: SL,
        line: {
          color: "Chocolate"
        }
      };
      var trace10 = {
        type: "scatter",
        mode:"lines",
        name: "Colorado Rapids",
        x: dates,
        y: COL,
        line: {
          color: "Crimson"
        }
      };
      var trace11 = {
        type: "scatter",
        mode:"lines",
        name: "Minnesota United FC",
        x: dates,
        y: MIN,
        line: {
          color: "pink"
        }
      };
      var trace12 = {
        type: "scatter",
        mode:"lines",
        name: "Los Angeles FC",
        x: dates,
        y: LAFC,
        line: {
          color: "Orange"
        }
      };
        var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12]
        var layout = {
          title: "MLS Western Conference Point Projection",
          xaxis: {
            range: [2014, 2022]
          },
          yaxis: {
            autorange: true,
            type: "linear"
          }
        };
        Plotly.newPlot("plot", data, layout);  
})
}
buildPlot()
