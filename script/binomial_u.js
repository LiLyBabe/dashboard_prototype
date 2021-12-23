var chartDom_binomialu = document.getElementById('binomial_u');
var myChart_binomialu = echarts.init(chartDom_binomialu);
var option_binomialu;

option_binomialu = {
  title: {
    text: 'Binomial Test',
    left: 'center',
    top: '2%',
    textStyle: { color: '#ffffff' }
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
    formatter: function (params) {
      var total;
      total = params[0].value + params[1].value;
      return (
        params[1].name +
        '<br/>' +
        params[0].seriesName +
        ' : ' +
        params[0].value +
        '<br/>' +
        params[1].seriesName +
        ' : ' +
        total +
        '<br/>' +
        params[2].seriesName +
        ' : ' +
        params[2].value
      );
    }
  },
  xAxis: {
    type: 'category',
    name: 'Credit Ratings',
    nameLocation: 'middle',
    nameGap: '30',
    axisTick: 'false',
    axisLabel: { color: '#ffffff' },
    nameTextStyle: { color: '#ffffff' },
    nameLocation: 'middle',
    nameGap: 20,
    splitLine: { show: false },
    data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  },
  yAxis: {
    type: 'value',
    name: 'Number of Default',
    axisLabel: { color: '#ffffff' },
    nameTextStyle: { color: '#ffffff' },
    nameLocation: 'middle',
    nameGap: 30,
    splitLine: {
      lineStyle: {
        color: '#36344E'
      },
      show: true
    },
    axisLabel: { color: '#ffffff' },
    nameTextStyle: { color: '#ffffff' }
  },
  series: [
    {
      name: 'Lower Limit',
      type: 'bar',
      stack: 'ok',
      itemStyle: {
        barBorderColor: 'rgba(0,0,0,0)',
        color: 'rgba(0,0,0,0)'
      },
      emphasis: {
        itemStyle: {
          barBorderColor: 'rgba(0,0,0,0)',
          color: 'rgba(0,0,0,0)'
        }
      },
      data: [0, 0, 0, 0, 240.0, 2386.0, 1715.0, 1396.0, 328.0, 0]
    },
    {
      name: 'Upper Limit',
      type: 'bar',
      stack: 'ok',
      label: {
        show: false,
        position: 'top'
      },
      data: [0, 0, 0, 0, 79.0, 227.0, 182.0, 148.0, 61.0, 0]
    },
    {
      name: 'Real Default',
      type: 'scatter',
      label: {
        show: false,
        position: 'bottom'
      },
      data: [0, 0, 0, 0, 175, 2533, 2461, 2039, 439, 0]
    }
  ]
};

option_binomialu && myChart_binomialu.setOption(option_binomialu);
