var chartDom_5 = document.getElementById('iv_residence');
var myChart_5 = echarts.init(chartDom_5);
var option_5;

option_5 = {
  title: {
    text: 'IV (Residence Status)',
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
  data: ['Own','Rent','Other'],
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
[10596,
10009,
2061],
    type: 'bar'
},
{
    type: 'line',
    data: [0.323518309,
0.351683485,
0.33915575],
    yAxisIndex: 1
}]
};

option_5 && myChart_5.setOption(option_5);