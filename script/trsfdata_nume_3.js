var chartDom_tn3 = document.getElementById('trsfdata_nume_3');
var myChart_tn3 = echarts.init(chartDom_tn3);
var option_tn3;

$.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tn3 = {
                title: {
                    text: column_list[13],
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
                        for (var i = 1; i <= count_list[13].length; i++) {
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
