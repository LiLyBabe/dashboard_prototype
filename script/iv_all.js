var chartDom_ivall = document.getElementById('iv_all');
var myChart_ivall = echarts.init(chartDom_ivall);
var option_ivall;

option_ivall = {
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
      'MonthlyIncome',
      'VantageScore',
      'InternalRiskScore',
      'FiCOScore',
      'LoanPool',
      'DisbursedAmount',
      'APR',
      'LoanPurpose',
      'ResidenceStatus',
      'TotalCreditLines'
    ]
  },
  series: [
    {
      name: 'IV',
      type: 'bar',
      data: [
        0.051438, 0.03103, 0.030519, 0.028904, 0.012938, 0.008312, 0.005929,
        0.00462, 0.00361169, 0.00179
      ]
    }
  ]
};

option_ivall && myChart_ivall.setOption(option_ivall);
