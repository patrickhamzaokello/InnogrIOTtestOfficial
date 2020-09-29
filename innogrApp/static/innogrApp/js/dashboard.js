(function($) {
  'use strict';
  $(function() {
    if ($("#orders-chart").length) {
      var currentChartCanvas = $("#orders-chart").get(0).getContext("2d");
      var currentChart = new Chart(currentChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [{
              label: 'Delivered',
              data: [260, 380, 230, 400, 780, 530, 340, 200, 400, 650, 780, 500],
              backgroundColor: '#09ab0f'
            },
            {
              label: 'Estimated',
              data: [480, 600, 510, 600, 1000, 570, 500, 350, 450, 710, 820, 650],
              backgroundColor: '#d1cede'
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              gridLines: {
                drawBorder: false,
              },
              ticks: {
                stepSize: 250,
                fontColor: "#686868"
              }
            }],
            xAxes: [{
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontColor: "#686868"
              },
              gridLines: {
                display: false,
              },
              barPercentage: 0.4
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          },
          legendCallback: function(chart) { 
            var text = [];
            text.push('<ul class="legend'+ chart.id +'">');
            for (var i = 0; i < chart.data.datasets.length; i++) {
              text.push('<li><span class="legend-label" style="background-color:' + chart.data.datasets[i].backgroundColor + '"></span>');
              if (chart.data.datasets[i].label) {
                text.push(chart.data.datasets[i].label);
              }
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
          },
        }
      });
      document.getElementById('orders-chart-legend').innerHTML = currentChart.generateLegend();
    }
    if ($('#sales-chart').length) {
      var lineChartCanvas = $("#sales-chart").get(0).getContext("2d");
      var data = {
        labels: ["2013", "2014", "2014", "2015", "2016", "2017", "2018"],
        datasets: [
          {
            label: 'Support',
            data: ligtsensorvalues,
            borderColor: [
              'red'
            ],
            borderWidth: 3,
            fill: false
          },
          {
            label: 'Product',
            data: temperature,
            borderColor: [
              'orange'
            ],
            borderWidth: 3,
            fill: false
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            gridLines: {
              drawBorder: false
            },
            ticks: {
              stepSize: 5,
              fontColor: "#686868"
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        elements: {
          point: {
            radius: 3
          }
        },
        stepsize: 1
      };
      var lineChart = new Chart(lineChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
    }
    if ($("#sales-status-chart").length) {
      var pieChartCanvas = $("#sales-status-chart").get(0).getContext("2d");
      var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: {
          datasets: [{
            data: [30, 25, 40, 5],
            backgroundColor: [
              'red',
              'orange',
              'lightgreen',
              'yellow'
            ],
            borderColor: [
              'red',
              'orange',
              'lightgreen',
              'yellow'
            ],
          }],
      
          // These labels appear in the legend and in the tooltips when hovering different arcs
          labels: [
            'Beans',
            'Soya Beans',
            'Maize',
            'Sun-Flower'
          ]
        },
        options: {
          responsive: true,
          animation: {
            animateScale: true,
            animateRotate: true
          },
          legend: {
            display: false
          },
          legendCallback: function(chart) { 
            var text = [];
            text.push('<ul class="legend'+ chart.id +'">');
            for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
              text.push('<li><span class="legend-label" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
              if (chart.data.labels[i]) {
                text.push(chart.data.labels[i]);
              }
              text.push('<label class="badge badge-light badge-pill legend-percentage ml-auto">'+ chart.data.datasets[0].data[i] + '%</label>');
              text.push('</li>');
            }
            text.push('</ul>');
            return text.join("");
          }
        }
      });
      document.getElementById('sales-status-chart-legend').innerHTML = pieChart.generateLegend();
    }
    if ($("#daily-sales-chart").length) {
      var dailySalesChartData = {
        datasets: [{
          data: [40, 35, 8, 17],
          backgroundColor: [
            '#392c70',
            '#04b76b',
            '#e9e8ef',
            '#ff5e6d'
          ],
          borderWidth: 0
        }],
    
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
          'Food Crop',
          'Animal Rearing',
          'Fisheries',
          'Cash Crop'
        ]
      };
      var dailySalesChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        animation: {
          animateScale: true,
          animateRotate: true
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<ul class="legend'+ chart.id +'">');
          for (var i = 0; i < chart.data.datasets[0].data.length; i++) {
            text.push('<li><span class="legend-label" style="background-color:' + chart.data.datasets[0].backgroundColor[i] + '"></span>');
            if (chart.data.labels[i]) {
              text.push(chart.data.labels[i]);
            }
            text.push('</li>');
          }
          text.push('</ul>');
          return text.join("");
        },
        cutoutPercentage: 70     
      };
      var dailySalesChartCanvas = $("#daily-sales-chart").get(0).getContext("2d");
      var dailySalesChart = new Chart(dailySalesChartCanvas, {
        type: 'doughnut',
        data: dailySalesChartData,
        options: dailySalesChartOptions
      });
      document.getElementById('daily-sales-chart-legend').innerHTML = dailySalesChart.generateLegend();
    }
    if ($("#inline-datepicker-example").length) {
      $('#inline-datepicker-example').datepicker({
        enableOnReadonly: true,
        todayHighlight: true,
      });
    }
  });
})(jQuery);