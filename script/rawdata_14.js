var chartDom_rn3 = document.getElementById('rawdata_14');
var myChart_rn3 = echarts.init(chartDom_rn3);
var option_rn3;

$.get('https://lilybabe.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rn3 = {
                title: {
                    text: column_list[13],
                    left: 'center',
                    textStyle: { color: '#ffffff', fontSize: 15 }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer:{
                        type: 'shadow'
                    },
                    formatter: function (params){
                        return params[0].name + '<br/>' + "Pop: " + params[0].value + '<br/>' 
                        + "PD: " + params[1].value;
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    top: '15%',
                    bottom: '3%',
                    containLabel: true
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
            myChart_rn3.setOption(option_rn3);
        });
    });
});

option_rn3 && myChart_rn3.setOption(option_rn3);
