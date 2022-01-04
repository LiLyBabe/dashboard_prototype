var chartDom_ks = document.getElementById('ks_dist');
var myChart_ks = echarts.init(chartDom_ks);
var option_ks;


$.get('https://ntmy99.github.io/db_data.io/ks_bad.json', function (baddata) {
    $.get('https://ntmy99.github.io/db_data.io/ks_good.json', function (gooddata) {
        var bad_data = baddata
option_ks = {
  title: {
    text: 'Kolmogrov Smirnov',
    textStyle: {color: '#ffffff'}
  },
  legend: {
    data: ['Good', 'Bad'],
    textStyle:{color: '#ffffff'}

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
},
  xAxis: {
    data: bad_data[0],
    
    axisLabel: { color: '#ffffff' },
    splitLine: {
      show: false
    }
  },
  yAxis: {  axisLabel: { color: '#ffffff' },
  splitLine: {
    lineStyle: {
        color: '#36344E'
    },
    show: true,
},
},
  series: [
    {
      name: 'Good',
      type: 'bar',
      color: '#6495ED',
      data: gooddata[1],
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10;
      }
    },
    {
      name: 'Bad',
      type: 'bar',
      color: '#FFA500',
      data: bad_data[1],
      emphasis: {
        focus: 'series'
      },
      animationDelay: function (idx) {
        return idx * 10 + 100;
      }
    }
  ],
  animationEasing: 'elasticOut',
  animationDelayUpdate: function (idx) {
    return idx * 5;
  }
};
myChart_ks.setOption(option_ks);
    });
});
option_ks && myChart_ks.setOption(option_ks);
    