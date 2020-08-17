(function ($) {
  'use strict';
  var c3LineChart = c3.generate({
    bindto: '#c3-line-chart',
    data: {
      columns: [
        watermoisture
      ],
      types: {
        Soil_Moisture: 'area-spline'
      }
    }

  });

  setTimeout(function () {
    c3LineChart.load({
        columns:[
           watermoisture
        ],
        types: {
        Soil_Moisture: 'area-spline'
      }
    });
}, 400)

  var TMLineChart = c3.generate({
    bindto: '#TM-line-chart',
    data: {
      columns: [
        temperature
      ],
      types: {
        Temperature: 'spline'
      }
    },
    color: {
      pattern: ["red"]
    }

  });

  setTimeout(function () {
    TMLineChart.load({
        columns:[
           temperature
        ],
        types: {
        Temperature: 'spline'
      }
    });
}, 400)

  var HumallLineChart = c3.generate({
    bindto: '#HUM-line-chart',
    data: {
      columns: [
        humidity
      ],
      types: {
        Humidity: 'area'
      }
    },
    color: {
      pattern: ["orange"]
    }

  });

   setTimeout(function () {
    HumallLineChart.load({
       columns: [
        humidity
      ],
      types: {
        Humidity: 'area'
      }
    });
}, 400)


  var WateallLineChart = c3.generate({
    bindto: '#watelevel-line-chart',
    data: {
      columns: [
        waterLevel
      ],
      types: {
        Water_Level: 'spline'
      }
    },
    color: {
      pattern: ['rgba(4,189,254,0.6)', 'rgba(237,28,36,0.6)']
    }

  });

   setTimeout(function () {
    WateallLineChart.load({
      columns: [
        waterLevel
      ],
      types: {
        Water_Level: 'spline'
      }
    });
}, 400)

  

  var wlc3LineChart = c3.generate({
    bindto: '#WL-line-chart',
    data: {
      columns: [
        pastwaterLevel,
        waterLevel

      ],
      axes: {
        Past_Water_Level: 'y2'
      },
      types: {
        Past_Water_Level: 'step',
        Water_Level: 'area-step'

      }
    },
    color: {
      pattern: ['rgba(88,216,163,1)', 'rgba(4,189,254,0.6)']
    },
    axis: {
      y: {
        label: {
          text: 'Litres',
          position: 'outer-middle'
        }

      },
      y2: {
        show: true,
        label: {
          text: 'Litres',
          position: 'outer-middle'
        }
      }
    }

  });

   setTimeout(function () {
    wlc3LineChart.load({
          columns: [
        pastwaterLevel,
        waterLevel

      ]
    });
}, 400)

  var c3LightLineChart = c3.generate({
    bindto: '#DLight-line-chart',
    data: {
      columns: [
        ligtsensorvalues
      ],
      types: {
        Light: 'spline'
      },
    },
    color: {
      pattern: ['blue']
    }

  });

  setTimeout(function () {
    c3LightLineChart.load({
        columns: [
            ligtsensorvalues
        ]
    });
}, 400);

  var c3waterMoistureChart = c3.generate({
    bindto: '#DWM-line-chart',
    data: {
      columns: [
        pwatermoisture,
        watermoisture

      ],
      axes: {
        Past_Soil_Moisture: 'y2'
      },
      types: {
        Past_Soil_Moisture: 'bar',
        Soil_Moisture: 'bar'

      }
    },
    color: {
      pattern: ['#c5ea9a', '#0cab12']
    },
    axis: {
      y: {
        label: {
          text: 'Litres',
          position: 'outer-middle'
        }

      },
      y2: {
        show: true,
        label: {
          text: 'Litres',
          position: 'outer-middle'
        }
      }
    }

  });

  setTimeout(function () {
    c3waterMoistureChart.load({
        columns: [
           pwatermoisture,
        watermoisture
        ]
    });
}, 400);



  var dhtc3SplineChart = c3.generate({
    bindto: '#DHT-spline-chart',
    data: {
      columns: [
        humidity,
        temperature
      ],
      axes: {
        Temperature: 'y2'
      },
      types: {
        Temperature: 'spline',
        Humidity: 'spline'
      }
    },
    axis: {
      y: {
        label: {
          text: 'Relative Humidity(%)',
          position: 'outer-middle'
        },
        tick: {
          // format: d3.format("%,") // ADD
        }
      },
      y2: {
        show: true,
        label: {
          text: 'Celcius (degree)',
          position: 'outer-middle'
        }
      }
    }
  });

setTimeout(function () {
    dhtc3SplineChart.load({
        columns: [
           humidity,
        temperature
        ]
    });
}, 400);

  var lumc3SplineChart = c3.generate({
    bindto: '#c3-spline-chart',
    data: {
      columns: [
        ligtsensorvalues
      ],

      types: {
        Light: 'bar'
      }
    },
    color: {
      pattern: ["rgba(88,216,163,1)"]
    },
    axis: {
      y: {
        label: {
          text: 'Luminousity (LUX)',
          position: 'outer-middle'
        },

      },

    }
  });
  
setTimeout(function () {
    lumc3SplineChart.load({
        columns: [
           ligtsensorvalues
        ]
    });
}, 400);

  var c3PieChart = c3.generate({
    bindto: '#c3-pie-chart',
    data: {
      // iris data from R
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type: 'pie',
      onclick: function (d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function (d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function (d, i) {
        console.log("onmouseout", d, i);
      }
    },
    color: {
      pattern: ['red', '#009688', '#35b10c']
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 30,
      left: 0,
    }
  });

  setTimeout(function () {
    c3PieChart.load({
      columns: [
        ["Income", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        ["Outcome", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ["Revenue", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
      ]
    });
  }, 1500);

  setTimeout(function () {
    c3PieChart.unload({
      ids: 'data1'
    });
    c3PieChart.unload({
      ids: 'data2'
    });
  }, 2500);
  var c3DonutChart = c3.generate({
    bindto: '#c3-donut-chart',
    data: {
      columns: [
        ['data1', 30],
        ['data2', 120],
      ],
      type: 'donut',
      onclick: function (d, i) {
        console.log("onclick", d, i);
      },
      onmouseover: function (d, i) {
        console.log("onmouseover", d, i);
      },
      onmouseout: function (d, i) {
        console.log("onmouseout", d, i);
      }
    },
    color: {
      pattern: ['yellow', 'purple', 'red']
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 30,
      left: 0,
    },
    donut: {
      title: "Iris Petal Width"
    }
  });

  setTimeout(function () {
    c3DonutChart.load({
      columns: [
        ["setosa", 0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2],
        ["versicolor", 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1.0, 1.3, 1.4, 1.0, 1.5, 1.0, 1.4, 1.3, 1.4, 1.5, 1.0, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1.0, 1.1, 1.0, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1.0, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3],
        ["virginica", 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2.0, 1.9, 2.1, 2.0, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2.0, 2.0, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2.0, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2.0, 2.3, 1.8],
      ]
    });
  }, 1500);

  setTimeout(function () {
    c3DonutChart.unload({
      ids: 'data1'
    });
    c3DonutChart.unload({
      ids: 'data2'
    });
  }, 2500);


})(jQuery);