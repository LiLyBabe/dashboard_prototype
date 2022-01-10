var chartDom8 = document.getElementById('epsf');
var myChart8 = echarts.init(chartDom8);
var option8;
var $j = jQuery.noConflict();
$.get('https://ntmy99.github.io/db_data.io/test.json', function (data) {
    var datas = [];
    for (var x = 1; x < data.length; x++) { //
    datas.push([data[x].x, data[x].y, data[x].z]);
    }    
      var option8 = {
          tooltip: {},
          backgroundColor: '#fff',
          visualMap: {
                min: 0,
                max: 2400,
                dimension: 2,
                inRange: {
                    color: ['#fe0300', '#f09a09', '#f5f811', '#00ff0d', '#00fea8', '#0b9df0', '#1710c0']
                }
          },
          grid3D: {
              viewControl: {
                  //projection: 'orthographic',
              }
          },
          xAxis3D: {
              type: 'value',
             // splitLine: {show: false}

          },
          yAxis3D: {
              type: 'value',
             // splitLine: {show: false}
          },
          zAxis3D: {
              type: 'value',
              // splitLine: {show: false}
          },
          series: [{
              type: 'surface',
                      wireframe: {
            //          show: false
              },
              data: datas,
          }]
      };
      myChart8.setOption(option8);
  });