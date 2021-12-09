var chartDom_1 = document.getElementById('dist1');
var myChart_1 = echarts.init(chartDom_1);
var option_1;

$.get('https://monex-p.github.io/dashboard_prototype/data/payday_distribution_data.json', function (count_dict) {
    $.get('https://monex-p.github.io/dashboard_prototype/data/payday_default_data.json', function (pd_dict) {

            var attribute_name = Object.keys(count_dict)[0]

            option_1 = {
                title: {
                    text: attribute_name,
                    left: 'center',
                    textStyle: { color: '#ffffff' , fontSize: 15}
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer:{
                        type: 'shadow'
                    },
                    formatter: function (params){
                        return "Day: " + params[0].name + '<br/>' + "Pop: " + params[0].value + '<br/>' 
                        + "PD: " + params[1].value;
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
                    data: Object.keys(count_dict[attribute_name])
                },
                yAxis: [{
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
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
                    axisLabel: { color: '#ffffff' }
                }],
                series: [{
                    data: Object.values(count_dict[attribute_name]),
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: Object.values(pd_dict[attribute_name]),
                    yAxisIndex: 1
                }]
            };
            myChart_1.setOption(option_1);
    });
});

option_1 && myChart_1.setOption(option_1);
