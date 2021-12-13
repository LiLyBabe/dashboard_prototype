var chartDom_binomial = document.getElementById('binomial');
var myChart_binomial = echarts.init(chartDom_binomial);
var binomial_option;


$.get('https://monex-p.github.io/dashboard_prototype/data/payday_binomial_data.json', function (binom_data) {

        binomial_option = {
            title: {
                text: "Binomial Test",
                left: 'center',
                // top: '2%',
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
                name: 'Credit Ratings',
                nameLocation: 'middle',
                nameGap: '30',
                axisTick: 'false',
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' },
                nameLocation: 'middle',
                nameGap: 20,
                splitLine: { show: false },
                data: binom_data[3]
            },
            yAxis: {
                type: 'value',
                name: 'Number of Default',
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
                    data: binom_data[0]
                },
                {
                    name: 'Upper Limit',
                    type: 'bar',
                    stack: 'ok',
                    label: {
                        show: false,
                        position: 'top'
                    },
                    data: binom_data[1]
                },
                {
                    name: 'Real Default',
                    type: 'scatter',
                    label: {
                        show: false,
                        position: 'bottom'
                    },
                    data: binom_data[2]
                },
            ]
        };
        myChart_binomial.setOption(binomial_option);
    });
binomial_option && myChart_binomial.setOption(binomial_option);
    
