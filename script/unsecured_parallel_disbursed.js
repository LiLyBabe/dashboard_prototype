var chartDom_pdisbursed = document.getElementById('parallel_disbursed');
var myChart_pdisbursed = echarts.init(chartDom_pdisbursed);
var option_pdisbursed;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/parallel_disbursed.json', function (data) {

var data_p = data

option_pdisbursed = {
            title: {
                text: "Parallel (Disbursed Amount)",
                 left: 'center',
                top: '2%',
                textStyle: { color: '#ffffff' }
            },
parallelAxis: [
    {   dim: 0, 
        name: 'Disbursed Amount',
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
        myChart_pdisbursed.setOption(option_pdisbursed);
    });
    option_pdisbursed && myChart_pdisbursed.setOption(option_pdisbursed);
