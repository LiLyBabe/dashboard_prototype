var chartDom_ginie = document.getElementById('gini_new');
var myChart_ginite = echarts.init(chartDom_ginie);
var ginie_option;


$.get('https://ntmy99.github.io/db_data.io/gini_new.json', function (data) {

        var ginie_data = data

        ginie_option = {
            title: {
                text: "Gini (Existing Customers)",
                 left: 'center',
                top: '2%',
                textStyle: { color: '#ffffff' }
            },
            grid: {
                top: '75',
                containLabel: true
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
            },
            xAxis: {
                type: 'category',
                nameLocation: 'middle',
                nameGap: '30',
                axisTick: 'false',
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' },
                nameLocation: 'middle',
                nameGap: 20,
                splitLine: { show: false }            },
            yAxis: {
                type: 'value',
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' },
                nameLocation: 'middle',
                nameGap: 30,
                splitLine: {
                    lineStyle: {
                        color: '#36344E'
                    },
                    show: true,
                },
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' }
            },
            series: [
                {
                    type: 'line',
                    data: ginie_data[0],
                    symbolSize: 0
                },
                {
                    type: 'line',
                    data: ginie_data[1],
                    symbolSize: 0
                },
                {
                    type: 'line',
                    data: ginie_data[2],
                    symbolSize: 0
                },
            ]
        };
        myChart_ginite.setOption(ginie_option);
    });
    ginie_option && myChart_ginite.setOption(ginie_option);
