var dpdDom = document.getElementById('dayPastDue');
var dpdChart = echarts.init(dpdDom);
var dpd_option;

$.get('https://monex-p.github.io/dashboard_prototype/data/day_past_due_data.json', function (dpd_data) {
    dpd_option = {
        title: {
            text: 'Day Past Due',
            textStyle: {
                color: '#ffffff',
                fontSize: 15
            }
        },
        grid: {
            left: '3%',
            right: '3%',
            top: '15%',
            bottom: '15%',
            containLabel: true
        },
        xAxis: {
            axisLabel: {
                color: '#ffffff'
            },
            type: 'category',
            data: dpd_data[0]
        },
        yAxis: {
            name: 'Number of Loans',
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#ffffff',
                padding: 45,
            },
            splitLine: {
                lineStyle: {
                    color: '#36344E'
                },
                show: true
            },
            type: 'value',
            axisLabel: {
                color: '#ffffff'
            },
        },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                type: 'shadow'
            },
            formatter: function (params){
                return  params[0].name + ": " + params[0].value + " loans"
            }
        },
        series: [
            {
                data: dpd_data[1],
                type: 'bar'
            }
        ]
    };
    dpdChart.setOption(dpd_option);
});

dpd_option && dpdChart.setOption(dpd_option);