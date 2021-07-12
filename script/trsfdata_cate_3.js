var chartDom = document.getElementById('trsfdata_cate_3');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Amount Due',
        left: 'center'
    },
    xAxis: {
        type: 'category',
        data: function() {
            var list = [];
            for(var i=1; i <= 16; i++) {
                list.push(i);
            } return list
        }()
    },
    yAxis: [{
        type: 'value',

    },
    {type: 'value',
    }],
    series: [{
        data: [134,
915,
1638,
1779,
3689,
2909,
2828,
2701,
2181,
2210,
2040,
1789,
1491,
1211,
895,
3651
],
        type: 'bar'
    },
    {
        type: 'line',
        data: [0.095446678,
0.064452419,
0.060469356,
0.05251898,
0.049630854,
0.048624504,
0.044024742,
0.046193,
0.041946025,
0.040778792,
0.036904913,
0.037249243,
0.036308219,
0.035675304,
0.034718977,
0.033351296,
],
        yAxisIndex: 1
    }]
};

option && myChart.setOption(option);
