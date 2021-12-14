var chartDom_6 = document.getElementById('iv_loanpool');
var myChart_6 = echarts.init(chartDom_6);
var option_6;

option_6 = {
  title: {
    text: 'IV (Loan Pool)',
    left: 'center',
    textStyle: { color: '#ffffff' }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    },
    formatter: function (params) {
      return (
        params[0].name +
        '<br/>' +
        'N: ' +
        params[0].value +
        '<br/>' +
        'Default Odds: ' +
        params[1].value
      );
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
      data: ['A', 'B', 'C', 'D'],
      axisLabel: { color: '#ffffff' }
    }
  ],
  yAxis: [
    {
      type: 'value',
      splitLine: {
        lineStyle: { color: '#36344E' },
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
    }
  ],
  series: [
    {
      data: [2457, 3241, 13200, 3768],
      type: 'bar'
    },
    {
      type: 'line',
      data: [0.38, 0.28, 0.2811, 0.5552],
      yAxisIndex: 1
    }
  ]
};

option_6 && myChart_6.setOption(option_6);
