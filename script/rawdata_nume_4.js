var chartDom_rn4 = document.getElementById('rawdata_nume_4');
var myChart_rn4 = echarts.init(chartDom_rn4);
var option_rn4;

$.get('https://lilybabe.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rn4 = {
                title: {
                    text: column_list[14],
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
                        for (var i = 1; i <= count_list[14].length; i++) {
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
                    data: count_list[14],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[14],
                    yAxisIndex: 1
                }]
            };
            myChart_rn4.setOption(option_rn4);
        });
    });
});

option_rn4 && myChart_rn4.setOption(option_rn4);
