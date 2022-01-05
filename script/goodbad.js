var chartDom_goodbad = document.getElementById('goodbad');
var myChart_goodbad = echarts.init(chartDom_goodbad);
var option_goodbad;

option_goodbad = {
  title: {
    text: 'Good Loans vs Bad Loans',
    left: 'center',
    
    textStyle: { color: '#ffffff' }
  },
  legend: {
    data: ['Good Loans', 'Bad Loans', 'Default Odds'],
    textStyle: {color: '#ffffff'},
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
      data: [
        'Jan/16',
        'Feb/16',
        'Mar/16',
        'Apr/16',
        'May/16',
        'Jun/16',
        'Jul/16',
        'Aug/16',
        'Sep/16',
        'Oct/16',
        'Nov/16',
        'Dec/16',
        'Jan/17',
        'Feb/17',
        'Mar/17',
        'Apr/17',
        'May/17',
        'Jun/17',
        'Jul/17',
        'Aug/17',
        'Sep/17',
        'Oct/17',
        'Nov/17',
        'Dec/17',
        'Jan/18',
        'Feb/18',
        'Mar/18'
      ],
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
      name: 'Good Loans',
      data: [
        711, 751, 757, 824, 971, 1636, 1955, 2384, 2699, 3149, 3679, 4313, 4702,
        4872, 5122, 5408, 5900, 6557, 7291, 7988, 8840, 10070, 11941, 14024,
        14568, 15019, 15019
      ],
      type: 'line'
    },
    {
      name: 'Bad Loans',
      data: [
        781, 806, 811, 846, 947, 1477, 1754, 2238, 2606, 3353, 4051, 4750, 5180,
        5322, 5487, 5721, 5988, 6271, 6535, 6761, 6976, 7194, 7432, 7628, 7646,
        7647, 7647
      ],
      type: 'line'
    },
    {
      name: 'Default Odds',
      type: 'line',
      data: [
        0.52, 0.52, 0.52, 0.51, 0.49, 0.47, 0.47, 0.48, 0.49, 0.52, 0.52, 0.52,
        0.52, 0.52, 0.52, 0.51, 0.5, 0.49, 0.47, 0.46, 0.44, 0.42, 0.38, 0.35,
        0.34, 0.34, 0.34
      ],
      yAxisIndex: 1
    }
  ]
};

option_goodbad && myChart_goodbad.setOption(option_goodbad);
