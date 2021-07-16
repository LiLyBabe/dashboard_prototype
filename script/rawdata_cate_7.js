var chartDom_rc7 = document.getElementById('rawdata_cate_7');
var myChart_rc7 = echarts.init(chartDom_rc7);
var option_rc7;

$.get('https://lilybabe.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rc7 = {
                title: {
                    text: column_list[6],
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
                        for (var i = 1; i <= count_list[6].length; i++) {
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
                    data: count_list[6],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[6],
                    yAxisIndex: 1
                }]
            };
            myChart_rc7.setOption(option_rc7);
        });
    });
});

option_rc7 && myChart_rc7.setOption(option_rc7);
