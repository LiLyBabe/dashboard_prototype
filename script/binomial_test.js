var chartDom1 = document.getElementById('binomial');
var binomialChart = echarts.init(chartDom1);
var binomial_option;

$.get('https://lilybabe.github.io/dashboard_prototype/data/binomial_data.json', function (my_data) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/binomial_column_data.json', function (rating) {

        binomial_option = {
            title: {
                text: "Binomial Test",
                left: 'center',
                textStyle: { color: '#ffffff' }
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
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' },
                splitLine: { show: false },
                data: rating
            },
            yAxis: {
                type: 'value',
                name: 'Number of Default',
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' }
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
                    data: my_data[0]
                },
                {
                    name: 'Upper Limit',
                    type: 'bar',
                    stack: 'ok',
                    label: {
                        show: false,
                        position: 'top'
                    },
                    data: my_data[1]
                },
                {
                    name: 'Real Default',
                    type: 'scatter',
                    label: {
                        show: false,
                        position: 'bottom'
                    },
                    data: my_data[2]
                }
            ]
        };
        binomialChart.setOption(binomial_option);
    });
});

binomial_option && binomialChart.setOption(binomial_option);