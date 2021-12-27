var chartDom_riskpdemo = document.getElementById('riskpdemo');
var myChart_riskpdemo = echarts.init(chartDom_riskpdemo);
var option_riskpdemo;

option_riskpdemo = {
  title: {
    text: 'Risk Pricing',
    left: 'left',
    textStyle: { color: '#ffffff' }
  },
  legend: {
    data: ['PD', 'Current Pricing', 'Correct Pricing'],
    left: 'right',
    textStyle: { color: '#ffffff' }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
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
      data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I ', 'J', 'K', 'L'],
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
    }
  ],
  series: [
    {
      name: 'PD',
      data: [
        0.04, 0.05, 0.06, 0.08, 0.1, 0.12, 0.15, 0.19, 0.24, 0.32, 0.44, 0.95
      ],
      type: 'line'
    },
    {
      name: 'Current Pricing',
      data: [0.0, 0.0, 0.59, 0.65, 0.89, 0.92, 0.8, 0.74, 1.39, 1.55, 0.0, 0.0],
      type: 'line'
    },
    {
      name: 'Correct Pricing',
      type: 'line',
      color: '#e53315',
      data: [0.45, 0.48, 0.59, 0.65, 0.75, 0.92, 1.0, 1.1, 1.2, 1.3, 1.4, 1.4]
    }
  ]
};

option_riskpdemo && myChart_riskpdemo.setOption(option_riskpdemo);
