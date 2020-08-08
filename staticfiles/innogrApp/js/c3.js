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

  var c3LineChart = c3.generate({
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



  var c3SplineChart = c3.generate({
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
  var c3SplineChart = c3.generate({
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
  var c3BarChart = c3.generate({
    bindto: '#c3-bar-chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      type: 'bar'
    },
    color: {
      pattern: ['rgba(88,216,163,1)', 'rgba(4,189,254,0.6)', 'rgba(237,28,36,0.6)']
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 30,
      left: 0,
    },
    bar: {
      width: {
        ratio: 0.7 // this makes bar width 50% of length between ticks
      }
    }
  });

  setTimeout(function () {
    c3BarChart.load({
      columns: [
        ['data3', 130, -150, 200, 300, -200, 100]
      ]
    });
  }, 1000);

  var c3StepChart = c3.generate({
    bindto: '#c3-step-chart',
    data: {
      columns: [
        ['data1', 300, 350, 300, 0, 0, 100],
        ['data2', 130, 100, 140, 200, 150, 50]
      ],
      types: {
        data1: 'step',
        data2: 'area-step'
      }
    },
    color: {
      pattern: ['rgba(88,216,163,1)', 'rgba(4,189,254,0.6)', 'rgba(237,28,36,0.6)']
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 30,
      left: 0,
    }
  });
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