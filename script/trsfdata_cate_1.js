var chartDom_tc1 = document.getElementById('trsfdata_cate_1');
var myChart_tc1 = echarts.init(chartDom_tc1);
var option_tc1;

$.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tc1 = {
                title: {
                    text: column_list[0],
                    left: 'center',
                    textStyle: { color: '#ffffff' }
                },
                grid: {
                    left: '10%',
                    right: '10%',
                    top: '15%',
                    bottom: '10%'
                },
                xAxis: {
                    type: 'category',
                    data: function () {
                        var list = [];
                        for (var i = 1; i <= count_list[0].length; i++) {
                            list.push(i);
                        } return list
                    }()
                },
                yAxis: [{
                    type: 'value',
                    axisLabel: {
                        color: '#ffffff'
                    }

                },
                {
                    type: 'value',
                    axisLabel: { color: '#ffffff' }
                }],
                series: [{
                    data: count_list[0],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[0],
                    yAxisIndex: 1
                }]
            };
            myChart_tc1.setOption(option_tc1);
        });
    });
});

option_tc1 && myChart_tc1.setOption(option_tc1);
