var chartDom_4 = document.getElementById('iv_creditlines');
var myChart_4 = echarts.init(chartDom_4);
var option_4;

option_4 = {
  title: {
      text: "IV (Total Credit Lines)",
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
    data: ['0-3', '3-5', '5-9', '9-15', '>15'],
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
[1786,
2531,
5731,
6366,
6252],
      type: 'bar'
  },
  {
      type: 'line',
      data: [0.36954,
0.33860,
0.33275,
0.33475,
0.33461],
      yAxisIndex: 1
  }]
};

option_4 && myChart_4.setOption(option_4);
