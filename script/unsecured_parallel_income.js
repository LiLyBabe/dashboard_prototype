var chartDom_pincome = document.getElementById('parallel_income');
var myChart_pincome = echarts.init(chartDom_pincome);
var option_pincome;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/parallel_income.json', function (data) {

        var data_p = data

        option_pincome = {
            title: {
                text: "Parallel (Monthly Income)",
                 left: 'center',
                top: '2%',
                textStyle: { color: '#ffffff' }
            },
  parallelAxis: [
    {   dim: 0, 
        name: 'Monthly Income',
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
        myChart_pincome.setOption(option_pincome);
    });
    option_pincome && myChart_pincome.setOption(option_pincome);
