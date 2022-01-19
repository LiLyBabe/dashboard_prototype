var chartDom8 = document.getElementById('APRnoLC');
var myChart8 = echarts.init(chartDom8);
var option8;
var $j = jQuery.noConflict();

$.get('https://ntmy99.github.io/db_data.io/EP_surface.json', function (data) {
    var symbolSize = 2.3;
    option8 = {
        grid3D: {
            axisLine: {
                lineStyle: {
                    color: '#fff'
                }
            },
            axisPointer: {
                lineStyle: {
                    color: '#ffbd67'
                }
            },
            viewControl: {
                // autoRotate: true,
                projection: 'orthographic'
            }
        },
        xAxis3D: {
            type: 'value',
            name: 'x'
        },
        yAxis3D: {
            type: 'value',
            name: 'y'
        },
        zAxis3D: {
            type: 'value',
            name: 'z'
        },
       
        visualMap: {
            min: 0,
            max: 2400,
            dimension: 2,
            calculable:true,
            inRange: {
                color: ['#fe0300', '#f09a09', '#f5f811', '#00ff0d', '#00fea8', '#0b9df0', '#1710c0']
            }
        },
        dataset: {
            dimensions: [
                'x',
                'y',
                'z'
            ],
            source: data
        },
        series: [
            {
                type: 'scatter3D',
                symbolSize: symbolSize,
                encode: {
                    x: 'x',
                    y: 'y',
                    z: 'z',
                }
            }
        ]
    };

    myChart8.setOption(option8);
});

option8 && myChart8.setOption(option8);
