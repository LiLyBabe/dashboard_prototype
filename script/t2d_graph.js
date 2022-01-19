var chartDom_t2d = document.getElementById('t2d');
var myChart_t2d = echarts.init(chartDom_t2d);
var option_t2d;
// var $j = jQuery.noConflict();


$.get('https://monex-p.github.io/dashboard_prototype/data/t2d_data.json', function (t2d_data) {
    $.get('https://monex-p.github.io/dashboard_prototype/data/t2d_beta_data.json', function (t2d_beta) {
        option_t2d = {

            title: {
                text: "Time at Default",
                textStyle: {
                    color: "#ffffff",
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
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function (params) {
                    return "Loan Term: " + params[0].name + " days" + "<br/>" +
                        "Default: " + params[0].value + " loans";
                }
            },
            legend: {
                textStyle: {
                    color: '#ffffff'
                },
                top: '2%'
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
                    data: [0,
                        0,
                        17,
                        65,
                        83,
                        98,
                        109,
                        93,
                        80,
                        67,
                        53,
                        52,
                        49,
                        43,
                        39,
                        38,
                        33,
                        31,
                        31,
                        26,
                        25,
                        23,
                        18,
                        19,
                        20,
                        15,
                        14,
                        13,
                        10,
                        9,
                        8,
                        6,
                        5,
                        4,
                        5,
                        0,
                    ],
                    name: 'Historical Distribution',
                    type: 'bar'
                },
                {
                    data: t2d_beta,
                    name: 'Hypothetical Distribution',
                    type: 'line',
                    smooth: true
                }
            ]
        };

        myChart_t2d.setOption(option_t2d);
    });
});

option_t2d && myChart_t2d.setOption(option_t2d);