var chartDom_n = document.getElementById('calnew');
var myChart_n = echarts.init(chartDom_n);
var option_n;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/new_c.json', function (data) {  
option_n = {
title: {
        text: "Calibration (new customer)",
        left: 'center',
        textStyle:{color: '#ffffff'}
    },
  xAxis: {},
  yAxis: {},
  series: [
    {
      symbolSize: 5,
      data: data,
      color: "#3377C9",
      type: 'scatter'
    },
    {
      data: [0, 0.4],
      type: 'line',
      color: "#FFA500"
    }
  ]
};

myChart_n.setOption(option_n);
});

option_n && myChart_n.setOption(option_n);