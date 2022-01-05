var chartDom_pmix = document.getElementById('pmix');
var myChart_pmix = echarts.init(chartDom_pmix);
var option_pmix;

option_pmix = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      title: {
        text: 'Portfolio Mix',
            left: 'center',
        textStyle:{color: '#ffffff'}
      },
      legend: {
        top: '5%',
        left: 'center',
        textStyle:{color: '#ffffff'}
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          name: "Credit Rating",
          nameTextStyle: {color:'#ffffff'} ,
          nameLocation: 'middle',
          nameGap: 17,
          axisLabel: { color: '#ffffff' },
          data: ['A', 'B', 'C', 'D', 'E', 'F', 'G','H','I','J','K','L'],
          splitLine: { show: false }           
        }
      ],
      yAxis: [
        { name: "Number of Loans",
          nameTextStyle: {color:'#ffffff'} ,
          type: 'value',
          axisLabel: { color: '#ffffff' },
          splitLine: { show: false }           
        }
      ],
      series: [
        {
          name: 'Good Loans',
          type: 'bar',
          stack: 'Loans',
          color: '#ffcc33',
          emphasis: {
            focus: 'series'
          },
          data:  [0,
    0,
    27,
    650,
    4501,
    5540,
    2626,
    1105,
    947,
    726,
    0,
    0]
        },
        {
          name: 'Bad Loans',
          type: 'bar',
          color: "#e53315",
          stack: 'Loans',
          emphasis: {
            focus: 'series'
          },
          data:  [0,
    0,
    1,
    44,
    703,
    1626,
    1301,
    964,
    888,
    1012,
    0,
    0]
        }
      ]
    };

option_pmix && myChart_pmix.setOption(option_pmix);
