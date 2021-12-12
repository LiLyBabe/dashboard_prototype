var chartDom_3 = document.getElementById('iv_fico');
var myChart_3 = echarts.init(chartDom_3);
var option_3;

option_3 = {
  title: {
    text: "IV (FICO)",
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
  data: ['0-561', '561-590', '590-616', '616-641', '>641'],
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
[2209,
3378,
5557,
5719,
5802],
    type: 'bar'
},
{
    type: 'line',
    data: [0.43413,
0.35968,
0.34119,
0.32593,
0.29507],
    yAxisIndex: 1
}]
};

option_3 && myChart_3.setOption(option_3);
