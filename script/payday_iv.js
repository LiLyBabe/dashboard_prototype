var chartDom_iv = document.getElementById('payday_iv');
var myChart_iv = echarts.init(chartDom_iv);
var iv_option;

$.get('https://monex-p.github.io/dashboard_prototype/data/payday_iv_data.json', function (my_data) {
    my_keys = Object.keys(my_data)

    my_list = []
    for (var i = 0; i < my_keys.length; i++) {
        val = my_data[my_keys[i]]['IV']
        my_sum = Object.values(val).reduce((a, b) => a + b, 0)
        my_list.push(my_sum)
    }
    original_list = my_list.slice();
    my_list = my_list.sort(function (a, b) {
        return a-b
    });

    // Get indices of values from original list and rearrange keys
    sorted_key = []
    for (i = 0; i < my_list.length; i++) {
        ind = original_list.indexOf(my_list[i])
        sorted_key.push(my_keys[ind])
    }

    iv_option = {
        title: {
            text: 'Information Value',
            textStyle: { color: '#ffffff', fontSize: 15 }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisPointer: 'false',
            axisLabel: { color: '#ffffff' },
            splitLine: {
                lineStyle: {
                    color: '#36344E'
                },
                show: true
            },
        },
        yAxis: {
            type: 'category',
            axisTick: 'false',
            axisLabel: { color: '#ffffff' },
            
            // axisPointer:'false',
            data: sorted_key
        },
        series: [
            {
                name: 'IV',
                type: 'bar',
                data: my_list
            }
        ]
    };

    myChart_iv.setOption(iv_option);
});

iv_option && myChart_iv.setOption(iv_option);