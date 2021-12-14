var noCorrDom = document.getElementById('no_corr_bar');
var noCorrChart = echarts.init(noCorrDom);
var noCorrOption;


$.get('https://monex-p.github.io/dashboard_prototype/data/bad_loans_no_corr.json', function (no_corr_data) {

    noCorrOption = {
        title: {
            text: 'No Correlation',
            textStyle: {
                color: '#ffffff',
                fontSize: 15
            },
            left: 'center'
        },
        tooltip: {
            trigger: 'axis',
            formatter: function (params) {
                return "Number of Bad Loans: " + params[0].name + " loans" + "<br/>" +
                    "Probability: " + params[0].value * 100 + " %";
            }
        },
        grid: {
            left: '5%',
            right: '3%',
            top: '15%',
            bottom: '10%',
            containLabel: true
        },
        xAxis: {
            name: "Number of Bad Loans",
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#ffffff',
                padding: 15,
            },
            type: 'category',
            data: no_corr_data[0],
            axisLabel: {
                color: '#ffffff'
            },
            show: true
        },
        yAxis: {
            name: "Occurence Probability",
            nameLocation: 'middle',
            nameTextStyle: {
                color: '#ffffff',
                padding: 28,
            },
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
        series: [{
            data: no_corr_data[1],
            type: 'bar',
            markLine: {
                data: [
                    {
                        xAxis: no_corr_data[0].indexOf(no_corr_data[2][0]),
                        label: {
                            formatter: '99% CL: ' + no_corr_data[2][0] + ' Bad Loans',
                            position: 'middle',
                            color: '#ffffff'
                        },
                        name: "99% Confidence Level"
                    },
                    {
                        xAxis: no_corr_data[0].indexOf(no_corr_data[2][1]),
                        label: {
                            formatter: '99.5% CL: ' + no_corr_data[2][1] + ' Bad Loans',
                            position: 'middle',
                            color: '#ffffff'
                        },
                        name: "99.5% Confidence Level"
                    },
                    {
                        xAxis: no_corr_data[0].indexOf(no_corr_data[2][2]),
                        label: {
                            formatter: '99.9% CL: ' + no_corr_data[2][2] + ' Bad Loans',
                            position: 'middle',
                            color: '#ffffff'
                        },
                        name: "99.9% Confidence Level"
                    },
                ]
            }
        },
        ]
    };

    noCorrChart.setOption(noCorrOption);
});

noCorrOption && noCorrChart.setOption(noCorrOption);