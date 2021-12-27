var chartDom_5 = document.getElementById('iv_apr');
var myChart_5 = echarts.init(chartDom_5);
var option_5;

option_5 = {
  title: {
    text: 'IV (APR)',
    left: 'center',
    textStyle: {color: '#ffffff'}
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
  data: ['0.06-0.355', '0.355-0.595', '0.595-0.985', '0.985-1', '>1'],
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
[2166,
2295,
3130,
11307,
3768],
    type: 'bar'
},
{
    type: 'line',
    data: [0.39381,
0.36253,
0.33163,
0.25046,
0.55520],
    yAxisIndex: 1
}]
};

option_5 && myChart_5.setOption(option_5);
