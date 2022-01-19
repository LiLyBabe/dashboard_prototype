var chartDom_opt_term = document.getElementById('optimum_term');
var myChart_opt_term = echarts.init(chartDom_opt_term);
var opt_term_option;


opt_term_option = {
    title: {
        text: "Optimum Term",
        // left: 'center',
        // top: '3%',
        textStyle: { color: '#ffffff' }
    },
    grid: {
        left: '5%',
        right: '3%',
        top: '15%',
        bottom: '10%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            return params[0].seriesName + ': ' + params[0].name + " Months" +
            "<br/>" + "Expected Profit: " + params[0].value
        }
    },
    xAxis: {
        type: 'category',
        name: 'Term Length (Months)',
        nameLocation: 'middle',
        axisTick: 'false',
        axisLabel: { color: '#ffffff' },
        nameTextStyle: { color: '#ffffff' },
        nameLocation: 'middle',
        nameGap: 35,
        splitLine: { show: false },
        data: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]
    },
    yAxis: {
        type: 'value',
        name: 'Expected Profit',
        axisLabel: { color: '#ffffff' },
        nameTextStyle: { color: '#ffffff' },
        nameLocation: 'middle',
        nameGap: 50,
        splitLine: {
            lineStyle: {
                color: '#36344E'
            },
            show: true,
        },
        axisLabel: { color: '#ffffff' },
        nameTextStyle: { color: '#ffffff' }
    },
    series: [
        {
            name: 'Term',
            type: 'bar',
            data: [39.8,55.8,70.1,83.7,94.5,103.7,113.2,119.6,124.6,131.1,133.85,135.4,136.1,139.5,138.5,136.8,138.8,
                135.8,132.1,133.3,128.8,123.7,118.2,118.7,112.7,106.3,106.7,100,93,93.6,86.5,79.2,71.8,72.8,65.4,57.9]
        }
    ]
};
myChart_opt_term.setOption(opt_term_option);
opt_term_option && myChart_opt_term.setOption(opt_term_option);

