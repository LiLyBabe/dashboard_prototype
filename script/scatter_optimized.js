var chartDom_scattero = document.getElementById('scatter_o');
var myChart_scattero = echarts.init(chartDom_scattero);
var option_scattero;
$.get('https://ntmy99.github.io/db_data.io/scatter_optimized.json', function (data) {

var scatter_o = data
option_scattero = {
  title: {
    text: 'Good Bad Scatter (optimized)',
    left: 'center',
    textStyle: { color: '#ffffff' }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle:{color: '#ffffff'}
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
        name: "Good",
        type: 'scatter',
        data: scatter_o[0],
        symbolSize: 10,
        color: "#ffcc33"
    },
    {   name: "Bad",
        type: 'scatter',
        data: scatter_o[1],
        symbolSize: 10,
        color: "#e53315"
    }
  ]
};
myChart_scattero.setOption(option_scattero);
});
option_scattero && myChart_scattero.setOption(option_scattero);
