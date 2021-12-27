var chartDom_limitc = document.getElementById('limitc');
var myChart_limitc = echarts.init(chartDom_limitc);
var option_limitc;

option_limitc = {
  title: {
    text: 'Limit Control Matrix',
    left: 'center',
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
    {  splitLine: {
      show: false
    },
      axisLabel: { color: '#ffffff' }
    }
  ],
  yAxis: [
    { splitLine: {
      show: false
    },
      axisLabel: {
        color: '#ffffff'
      }
    }
  ],
  series: [
    {
      symbolSize: 20,
      data: [
        [10000.0, 0.041716028587443166],
        [10000.0, 0.05106616727185498],
        [10000.0, 0.06265694590154525],
        [9000.0, 0.07710772625168849],
        [8100.0, 0.09526084043751382],
        [7290.0, 0.11829903826859389],
        [6561.0, 0.14795719585747247],
        [5904.900000000001, 0.1869427000294025],
        [5314.410000000001, 0.2398916269237723],
        [4782.969000000001, 0.3160475110225637],
        [4304.672100000001, 0.4402425941011102],
        [3874.204890000001, 0.9535841116638739]
      ],
      type: 'scatter'
    }
  ]
};

option_limitc && myChart_limitc.setOption(option_limitc);
