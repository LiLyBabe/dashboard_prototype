var iv_chart = document.getElementById('information_value');
var myIvChart = echarts.init(iv_chart);
var iv_option;

$.get('https://lilybabe.github.io/dashboard_prototype/data/iv_data.json', function (iv_data) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/iv_column_data.json', function (iv_column_data) {
iv_option = {
            title: {
                text: 'Information Value',
                textStyle: { color: '#ffffff' }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'value',
                axisPointer: 'false',
                axisLabel: { color: '#ffffff' }
            },
            yAxis: {
                type: 'category',
                axisTick: 'false',
                axisLabel: { color: '#ffffff' },
                // axisPointer:'false',
                data: iv_column_data
            },
            series: [
                {
                    name: 'IV',
                    type: 'bar',
                    data: iv_data
                }
            ]
        };
        myIvChart.setOption(iv_option);
    });
});

iv_option && myIvChart.setOption(iv_option);
