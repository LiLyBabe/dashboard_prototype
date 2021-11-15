var chartDom_rc11 = document.getElementById('rawdata_11');
var myChart_rc11 = echarts.init(chartDom_rc11);
var option_rc11;

$.get('https://monex-p.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://monex-p.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://monex-p.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rc11 = {
                title: {
                    text: column_list[10],
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
                    axisLabel: {
                        color: '#ffffff'
                    },
                    // data: function () {
                    //     var list = [];
                    //     for (var i = 1; i <= count_list[10].length; i++) {
                    //         list.push(i);
                    //     } return list
                    // }()
                    data: ['No','Yes']
                },
                yAxis: [{
                    type: 'value',
                    splitLine: {
                        lineStyle: {
                            color: '#36344E'
                        },
                        show: true
                    },
                    axisLabel: {
                        color: '#ffffff'
                    }

                },
                {
                    type: 'value',
                    splitLine: {
                        show: false
                    },
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
