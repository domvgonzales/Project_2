function buildPlot() {
  d3.csv("static/MLSTEAMEAST.csv").then(function (eastData) {
    console.log(eastData);
    eastData.forEach(function (data) {
      console.log(data);
      data.NYRB = +data.NYRB;
      data.Columbus = +data.Columbus;
      data.Montreal = +data.Montreal;
      data.DCU = +data.DCU;
      data.NE = +data.NE;
      data.TORFC = +data.TORFC;
      data.ORLC = +data.ORLC;
      data.NYCFC = +data.NYCFC;
      data.Philadelphia = +data.Philadelphia;
      data.Chicago = +data.Chicago;
      data.Atlanta = +data.Atlanta;
      data.FCC = +data.FCC;
    });
    var NYR = [
      eastData[0].NYRB,
      eastData[1].NYRB,
      eastData[2].NYRB,
      eastData[3].NYRB,
      eastData[4].NYRB,
      eastData[5].NYRB
    ];
    var COL = [
      eastData[0].Columbus,
      eastData[1].Columbus,
      eastData[2].Columbus,
      eastData[3].Columbus,
      eastData[4].Columbus,
      eastData[5].Columbus
    ];
    var MTL = [
      eastData[0].Montreal,
      eastData[1].Montreal,
      eastData[2].Montreal,
      eastData[3].Montreal,
      eastData[4].Montreal,
      eastData[5].Montreal
    ];
    var DC = [
      eastData[0].DCU,
      eastData[1].DCU,
      eastData[2].DCU,
      eastData[3].DCU,
      eastData[4].DCU,
      eastData[5].DCU
    ];
    var NE = [
      eastData[0].NE,
      eastData[1].NE,
      eastData[2].NE,
      eastData[3].NE,
      eastData[4].NE,
      eastData[5].NE
    ];
    var TOR = [
      eastData[0].TORFC,
      eastData[1].TORFC,
      eastData[2].TORFC,
      eastData[3].TORFC,
      eastData[4].TORFC,
      eastData[5].TORFC
    ];
    var ORL = [
      eastData[0].ORLC,
      eastData[1].ORLC,
      eastData[2].ORLC,
      eastData[3].ORLC,
      eastData[4].ORLC,
      eastData[5].ORLC
    ];
    var NYC = [
      eastData[0].NYCFC,
      eastData[1].NYCFC,
      eastData[2].NYCFC,
      eastData[3].NYCFC,
      eastData[4].NYCFC,
      eastData[5].NYCFC
    ];
    var PHI = [
      eastData[0].Philadelphia,
      eastData[1].Philadelphia,
      eastData[2].Philadelphia,
      eastData[3].Philadelphia,
      eastData[4].Philadelphia,
      eastData[5].Philadelphia
    ];
    var CHI = [
      eastData[0].Chicago,
      eastData[1].Chicago,
      eastData[2].Chicago,
      eastData[3].Chicago,
      eastData[4].Chicago,
      eastData[5].Chicago
    ];
    var ATL = [
      eastData[0].Atlanta,
      eastData[1].Atlanta,
      eastData[2].Atlanta,
      eastData[3].Atlanta,
      eastData[4].Atlanta,
      eastData[5].Atlanta
    ];
    var CIN = [
      eastData[0].FCC,
      eastData[1].FCC,
      eastData[2].FCC,
      eastData[3].FCC,
      eastData[4].FCC,
      eastData[5].FCC
    ];

    console.log(NYR);
    console.log(eastData[0].NYRB);
    var dates = [2015, 2016, 2017, 2018, 2019, 2021]
    var trace1 = {
      type: "scatter",
      mode: "lines",
      name: "NY Red Bulls",
      x: dates,
      y: NYR,
      line: {
        color: "red"
      }
    };
    var trace2 = {
      type: "scatter",
      mode: "lines",
      name: "Columbus Crew",
      x: dates,
      y: COL,
      line: {
        color: "yellow"
      }
    };
    var trace3 = {
      type: "scatter",
      mode: "lines",
      name: "Montreal Impact",
      x: dates,
      y: MTL,
      line: {
        color: "DarkBlue"
      }
    };
    var trace4 = {
      type: "scatter",
      mode: "lines",
      name: "DC United",
      x: dates,
      y: DC,
      line: {
        color: "black"
      }
    };
    var trace5 = {
      type: "scatter",
      mode: "lines",
      name: "New England Revolution",
      x: dates,
      y: NE,
      line: {
        color: "pink"
      }
    };
    var trace6 = {
      type: "scatter",
      mode: "lines",
      name: "Toronto FC",
      x: dates,
      y: TOR,
      line: {
        color: "grey"
      }
    };
    var trace7 = {
      type: "scatter",
      mode: "lines",
      name: "Orlando City",
      x: dates,
      y: ORL,
      line: {
        color: "purple"
      }
    };
    var trace8 = {
      type: "scatter",
      mode: "lines",
      name: "NYCFC",
      x: dates,
      y: NYC,
      line: {
        color: "DeepSkyBlue"
      }
    };
    var trace9 = {
      type: "scatter",
      mode: "lines",
      name: "Philadelphia Union",
      x: dates,
      y: PHI,
      line: {
        color: "Chocolate"
      }
    };
    var trace10 = {
      type: "scatter",
      mode: "lines",
      name: "Chicago Fire",
      x: dates,
      y: CHI,
      line: {
        color: "Crimson"
      }
    };
    var trace11 = {
      type: "scatter",
      mode: "lines",
      name: "Atlanta United FC",
      x: dates,
      y: ATL,
      line: {
        color: "DarkGoldenRod"
      }
    };
    var trace12 = {
      type: "scatter",
      mode: "lines",
      name: "FC Cincinnati",
      x: dates,
      y: CIN,
      line: {
        color: "Orange"
      }
    };
    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8, trace9, trace10, trace11, trace12]
    var layout = {
      title: "MLS Eastern Conference Point Projection",
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
