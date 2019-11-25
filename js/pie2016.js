`FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'pie2d',
      renderAt: 'chart-container',
      width: '550',
      height: '350',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Number of NYC listings in 2016",
          "subCaption": "2016",
          "showPercentInTooltip": "0",
          "decimals": "1",
          //Theme
          "theme": "fusion",
          "valuePosition": "inside",
          "textOutline": "1"
        },
        "data": [{
            "label": "Bronx",
            "value": "5082"
          },
          {
            "label": "Brooklyn",
            "value": "145812"
              
          },
          {
            "label": "Manhattan",
            "value": "183259"
          },
          {
            "label": "Queens",
            "value": "31081"
          },
          {
            "label": "Staten Island",
            "value": "1978"
          }
        ]
      }
    }).render();
  
  });`

  `FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'pie2d',
      renderAt: 'chart-container',
      width: '550',
      height: '350',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Number of NYC listings in 2017",
          "subCaption": "2017",
          "showPercentInTooltip": "0",
          "decimals": "1",
          //Theme
          "theme": "fusion",
          "valuePosition": "inside",
          "textOutline": "1"
        },
        "data": [{
            "label": "Bronx",
            "value": "7304"
          },
          {
            "label": "Brooklyn",
            "value": "178550"
              
          },
          {
            "label": "Manhattan",
            "value": "202048"
          },
          {
            "label": "Queens",
            "value": "42337"
          },
          {
            "label": "Staten Island",
            "value": "2798"
          }
        ]
      }
    }).render();
  
  });`
