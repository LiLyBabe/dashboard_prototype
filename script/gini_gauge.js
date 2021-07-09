var chartDom = document.getElementById('gini_gauge_1');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'In Sample Data',
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
            distance: 40,
            show: false,
        },
        pointer: {
            show: false
        },
        detail: {
            valueAnimation: true,
            fontSize: 40,
            offsetCenter: [0, '0%'],
            formatter: '{value} %',
            textStyle: {color: '#ffffff'}
        },
        data: [{
            value: 48
        }]
    }]
};

option && myChart.setOption(option);
