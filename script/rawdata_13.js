var chartDom_rn2 = document.getElementById('rawdata_13');
var myChart_rn2 = echarts.init(chartDom_rn2);
var option_rn2;

$.get('https://monex-p.github.io/dashboard_prototype/data/raw_count_list.json', function (count_list) {
    $.get('https://monex-p.github.io/dashboard_prototype/data/raw_pd_list.json', function (pd_list) {
        $.get('https://monex-p.github.io/dashboard_prototype/data/distribution_column_list.json', function (column_list) {

            option_rn2 = {
                title: {
                    text: column_list[12],
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
                    //     for (var i = 1; i <= count_list[12].length; i++) {
                    //         list.push(i);
                    //     } return list
                    // }()
                    data: ["Daily",'Weekly','Biweekly', 'Monthly']
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
            myChart_rn2.setOption(option_rn2);
        });
    });
});

option_rn2 && myChart_rn2.setOption(option_rn2);
