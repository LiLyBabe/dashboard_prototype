var chartDom_tc10 = document.getElementById('trsfdata_cate_10');
var myChart_tc10 = echarts.init(chartDom_tc10);
var option_tc10;

$.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tc10 = {
                title: {
                    text: column_list[9],
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
                        for (var i = 1; i <= count_list[9].length; i++) {
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
                    data: count_list[9],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[9],
                    yAxisIndex: 1
                }]
            };
            myChart_tc10.setOption(option_tc10);
        });
    });
});

option_tc10 && myChart_tc10.setOption(option_tc10);
