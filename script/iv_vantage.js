var chartDom_8 = document.getElementById('iv_vantage');
var myChart_8 = echarts.init(chartDom_8);
var option_8;

option_8 = {
  title: {
    text: 'IV (Vantage Score)',
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
      data: ['430-547', '547-570', '570-596', '596-626', '626-821'],
      axisLabel: {color: '#ffffff' }
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
      data: [2178, 3347, 5584, 5853, 5704],
      type: 'bar'
    },
    {
      type: 'line',
      data: [0.42562, 0.37795, 0.34044, 0.32411, 0.2905],
      yAxisIndex: 1
    }
  ]
};

option_8 && myChart_8.setOption(option_8);
