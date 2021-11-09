var chartDom_t2d = document.getElementById('t2d');
var myChart_t2d = echarts.init(chartDom_t2d);
var option_t2d;
// var $j = jQuery.noConflict();


$.get('https://lilybabe.github.io/dashboard_prototype/data/t2d_data.json', function (t2d_data) {

    option_t2d = {

        grid: {
            left: '3%',
            right: '3%',
            top: '15%',
            bottom: '15%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                type: 'shadow'
            },
            formatter: function (params){
                return  "Loan Term: " + params[0].name + " days" + "<br/>" +
                        "Default: " + params[0].value + " loans";
            }
        },
        xAxis: {
            name: 'Loan Term (days)',
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#ffffff',
                padding: 15
            },
            axisLabel: {
                color: '#ffffff'
            },
            type: 'category',
            data: t2d_data[0]
        },
        yAxis: {
            name: 'Number of Loans',
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#ffffff',
                padding: 28,
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
        series: [
            {
                data: t2d_data[1],
                type: 'bar'
            }
        ]
    };

    myChart_t2d.setOption(option_t2d);
});

option_t2d && myChart_t2d.setOption(option_t2d);