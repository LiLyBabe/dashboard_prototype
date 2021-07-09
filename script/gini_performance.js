var chartDom = document.getElementById('gini_performance');
var myChart = echarts.init(chartDom);
var option;

option = {
    title: {
        text: 'Gini Performance',
        left: 'center',
        textStyle: {color: '#ffffff'}
    },
    xAxis: {
        type: 'category',
        axisTick: 'false',
        axisLabel: {color: '#ffffff'},
        data: function() {
            var list=[];
            for(var i = 0; i <=11; i++){
                list.push(i);
            }        
            return list;}()
    },
    yAxis: {
        type: 'value',
        axisLabel: {color: '#ffffff'}
    },
    series: [{
        data: [0.48, 0.43, 0.4, 0.45, 0.46, 0.39, 0.35,0.37,0.33,0.27,0.25,0.29,0.27,0.29],
        type: 'line'
    }, {
        data: [0.23, 0.23, 0.23, 0.23, 0.23, 0.23, 0.23,0.23,0.23,0.23,0.23,0.23,0.23,0.23],
        type: 'line',
        lineStyle: {
            type: 'dashed'
        }
    }]
};

option && myChart.setOption(option);
