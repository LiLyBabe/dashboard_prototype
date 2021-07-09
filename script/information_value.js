var chartDom = document.getElementById('information_value');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Information Value',
        textStyle: {color: '#ffffff'}
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
        axisPointer:'false',
        axisLabel: {color: '#ffffff'}
    },
    yAxis: {
        type: 'category',
        axisTick:'false',
        axisLabel: {color: '#ffffff'},
        // axisPointer:'false',
        data: ['Orignation Hour', 'Loan to Income', 'Amount Due', 'Income', 'Madeup Email', 
        'Income Frequency', 'Loan Term', 'Living Arrangment', 'Communication Preferences', 
        'Income Type', 'ZIP Bad Rate', 'Income Duration', 'Customer Duration']
    },
    series: [
        {
            name: 'IV',
            type: 'bar',
            data: [0.005, 0.015, 0.025, 0.030, 0.04, 0.045, 0.047, 0.048, 0.06, 
            0.075, 0.085, 0.24, 0.43]
        }
    ]
};

option && myChart.setOption(option);
