var chartDom_rc2 = document.getElementById('rawdata_cate_2');
var myChart_rc2 = echarts.init(chartDom_rc2);
var option_rc2;

$.get('https://lilybabe.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rc2 = {
                title: {
                    text: column_list[1],
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
                        for (var i = 1; i <= count_list[1].length; i++) {
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
                    data: count_list[1],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[1],
                    yAxisIndex: 1
                }]
            };
            myChart_rc2.setOption(option_rc2);
        });
    });
});

option_rc2 && myChart_rc2.setOption(option_rc2);
