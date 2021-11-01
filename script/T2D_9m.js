var chartDom_7 = document.getElementById('ead_9');
var myChart_7 = echarts.init(chartDom_7);
var option_7;

option_7 = {
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
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      min: 0,
      max: 45,
      interval: 5,
      axisLabel: {
        formatter: '{value} %'
      }
    },
    {
      type: 'value',
      min: 0,
      max: 45,
      interval: 5,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      type: 'bar',
      data: [0.0, 0.0, 1.43, 5.39, 6.88, 8.21, 9.08, 7.72, 6.64]
    },
    {
      type: 'line',
      yAxisIndex: 1,
      data: [0, 0, 40.9, 34.3, 17.7, 6, 1.1, 0.0, 0.0]
    }
  ]
};

option_7 && myChart_7.setOption(option_7);
