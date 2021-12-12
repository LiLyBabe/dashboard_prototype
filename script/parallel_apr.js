var chartDom_papr = document.getElementById('parallel_apr');
var myChart_papr = echarts.init(chartDom_papr);
var option_papr;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/parallel_apr.json', function (data) {

        var data_p = data

        option_papr = {
            title: {
                text: "Parallel (APR)",
                 left: 'center',
                top: '2%',
                textStyle: { color: '#ffffff' }
            },
  parallelAxis: [
    {   dim: 0, 
        name: 'APR' 
        },
    {
      dim: 1,
      name: 'Default',
      type: 'category',
      data: [0, 1]
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
        myChart_papr.setOption(option_papr);
    });
    option_papr && myChart_papr.setOption(option_papr);
