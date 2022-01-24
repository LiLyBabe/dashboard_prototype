var chartDom_lc = document.getElementById('limit_control');
var myChart_lc = echarts.init(chartDom_lc);
var opt_lc;


opt_lc = {
    // title: {
    //     text: "Limit Control"
    // },
    grid: {
        left: '5%',
        right: '3%',
        top: '5%',
        bottom: '10%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        name: 'Term PD',
        nameLocation: 'middle',
        nameGap: 25,
        axisTick: 'false',
        axisLabel: { color: '#ffffff' },
        nameTextStyle: { color: '#ffffff' },
        data: function () {
            var list = [];
            for (var i = 1; i <= 99; i++) {
                list.push(i + "%");
            } return list
        }()
    },
    yAxis: {
        type: 'value',
        name: 'Maximum Loan',
        nameLocation: 'middle',
        nameGap: 50,
        axisLabel: { color: '#ffffff' },
        nameTextStyle: { color: '#ffffff' },
        splitLine: {
            lineStyle: {
                color: '#36344E'
            },
            show: true,
        },
    },
    series: [
        {
            data: [9997,
                9994,
                9990,
                9986,
                9982,
                9978,
                9974,
                9970,
                9965,
                9959,
                9954,
                9949,
                9943,
                9937,
                9930,
                9924,
                9917,
                9910,
                9902,
                9894,
                9885,
                9876,
                9866,
                9857,
                9846,
                9835,
                9824,
                9812,
                9799,
                9786,
                9772,
                9758,
                9742,
                9726,
                9710,
                9691,
                9673,
                9654,
                9633,
                9611,
                9589,
                9565,
                9540,
                9514,
                9486,
                9457,
                9426,
                9394,
                9361,
                9326,
                9289,
                9250,
                9210,
                9167,
                9122,
                9075,
                9026,
                8974,
                8919,
                8862,
                8802,
                8738,
                8672,
                8602,
                8530,
                8453,
                8372,
                8287,
                8198,
                8105,
                8007,
                7904,
                7796,
                7683,
                7564,
                7439,
                7307,
                7170,
                7025,
                6873,
                6714,
                6546,
                6370,
                6186,
                5991,
                5788,
                5574,
                5350,
                5114,
                4866,
                4606,
                4333,
                4046,
                3746,
                3430,
                3098,
                2750,
                2384,
                2000,
            ],
            type: 'line',
            symbolSize: 2,
            smooth: true
        }
    ]
};
myChart_lc.setOption(opt_lc);
opt_lc && myChart_lc.setOption(opt_lc);

