var chartDom_ginitotal = document.getElementById('ginitotal');
var myChart_ginitotal = echarts.init(chartDom_ginitotal);
var ginitotal_option;
var $j = jQuery.noConflict();


$.get('https://ntmy99.github.io/db_data.io/gini_total.json', function (data) {

        var ginit_data = data

        ginitotal_option = {
            title: {
                text: "Gini (Total)",
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
                    data: ginit_data[0],
                    symbolSize: 0
                },
                {
                    type: 'line',
                    data: ginit_data[1],
                    symbolSize: 0
                },
                {
                    type: 'line',
                    data: ginit_data[2],
                    symbolSize: 0
                },
            ]
        };
        myChart_ginitotal.setOption(ginitotal_option);
    });
    ginitotal_option && myChart_ginitotal.setOption(ginitotal_option);
