var chartDom = document.getElementById('binomial');
        var myChart = echarts.init(chartDom);
        var option;

        option = {
            title: {
                text: "Binomial Test",
                left: 'center',
                textStyle:{color: '#ffffff'}
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    var total;
                    total = params[0].value + params[1].value
                    return params[1].name + '<br/>' + params[0].seriesName + ' : ' + params[0].value
                        + '<br/>' + params[1].seriesName + ' : ' + total
                        + '<br/>' + params[2].seriesName + ' : ' + params[2].value
                }
            },
            xAxis: {
                type: 'category',
                name: 'Credit Rating',
                axisTick: 'false',
                axisLabel: {color: '#ffffff'},
                nameTextStyle: {color: '#ffffff'},
                splitLine: { show: false },
                data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']
            },
            yAxis: {
                type: 'value',
                name: 'Number of Default',
                axisLabel: {color: '#ffffff'},
                nameTextStyle: {color: '#ffffff'}
            },
            series: [
                {
                    name: 'Lower Limit',
                    type: 'bar',
                    stack: 'ok',
                    itemStyle: {
                        barBorderColor: 'rgba(0,0,0,0)',
                        color: 'rgba(0,0,0,0)'
                    },
                    emphasis: {
                        itemStyle: {
                            barBorderColor: 'rgba(0,0,0,0)',
                            color: 'rgba(0,0,0,0)'
                        }
                    },
                    data: [13, 46, 88, 77, 78, 23, 8, 0, 0, 0, 0, 0]
                },
                {
                    name: 'Upper Limit',
                    type: 'bar',
                    stack: 'ok',
                    label: {
                        show: false,
                        position: 'top'
                    },
                    data: [18, 29, 39, 37, 36, 21, 14, 5, 3, 0, 0, 0]
                },
                {
                    name: 'Real Default',
                    type: 'scatter',
                    label: {
                        show: false,
                        position: 'bottom'
                    },
                    data: [210, 66, 110, 118, 102, 31, 6, 1, 1, 0, 0, 0]
                }
            ]
        };

        option && myChart.setOption(option);