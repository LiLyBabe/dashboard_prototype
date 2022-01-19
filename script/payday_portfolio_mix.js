var portfolioMixDom = document.getElementById('payday_portfolio_mix');
var portfolioMixChart = echarts.init(portfolioMixDom);
var portfolioMixOption;

portfolioMixOption = {
    title: {
        text: 'Portfolio Mix',
        textStyle: {
            color: '#ffffff',
            fontSize: 15
        }
    },
    xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'],
        axisLabel: {
            color: '#ffffff'
        }
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            color: '#ffffff'
        },
        splitLine: {
            lineStyle: {
                color: '#36344E'
            },
            show: true
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
    },
    legend: {
        textStyle: { color: '#ffffff' }
    },
    grid: {
        left: '3%',
        right: '3%',
        top: '15%',
        bottom: '5%',
        containLabel: true
    },
    series: [
        {
            name: 'Good Loans',
            data: [0, 4308, 10395, 8000, 1752, 4000, 690, 3, 0, 0],
            type: 'bar',
            stack: 'mix'
        },
        {
            name: 'Bad Loans',
            data: [0, 3000, 7000, 3004, 5000, 828, 1000, 15, 0, 0],
            type: 'bar',
            stack: 'mix'
        }
    ]
};

portfolioMixOption && portfolioMixChart.setOption(portfolioMixOption);
