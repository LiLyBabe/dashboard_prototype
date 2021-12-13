var chartDom_gini = document.getElementById('payday_gini');
var giniChart = echarts.init(chartDom_gini);
var giniOption;

$.get('https://monex-p.github.io/dashboard_prototype/data/payday_gini.json', function (gini_data) {
    var total_data = 49000;

    giniOption = {
        title: {
            text: 'Gini Graph',
            // left: 'center',
            textStyle: { color: '#ffffff' }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            },
        },
        legend: {
            textStyle: {
                color: '#ffffff'
            }
        },
        grid: {
            left: '3%',
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
        series: [
            {
                name: 'Historical Data',
                data: gini_data[0],
                type: 'line',
                smooth: true,
            },
            {
                name: 'Best Case',
                data: gini_data[1],
                type: 'line',
                smooth: true,
            },
            {
                name: 'Worst Case',
                data: gini_data[2],
                type: 'line',
                smooth: true,
            }
        ]
    };
    giniChart.setOption(giniOption);
});

giniOption && giniChart.setOption(giniOption);