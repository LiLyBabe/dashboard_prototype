var chartDom_8 = document.getElementById('ead_12');
var myChart_8 = echarts.init(chartDom_8);
var option_8;

option_8 = {
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
      data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
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
      data: [0.0, 0.0, 1.43, 5.39, 6.88, 8.21, 9.08, 7.72, 6.64, 5.58, 4.41, 4.32]
    },
    {
      type: 'line',
      yAxisIndex: 1,
      data: [0, 0, 24.45, 27.86, 22.09, 14.11, 7.38, 3.05, 0.9, 0.15, 0.01, 0.0]
    }
  ]
};

option_8 && myChart_8.setOption(option_8);
