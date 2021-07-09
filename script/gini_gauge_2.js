var chartDom = document.getElementById('gini_gauge_2');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Out Sample Data',
        left: 'center',
        bottom: '0%',
        textStyle: {color: '#ffffff'}
    },
    series: [{
        type: 'gauge',
        startAngle: 90,
        endAngle: 450,
        progress: {
            show: true,
            width: 30
        },
        axisLine: {
            show: true,
            lineStyle: {
                width: 30,
                // color: [[1,'#5470c6'],[2, '#5fc654']]
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            length: 15,
            show: false
        },
        axisLabel: {
            distance: 25,
            show: false,
        },
        pointer: {
            show: false
        },
        detail: {
            valueAnimation: true,
            fontSize: 35,
            offsetCenter: [0, '0%'],
            formatter: '{value} %',
            color: '#ffffff'
        },
        data: [{
            value: 43
        }]
    }]
};

option && myChart.setOption(option);
