var chartDom_2 = document.getElementById('iv_income');
var myChart_2 = echarts.init(chartDom_2);
var option_2;

option_2 = {
  title: {
    text: "IV (Monthly Income)",
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
  data: ['406-2000', '2000-2700', '2700-3800', '3800-5224', '>5224'],
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
[1938,
3593,
5794,
5674,
5667],
    type: 'bar'
},
{
    type: 'line',
    data: [0.37874,
0.33677,
0.34588,
0.34544,
0.30686],
    yAxisIndex: 1
}]
};


option_2 && myChart_2.setOption(option_2);