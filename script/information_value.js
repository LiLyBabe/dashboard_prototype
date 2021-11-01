var chartDom = document.getElementById('information_value');
var myChart = echarts.init(chartDom);
var option;


iv_option = {
  title: {
    text: 'Information Value',
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
  xAxis: {
    type: 'value',
    axisPointer: 'false',
    axisLabel: { color: '#ffffff' }
  },
  yAxis: {
    type: 'category',
    axisTick: 'false',
    axisLabel: { color: '#ffffff' },
    // axisPointer:'false',
    data: [
      'Origination Weekend',
      'Origination Hour',
      'Income',
      'latitude',
      'longitude',
      'Loan 2 Income',
      'Amount Due',
      'z_isMadeUpEmail',
      'Income Frequency',
      'Loan Term (days)',
      'Living Arrangement Own',
      'Communication Preference',
      'Income Type',
      'ZIP bad rate',
      'New Customer',
      'Income Duration (M)',
      'Customer Duration (Months)'
    ]
  },
  series: [
    {
      name: 'IV',
      type: 'bar',
      data: [
        0.0001596505122738483, 0.0003644931526653962, 0.001326657205182454,
        0.00133898534047767, 0.006740303175958224, 0.014099570852576506,
        0.024575599841363423, 0.030717506880877224, 0.03269484792882181,
        0.035374535755743446, 0.03862818965261583, 0.04401102346874138,
        0.07024595750220049, 0.07384951630610528, 0.0960557422494557,
        0.12179762011600537, 0.5040887976916109
      ]
    }
  ]
};

option && myChart.setOption(option);
