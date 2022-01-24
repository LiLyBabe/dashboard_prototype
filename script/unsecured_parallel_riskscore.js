var chartDom_priskscore = document.getElementById('parallel_riskscore');
var myChart_priskscore = echarts.init(chartDom_priskscore);
var option_priskscore;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/parallel_riskscore.json', function (data) {
var data_p = data

 option_priskscore = {
            title: {
                text: "Parallel (Risk Score)",
                 left: 'center',
                top: '2%',
                textStyle: { color: '#ffffff' }
            },
  parallelAxis: [
    {   dim: 0, 
        name: 'Risk Score',
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
    max:1,
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
        myChart_priskscore.setOption(option_priskscore);
    });
    option_priskscore && myChart_priskscore.setOption(option_priskscore);
