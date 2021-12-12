var chartDom_3 = document.getElementById('iv_riskscore');
var myChart_3 = echarts.init(chartDom_3);
var option_3;

option_3 = {
  title: {
    text: 'IV (Internal Risk Score)',
    left: 'center',
    textStyle:{color: '#ffffff'}
},
  tooltip: {
                trigger: 'axis',
                axisPointer:{
                    type: 'shadow'
                },
                formatter: function (params){
                    return params[0].name + '<br/>' + "N: " + params[0].value + '<br/>' 
                    + "Default Odds: " + params[1].value;
                }
            },
  grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},

xAxis: [
{
  type: 'category',
  data: ['500-892', '892-912', '912-933', '933-951', '>951'],
  axisLabel: { color: '#ffffff' }
}
],
               yAxis: [{type: 'value',
                  splitLine: {
                  lineStyle: {color: '#36344E'},
                    show: true
                },
                axisLabel: {
                    color: '#ffffff'
                }

            },
            {
                type: 'value',
                splitLine: {
                    show: false
                },
                axisLabel: { color: '#ffffff' }
            }],
series: [{
    data: 
[2239,
3222,
5861,
5615,
5729],
    type: 'bar'
},
{
    type: 'line',
    data: [0.30147,
0.36530,
0.38662,
0.33713,
0.28556],
    yAxisIndex: 1
}]
};


option_3 && myChart_3.setOption(option_3);