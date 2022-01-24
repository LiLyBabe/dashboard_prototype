var loanGroupDom = document.getElementById('payday_loan_group');
var loanGroupChart = echarts.init(loanGroupDom);
var loanGroupOption;

loanGroupOption = {
  title: {
    text: 'Loan Groups',
    textStyle: {
        color: "#ffffff",
        fontSize: 15
    }
  },
    tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '2%',
    left: 'right',
    orient: 'vertical',
    textStyle: {
        color: '#ffffff'
    }
  },
  series: [
    {
      name: 'Loan Groups',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        // borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}: \n\n {c} Loans',
        color: '#ffffff',
      },
      emphasis: {
        label: {
          show: false,
          fontSize: '40',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Active' },
        { value: 735, name: 'Paid-off' },
        { value: 580, name: 'Due' },
        { value: 484, name: 'Overdue' },
        { value: 300, name: 'Default' }
      ]
    }
  ]
};

loanGroupOption && loanGroupChart.setOption(loanGroupOption);
