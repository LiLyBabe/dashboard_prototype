var chartDom = document.getElementById('iv_line_graph');
var myChart = echarts.init(chartDom);
var option;

option = {
    visualMap: [{
        show: false,
        type: 'continuous',
        seriesIndex: 0,
        min: 0,
        max: 1
    }],
    title: [{
        left: 'center',
        text: 'Portfolio Information Value',
        textStyle: {color:'#ffffff'}
    }],
    xAxis: {
        type: 'category',
        name: 'Number of Credit Rating',
        nameLocation: 'middle',
        nameTextStyle: {
            padding: 20
        },
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        axisTick: false,
        axisLabel: {color: '#ffffff'},
        nameTextStyle: {color:'#ffffff'}
    },
    yAxis: {
        type: 'value',
        axisLabel: {color:'#ffffff'}
    },
    series: [{
        data: [0.01, 0.05, 0.1, 0.17, 0.28, 0.33, 0.43, 0.49, 0.47, 0.43, 0.4, 0.3],
        type: 'line'
    }]
};

option && myChart.setOption(option);