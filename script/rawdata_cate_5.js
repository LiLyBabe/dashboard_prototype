var chartDom_rc5 = document.getElementById('rawdata_cate_5');
var myChart_rc5 = echarts.init(chartDom_rc5);
var option_rc5;

$.get('https://lilybabe.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rc5 = {
                title: {
                    text: column_list[4],
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
                        for (var i = 1; i <= count_list[4].length; i++) {
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
                    data: count_list[4],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[4],
                    yAxisIndex: 1
                }]
            };
            myChart_rc5.setOption(option_rc5);
        });
    });
});

option_rc5 && myChart_rc5.setOption(option_rc5);
