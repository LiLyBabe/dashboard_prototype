var chartDom_tc9 = document.getElementById('trsfdata_cate_9');
var myChart_tc9 = echarts.init(chartDom_tc9);
var option_tc9;

$.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tc9 = {
                title: {
                    text: column_list[8],
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
                        for (var i = 1; i <= count_list[8].length; i++) {
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
                    data: count_list[8],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[8],
                    yAxisIndex: 1
                }]
            };
            myChart_tc9.setOption(option_tc9);
        });
    });
});

option_tc9 && myChart_tc9.setOption(option_tc9);
