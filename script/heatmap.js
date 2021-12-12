var chartDom_heatmap = document.getElementById('heatmap');
var myChart_heatmap = echarts.init(chartDom_heatmap);
var option_heatmap;


$.get('https://monex-p.github.io/dashboard_prototype/data/heatmap_data.json', function (heatmap_df) {

    $.get('https://monex-p.github.io/dashboard_prototype/data/heatmap_column_data.json', function (column_name) {
        var my_df = heatmap_df.map(function (item) {
            return [item[1], item[0], item[2] || '-'];
        });

        option_heatmap = {
            title: {
                text: 'Correlation Matrix',
                textStyle: { color: '#ffffff' }
            },
            tooltip: {
                position: 'top'
            },
            grid: {
                height: '80%',
                top: '13%',
                left: '17%',
                right: '7%'
            },
            xAxis: {
                type: 'category',
                data: column_name,
                splitArea: {
                    show: true
                },
                axisLabel: { color: '#ffffff' }
            },
            yAxis: {
                type: 'category',
                data: column_name,
                splitArea: {
                    show: true
                },
                axisLabel: { color: '#ffffff' }
            },
            visualMap: {
                show: true,
                min: -1,
                max: 1,
                calculable: true,
                orient: 'vertical',
                left: 'right',
                bottom: '40%',
                textStyle: { color: "#ffffff" },
                // target: {
                //     inRange: {
                //         color: ['#ff6600', '#ff781f', '#ff8b3d', '#ff9d5c', '#ffaf7a',
                //             '#ff9d5c', '#ff8b3d', '#ff781f', '#ff6600'],
                //     }
                // },
            },
            series: [{
                name: 'Correlation Matrix',
                type: 'heatmap',
                data: my_df,
                label: {
                    show: true
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };

        myChart_heatmap.setOption(option_heatmap);
    });
});

option_heatmap && myChart_heatmap.setOption(option_heatmap);