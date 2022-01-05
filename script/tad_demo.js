var chartDom_taddemo = document.getElementById('tad_demo');
var myChart_taddemo = echarts.init(chartDom_taddemo);
var option_taddemo;

option_taddemo = {
  tooltip: {
    trigger: 'axis'
  },
  title: {
    text: 'Time At Default',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 22 }
  },
  xAxis: [
    {
      name: 'Term (months)',
      nameLocation: 'middle',
      nameGap: 20,
      type: 'category',
      data: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19',
        '20',
        '21',
        '22',
        '23',
        '24',
        '25',
        '26',
        '27',
        '28',
        '29',
        '30',
        '31',
        '32',
        '33',
        '34',
        '35',
        '36'
      ],
      axisPointer: {
        type: 'shadow'
      },
      axisLabel: { color: '#ffffff' },
      nameTextStyle: { color: '#ffffff' }
    }
  ],
  yAxis: [
    { name: 'Number of Default',
      type: 'value',
      splitLine: {
        lineStyle: { color: '#36344E' },
        show: true
      },
      axisLabel: { color: '#ffffff' },
      nameTextStyle: { color: '#ffffff' }
    }
  ],
  series: [
    {
      type: 'bar',
      color: '#FFA500',
      data: [
        {
          value: 2514,
          itemStyle: {
            color: '#a90000'
          }
        },
        61,
        291,
        380,
        443,
        495,
        403,
        357,
        262,
        217,
        201,
        82,
        180,
        149,
        107,
        119,
        73,
        59,
        39,
        33,
        30,
        7,
        9,
        0,
        7,
        6,
        7,
        2,
        1,
        2,
        3,
        0,
        0,
        0,
        0,
        0
      ]
    }
  ]
};

option_taddemo && myChart_taddemo.setOption(option_taddemo);
