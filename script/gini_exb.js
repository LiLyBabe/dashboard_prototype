var chartDom_giniexb = document.getElementById('gini_exb');
var myChart_giniexb = echarts.init(chartDom_giniexb);
var giniexb_option;
var $j = jQuery.noConflict();


$.get('https://ntmy99.github.io/db_data.io/gini_exb.json', function (data) {

        var ginie_data = data

        giniexb_option = {
            title: {
                text: "Gini ",
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
        myChart_giniexb.setOption(giniexb_option);
    });
    giniexb_option && myChart_giniexb.setOption(giniexb_option);
