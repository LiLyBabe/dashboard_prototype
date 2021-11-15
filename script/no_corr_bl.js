var noCorrDom = document.getElementById('no_corr_bar');
var noCorrChart = echarts.init(noCorrDom);
var noCorrOption;


$.get('https://monex-p.github.io/dashboard_prototype/data/bad_loans_no_corr.json', function (no_corr_data) {

    noCorrOption = {
        tooltip: {

        },
        grid: {
            left: '5%',
            right: '3%',
            top: '15%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                color: '#ffffff'
            },
            show: false
        },
        yAxis: {
            name: "Number of Bad Loans",
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#ffffff',
                padding: 28,
            },
            type: 'value',
            splitLine: {
                lineStyle: {
                    color: '#36344E'
                },
                show: true
            },
            axisLabel: {
                color: '#ffffff'
            }

        },
        series: [{
            data: no_corr_data[0],
            type: 'bar'
        },
            // {
            //     type: 'line',
            //     data: pd_list[11],
            //     yAxisIndex: 1
            // }
        ]
    };

    noCorrChart.setOption(noCorrOption);
});

noCorrOption && noCorrChart.setOption(noCorrOption);