FusionCharts.ready(function() {
    var revenueChart = new FusionCharts({
      type: 'pie2d',
      renderAt: 'chart-container',
      width: '550',
      height: '350',
      dataFormat: 'json',
      dataSource: {
        "chart": {
          "caption": "Number of listings in NYC",
          "subCaption": "Last 2016",
          "numberPrefix": "$",
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
  
  });