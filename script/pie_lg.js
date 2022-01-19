var chartDom_pielg = document.getElementById('pie_lg');
var myChart_pielg = echarts.init(chartDom_pielg);
var option_pielg;

option_pielg = {
  tooltip: {
    trigger: 'item'
  },
  title: {
    text: 'Loan Groups',
    left: 'center',
    textStyle:{color: '#ffffff'}

  },
  legend: {
    top: '5%',
    left: 'center',
    textStyle:{color: '#ffffff'}
  },
  series: [
    {
      name: 'Loan Groups',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#292929',
        borderWidth: 2
      },
      emphasis: {
        label: {
          show: true        }
      },
      labelLine: {
        show: true
      },
      data: [
        {
          value: 11402,
          name: 'Closed - Good',
          itemStyle: {
            color: '#ffcc33'
          }
        },
        { value: 3617, name: 'Active - Good' },
        {
          value: 7647,
          name: 'Default',
          itemStyle: {
            color: '#e53315'
          }
        }
      ]
    }
  ]
};

option_pielg && myChart_pielg.setOption(option_pielg);