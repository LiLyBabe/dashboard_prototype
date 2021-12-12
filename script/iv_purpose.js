var chartDom_7 = document.getElementById('iv_purpose');
var myChart_7 = echarts.init(chartDom_7);
var option_7;

option_7 = {
  title: {
    text: 'IV (Loan Purpose)',
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
      data: [
        'Business Loan',
        'Car Financing',
        'Consumer Goods',
        'Debt Consolidation',
        'Home Improvement',
        'Legal or Tax',
        'Major Purchase',
        'Medical Expenses',
        'NA',
        'Others',
        'Vacation',
        'Wedding'
      ],
      axisLabel: { interval: 0, rotate: 30, color: '#ffffff' }
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
      data: [
        366, 1168, 1838, 11930, 1176, 315, 326, 1089, 1177, 2595, 427, 259
      ],
      type: 'bar'
    },
    {
      type: 'line',
      data: [
        0.388, 0.3159, 0.3101, 0.3404, 0.2798, 0.2635, 0.2791, 0.314, 0.5412,
        0.316, 0.2974, 0.2934
      ],
      yAxisIndex: 1
    }
  ]
};

option_7 && myChart_7.setOption(option_7);
