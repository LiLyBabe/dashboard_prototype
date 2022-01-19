var chartDom_4 = document.getElementById('dist4');
var myChart_4 = echarts.init(chartDom_4);
var option_4;

$.get('https://monex-p.github.io/dashboard_prototype/data/payday_distribution_data.json', function (count_dict) {
    $.get('https://monex-p.github.io/dashboard_prototype/data/payday_default_data.json', function (pd_dict) {

            var attribute_name = Object.keys(count_dict)[3]

            option_4 = {
                title: {
                    text: attribute_name,
                    // left: 'center',
                    textStyle: { color: '#ffffff' , fontSize: 15}
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer:{
                        type: 'shadow'
                    },
                    formatter: function (params){
                        return params[0].name + '<br/>' + "Number of Loans: " + params[0].value + '<br/>' 
                        + "Default Odd: " + params[1].value;
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
            myChart_4.setOption(option_4);
    });
});

option_4 && myChart_4.setOption(option_4);
