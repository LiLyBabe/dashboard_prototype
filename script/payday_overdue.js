var overdueDom = document.getElementById('payday_overdue');
var overdueChart = echarts.init(overdueDom);
var overdueOption;
var xAxisData = [];

for (i=1; i<15; i++) {
    xAxisData.push(i + ' Days');
}

overdueOption = {

    title: {
        text: 'Overdue Day Distribution',
        textStyle: {
            color: '#ffffff',
            fontSize: 15
        }
    },
    xAxis: {
        type: 'category',
        data: xAxisData,
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

    grid: {
        left: '3%',
        right: '3%',
        top: '15%',
        bottom: '5%',
        containLabel: true
    },
    series: [
        {
            data: [1500, 4308, 10395, 8000, 1752, 4000, 690, 930, 700, 300,280,190,80,10],
            type: 'bar',
        }
    ]
};

overdueOption && overdueChart.setOption(overdueOption);
