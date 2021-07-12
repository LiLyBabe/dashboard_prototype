var chartDom = document.getElementById('parallel_single');
var myChart = echarts.init(chartDom);
var option;

option = {
    parallelAxis: [
        {
            dim: 0,
            name: 'Cover Ratio',
            axisLabel: {color: '#ffffff'},
            nameTextStyle: {color:'#ffffff'}
        },

        {
            dim: 1,
            name: 'Default',
            axisLabel: {color: '#ffffff'},
            nameTextStyle: {color:'#ffffff'},
            type: 'category',
            data: ['0', '1']
        }
    ],
    series: {
        type: 'parallel',
        lineStyle: {
            width: 2,
            color: '#5470C6'
        },
        data: [
            [12.99, '0'],
            [9.99, '1'],
            [20, '1'],
            [11, '1'],
            [5, '1'],
            [3.7, '0'],
            [2.6, '0'],
            [10, '1'],
            [3.4, '0'],
            [0.5, '1'],
            [2.2, '0'],
            [9.5, '1'],
        ]
    }
};

option && myChart.setOption(option);