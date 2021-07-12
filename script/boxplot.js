var chartDom = document.getElementById('boxplot');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: [
        // {
        //     text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
        //     borderColor: '#999',
        //     borderWidth: 1,
        //     textStyle: {
        //         fontWeight: 'normal',
        //         fontSize: 14,
        //         lineHeight: 20
        //     },
        //     left: '10%',
        //     top: '90%'
        // }
    ],
    dataset: [{
        source: [
            [850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650, 760, 810, 1000, 1000, 960, 960],
        ]
    }, {
        transform: {
            type: 'boxplot',
            config: { itemNameFormatter: '' }
        }
    }, 
    {
        fromDatasetIndex: 1,
        fromTransformResult: 1
    }
    ],
    tooltip: {
        trigger: 'item',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%'
    },
    xAxis: {
        type: 'category',
        boundaryGap: true,
        nameGap: 30,
        show: false,
        splitArea: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        show: false,
    },
    series: [
        {
            name: 'boxplot',
            type: 'boxplot',
            datasetIndex: 1
        },
        {
            name: 'outlier',
            type: 'scatter',
            datasetIndex: 2
        }
    ]
};

option && myChart.setOption(option);