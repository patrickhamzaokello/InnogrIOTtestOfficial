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

 

  var wlc3LineChart = c3.generate({
    bindto: '#WL-line-chart',
    data: {
      columns: [
        waterLevel,
        pastwaterLevel,


      ],
      axes: {
        Past_Water_Level: 'y2'
      },
      types: {
        Past_Water_Level: 'spline',
        Water_Level: 'spline'

      }
    },
    color: {
      pattern: ['red', 'orange']
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
        watermoisture,
        pwatermoisture,


      ],
      axes: {
        Past_Week_Soil_Moisture: 'y2'
      },
      types: {
        Past_Week_Soil_Moisture: 'bar',
        Current_Week_Soil_Moisture: 'bar'

      }
    },
    color: {
      pattern: ['#0cab12','#c5ea9a']
    },
    axis: {
      y: {
        label: {
          text: 'Past Week Sensor Values (Percentage (%))',
          position: 'outer-middle'
        }

      },
      y2: {
        show: true,
        label: {
          text: 'Present Week Sensor Values (Percentage (%))',
          position: 'outer-middle'
        }
      }
    }

  });


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




})(jQuery);