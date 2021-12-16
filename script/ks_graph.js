var chartDom_ks = document.getElementById('ks_dist');
var myChart_ks = echarts.init(chartDom_ks);
var option_ks;


option_ks = {
  title: {
    text: 'Kolmogrov Smirnov',
    textStyle: {color: '#ffffff'}
  },
  legend: {
    data: ['Good', 'Bad'],
    textStyle:{color: '#ffffff'}

  },
  grid: {
    top: '75',
    containLabel: true
},
tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    },
},
  xAxis: {
    data: ['0.16',
        '0.18',
        '0.2',
        '0.21',
        '0.23',
        '0.25',
        '0.26',
        '0.28',
        '0.3',
        '0.31',
        '0.33',
        '0.35',
        '0.37',
        '0.38',
        '0.4',
        '0.42',
        '0.43',
        '0.45',
        '0.47',
        '0.48',
        '0.5',
        '0.52',
        '0.54',
        '0.55',
        '0.57',
        '0.59',
        '0.6',
        '0.62',
        '0.64',
        '0.65',
        '0.67',
        '0.68'
      ],
    axisLabel: { color: '#ffffff' },
    splitLine: {
      show: false
    }
  },
  yAxis: {  axisLabel: { color: '#ffffff' },
  splitLine: {
    lineStyle: {
        color: '#36344E'
    },
    show: true,
},
},
  series: [
    {
      name: 'Good',
      type: 'bar',
      color: '#6495ED',
      data: [
        5, 27, 163, 456, 1463, 1420, 1962, 1250, 1875, 1720, 993, 675, 340, 432,
        306, 262, 171, 108, 130, 124, 147, 126, 111, 149, 192, 142, 107, 78, 75,
        9, 1, 0
      ],
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10;
      }
    },
    {
      name: 'Bad',
      type: 'bar',
      color: '#FFA500',
      data: [
        1, 1, 20, 78, 241, 347, 414, 457, 786, 521, 513, 312, 272, 403, 418,
        194, 194, 120, 140, 122, 154, 175, 193, 223, 324, 318, 190, 238, 185,
        85, 8, 0
      ],
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
    return idx * 5;
  }
};

option_ks && myChart_ks.setOption(option_ks);