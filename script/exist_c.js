var chartDom_e= document.getElementById('calexist');
var myChart_e = echarts.init(chartDom_e);
var option_e;

$.get('https://ntmy99.github.io/db_data.io/exist_c.json', function (data_e) {  
option_e = {
title: {
        text: "Calibration (existing customer)",
        left: 'center',
        textStyle:{color: '#ffffff'}
    },
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 5,
      data: data_e,
      color: "#3377C9"
,
      type: 'scatter'
    },
    {
      data: [0, 0.4],
      type: 'line',
      color: "#FFA500"
    }
  ]
};
myChart_e.setOption(option_e)
});

option_e && myChart_e.setOption(option_e);