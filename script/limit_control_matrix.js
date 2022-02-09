function calculateLimitControl() {
    minTerm = parseInt(document.getElementById('minTerm').value);
    maxTerm = parseInt(document.getElementById('maxTerm').value);
    minLA = parseInt(document.getElementById('minLA').value);
    maxLA = parseInt(document.getElementById('maxLA').value);
    lcFactor = parseFloat(document.getElementById('lcFactor').value);

    if (lcFactor === 0) {
        lcFactor = 0.00000001;
    }

    factorA = 1 + lcFactor / 10;
    factorB = lcFactor / (1 - factorA ** (-99));

    number_arr = Array.from(Array(100).keys())
    max_loan_arr = [];
    for (i = 1; i < number_arr.length; i++) {
        pd = number_arr[i] / 100;
        scale_factor = factorA ** (100 * pd) - factorB * (factorA ** (100 * pd) - 1) / lcFactor;
        max_loan = Math.round(minLA + scale_factor * (maxLA - minLA));
        max_loan_arr.push(max_loan);
    }

    return max_loan_arr;
}


function getLcGraph() {
    var data_arr = calculateLimitControl();
    var chartDom_lc = document.getElementById('limit_control');
    var myChart_lc = echarts.init(chartDom_lc);
    var opt_lc;


    opt_lc = {
        // title: {
        //     text: "Limit Control"
        // },
        grid: {
            left: '5%',
            right: '3%',
            top: '5%',
            bottom: '10%',
            containLabel: true
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            name: 'Term PD',
            nameLocation: 'middle',
            nameGap: 25,
            axisTick: 'false',
            axisLabel: { color: '#ffffff' },
            nameTextStyle: { color: '#ffffff' },
            data: function () {
                var list = [];
                for (var i = 1; i <= 99; i++) {
                    list.push(i + "%");
                } return list
            }()
        },
        yAxis: {
            type: 'value',
            name: 'Maximum Loan',
            nameLocation: 'middle',
            nameGap: 45,
            axisLabel: { color: '#ffffff' },
            nameTextStyle: { color: '#ffffff' },
            splitLine: {
                lineStyle: {
                    color: '#36344E'
                },
                show: true,
            },
        },
        series: [
            {
                data: data_arr,
                type: 'line',
                symbolSize: 2,
                smooth: true
            }
        ]
    };
    myChart_lc.setOption(opt_lc);
    opt_lc && myChart_lc.setOption(opt_lc);
}

document.getElementById('lcCalculation').onclick = function () { getLcGraph() }


var data_arr = Array(99).fill(10000);
var chartDom_lc = document.getElementById('limit_control');
var myChart_lc = echarts.init(chartDom_lc);
var opt_lc;


opt_lc = {
    // title: {
    //     text: "Limit Control"
    // },
    grid: {
        left: '5%',
        right: '3%',
        top: '5%',
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: {
        type: 'category',
        name: 'Term PD',
        nameLocation: 'middle',
        nameGap: 25,
        axisTick: 'false',
        axisLabel: { color: '#ffffff' },
        nameTextStyle: { color: '#ffffff' },
        data: function () {
            var list = [];
            for (var i = 1; i <= 99; i++) {
                list.push(i + "%");
            } return list
        }()
    },
    yAxis: {
        type: 'value',
        name: 'Maximum Loan',
        nameLocation: 'middle',
        nameGap: 45,
        axisLabel: { color: '#ffffff' },
        nameTextStyle: { color: '#ffffff' },
        splitLine: {
            lineStyle: {
                color: '#36344E'
            },
            show: true,
        },
    },
    series: [
        {
            data: data_arr,
            type: 'line',
            smooth: true,
            symbol: 'none',
            lineStyle: {
                color: '#ff9800'
            }
        }
    ]
};
myChart_lc.setOption(opt_lc);
opt_lc && myChart_lc.setOption(opt_lc);