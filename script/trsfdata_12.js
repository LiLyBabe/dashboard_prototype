var chartDom_tn1 = document.getElementById('trsfdata_12');
var myChart_tn1 = echarts.init(chartDom_tn1);
var option_tn1;

$.get('https://monex-p.github.io/dashboard_prototype/data/transformed_count_list.json', function (count_list) {
    $.get('https://monex-p.github.io/dashboard_prototype/data/transformed_pd_list.json', function (pd_list) {
        $.get('https://monex-p.github.io/dashboard_prototype/data/transformed_column_list.json', function (column_list) {

            option_tn1 = {
                title: {
                    text: column_list[11],
                    left: 'center',
                    textStyle: { color: '#ffffff', fontSize: 15  }
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
                    // data: column_list[Object.values(object1)[11]]
                    // data: function () {
                    //     var list = [];
                    //     for (var i = 1; i <= count_list[11].length; i++) {
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
