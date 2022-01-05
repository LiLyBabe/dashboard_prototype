var chartDom_scattergb = document.getElementById('scattergb');
var myChart_scattergb = echarts.init(chartDom_scattergb);
var option_scattergb;
$.get('https://ntmy99.github.io/db_data.io/scatter_.json', function (data) {

var scatter_gb = data
option_scattergb = {
  title: {
    text: 'Good Bad Scatter',
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
    { name: 'Loan Amount',
      nameLocation: 'middle',
      nameTextStyle: { color: '#ffffff' },
      nameGap: 15,
      splitLine: {
      show: false
    },
      axisLabel: { color: '#ffffff' }
    }
  ],
  yAxis: [
    
    { name: 'PD',
      nameTextStyle: { color: '#ffffff' },
      splitLine: {
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
        data: scatter_gb[0],
        symbolSize: 5,
        color: "#ffcc33"
    },
    {   name: "Bad",
        type: 'scatter',
        data: scatter_gb[1],
        symbolSize: 5,
        color: "#e53315"
    }
  ]
};
myChart_scattergb.setOption(option_scattergb);
});
option_scattergb && myChart_scattergb.setOption(option_scattergb);
