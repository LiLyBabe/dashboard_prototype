var chartDom_rc11 = document.getElementById('rawdata_cate_11');
var myChart_rc11 = echarts.init(chartDom_rc11);
var option_rc11;

$.get('https://lilybabe.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rc11 = {
                title: {
                    text: column_list[10],
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
                        for (var i = 1; i <= count_list[10].length; i++) {
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
                    data: count_list[10],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[10],
                    yAxisIndex: 1
                }]
            };
            myChart_rc11.setOption(option_rc11);
        });
    });
});

option_rc11 && myChart_rc11.setOption(option_rc11);
