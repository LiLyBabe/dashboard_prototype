var chartDom_pcredit = document.getElementById('parallel_credit');
var myChart_pcredit = echarts.init(chartDom_pcredit);
var option_pcredit;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/parallel_credit.json', function (data) {
var data_p = data

 option_pcredit = {
            title: {
                text: "Parallel (Total Credit Lines)",
                 left: 'center',
                top: '2%',
                textStyle: { color: '#ffffff' }
            },
  parallelAxis: [
    {   dim: 0, 
        name: 'Credit Lines',
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
        myChart_pcredit.setOption(option_pcredit);
    });
    option_pcredit && myChart_pcredit.setOption(option_pcredit);
