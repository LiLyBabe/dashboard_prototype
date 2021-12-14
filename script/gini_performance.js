var chartDom = document.getElementById('gini_performance');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Gini Performance',
        left: 'center',
        textStyle: { color: '#ffffff' }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        },
        formatter: function (params) {
            return "Run: " + params[0].name + '<br/>' + "In Sample Model Efficiency: " + params[0].value 
        }
    },
    xAxis: {
        type: 'category',
        axisTick: 'false',
        boundaryGap: false,
        axisLabel: { color: '#ffffff' },
        data: function () {
            var list = [];
            for (var i = 1; i <= 12; i++) {
                list.push(i);
            }
            return list;
        }()
    },
    yAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: '#36344E'
            },
            show: true,
        },
        axisLabel: { color: '#ffffff' },
    },
    series: [{
        data: [0.48, 0.43, 0.4, 0.45, 0.46, 0.39, 0.35, 0.37, 0.33, 0.27, 0.25, 0.29, 0.27, 0.29],
        type: 'line',
        lineStyle: {
            color: '#f98f2a',
        },
        itemStyle:{
            color: '#f98f2a'
        },
        markLine: {
            data: [{
                yAxis: 0.23,
                name: 'Retraining Threshold'
            }],
            animation: true,
            lineStyle: {
                color: '#8e9b66'
            }
        }
    }]
};

option && myChart.setOption(option);