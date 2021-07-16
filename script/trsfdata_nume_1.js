var chartDom_tn1 = document.getElementById('trsfdata_nume_1');
var myChart_tn1 = echarts.init(chartDom_tn1);
var option_tn1;

$.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tn1 = {
                title: {
                    text: column_list[11],
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
                        for (var i = 1; i <= count_list[11].length; i++) {
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
                    data: count_list[11],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[11],
                    yAxisIndex: 1
                }]
            };
            myChart_tn1.setOption(option_tn1);
        });
    });
});

option_tn1 && myChart_tn1.setOption(option_tn1);
