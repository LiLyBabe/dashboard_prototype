var chartDom_pvantage = document.getElementById('parallel_vantage');
var myChart_pvantage = echarts.init(chartDom_pvantage);
var option_pvantage;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/parallel_vantage.json', function (data) {

var data_p = data

option_pvantage = {
            title: {
                text: "Parallel (Vantage)",
                 left: 'center',
                top: '2%',
                textStyle: { color: '#ffffff' }
            },
parallelAxis: [
    {   dim: 0, 
        name: 'Vantage',
        axisLabel: { color: '#ffffff' }
        },
    {
      dim: 1,
      name: 'Default',
      type: 'category',
      data: [0, 1],
      axisLabel: { color: '#ffffff' }
    }
  ],
  visualMap: {  
    min: 0,
    max: 1,
    dimension: 1,
    inRange: {
        color: ['#0e64b2','#aa2e25']
    }
},
            series: [
                {
                    type: 'parallel',
                    smooth: true,
                    lineStyle: {
                        width: 3},
                    data: data_p                }
            ]
        };
        myChart_pvantage.setOption(option_pvantage);
    });
    option_pvantage && myChart_pvantage.setOption(option_pvantage);
