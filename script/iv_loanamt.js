var chartDom_1 = document.getElementById('iv_loanamt');
var myChart_1 = echarts.init(chartDom_1);
var option_1;

option_1 = {
    title: {
    text: "IV (Disbursed Amount)",
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
  data: ['800-2000', '2000-2600', '2600-3500', '3500-5000', '>5000'],
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
    data: [1594,3905,4926,5955,6286],
    type: 'bar'
},
{
    type: 'line',
    data: [0.06,0.14,0.23,0.28,0.29],
    yAxisIndex: 1
}]
};

option_1 && myChart_1.setOption(option_1);
