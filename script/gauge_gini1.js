var chartDom_ginig = document.getElementById('unsecuredgini');
var myChart_ginig = echarts.init(chartDom_ginig);
var option_ginig;

option_ginig = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      min: 0,
      max: 1,
      splitNumber: 10,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.2, '#FF6E76'],
            [0.4, '#FDDD60'],
            [0.6, '#58D9F9'],
            [0.8, '#4a996a'],
            [1, '#7CFFB2']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.80.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 20,
        offsetCenter: [0, '-50%'],
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'auto',
          width: 5
        }
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 16,
        distance: -100,
        formatter: function (value) {
          if (value === 0.9) {
            return 'Utopia';
          } else if (value === 0.7) {
            return 'Good';
          } else if (value === 0.5) {
            return 'Acceptable';
          } else if (value === 0.3) {
            return 'Weak';
          } else if (value === 0.1) {
            return 'Very Weak';
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-20%'],
        fontSize: 30
      },
      detail: {
        fontSize: 50,
        offsetCenter: [0, '0%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100) + '%';
        },
        color: 'auto'
      },
      data: [
        {
          value: 0.54
        }
      ]
    }
  ]
};

option_ginig && myChart_ginig.setOption(option_ginig);
