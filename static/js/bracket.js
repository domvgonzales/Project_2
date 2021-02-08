var bigData = {
    teams : [
      ["NYCFC",  "Columbus" ],
      ["Atlanta",  "Toronto" ],
      ["Philadelphia",  "DC United" ],
      ["NY Red Bulls",  "Chicago" ],
      ["LAFC",  "FC Dallas"],
      ["Minnesota", "KC"],
      ["Seattle", "LA Galaxy"],
      ["Real Salt Lake", "Portland"]
    ],
    results : [[ /* WINNER BRACKET */
      [[1.6,0.8], [1.4,1.6], [1.5,1.3], [1.4,1.5], [2.5,0.7], [1.7,1.2], [1.8,1.6], [1.6,1.5]],
      [[1.8,1.3], [1.6,1.5], [2.1,0.7], [1.5,1.6]],
      [[1.6,1.3], [2.5,0.8]],
      [[0.9,2.2]]
    ]  ]
  }
   
  $(function() { $('div#big .demo').bracket({init: bigData}) })