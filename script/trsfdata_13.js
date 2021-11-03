var chartDom_tn2 = document.getElementById('trsfdata_13');
var myChart_tn2 = echarts.init(chartDom_tn2);
var option_tn2;

$.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tn2 = {
                title: {
                    text: column_list[12],
                    left: 'center',
                    textStyle: { color: '#ffffff' , fontSize: 15 }
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
                    //     for (var i = 1; i <= count_list[12].length; i++) {
                    //         list.push(i);
                    //     } return list
                    // }()
                    data: ['Daily','Weekly','Biweekly','Monthly']
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
                    data: count_list[12],
                    type: 'bar'
                },
                {
                    type: 'line',
                    data: pd_list[12],
                    yAxisIndex: 1
                }]
            };
            myChart_tn2.setOption(option_tn2);
        });
    });
});

option_tn2 && myChart_tn2.setOption(option_tn2);
