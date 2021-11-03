var chartDom_9 = document.getElementById('ead_36');
var myChart_9 = echarts.init(chartDom_9);
var option_9;

option_9 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  },
  title: {
    text: 'Exposure at Default',
    left: 'center',
    textStyle: { color: '#ffffff', fontSize: 15 }
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
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 10,
      interval: 2,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    {
      type: 'value',
      min: 0,
      max: 10,
      interval: 2,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [
        0.0, 0.0, 1.43, 5.39, 6.88, 8.21, 9.08, 7.72, 6.64, 5.58, 4.41, 4.32,
        4.07, 3.62, 3.21, 3.17, 2.71, 2.57, 2.57, 2.17, 2.06, 1.94, 1.51, 1.62,
        1.67, 1.27, 1.15, 1.07, 0.87, 0.77, 0.68, 0.53, 0.44, 0.29, 0.38, 0.0
      ]
    },
    {
      type: 'line',
      yAxisIndex: 1,
      data: [
        0.0, 0.0, 2.94, 5.08, 6.55, 7.47, 7.94, 8.06, 7.9, 7.54, 7.04, 6.43,
        5.78, 5.1, 4.42, 3.77, 3.16, 2.61, 2.11, 1.67, 1.3, 0.98, 0.72, 0.52,
        0.36, 0.24, 0.15, 0.09, 0.05, 0.02, 0.01, 0.0, 0.0, 0.0, 0.0, 0.0
      ]
    }
  ]
};

option_9 && myChart_9.setOption(option_9);