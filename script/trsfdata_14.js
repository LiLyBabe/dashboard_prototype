var chartDom_tn3 = document.getElementById('trsfdata_14');
var myChart_tn3 = echarts.init(chartDom_tn3);
var option_tn3;

$.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tn3 = {
                title: {
                    text: column_list[13],
                    left: 'center',
                    textStyle: { color: '#ffffff' , fontSize: 15 }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer:{
                        type: 'shadow'
                    },
                    formatter: function (params){
                        return params[0].name + '<br/>' + "Pop: " + params[0].value + '<br/>' 
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
                    // data: function () {
                    //     var list = [];
                    //     for (var i = 1; i <= count_list[13].length; i++) {
                    //         list.push(i);
                    //     } return list
                    // }()
                    data: ['Pension','Salary','Wage']
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
                    data: count_list[13],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[13],
                    yAxisIndex: 1
                }]
            };
            myChart_tn3.setOption(option_tn3);
        });
    });
});

option_tn3 && myChart_tn3.setOption(option_tn3);
