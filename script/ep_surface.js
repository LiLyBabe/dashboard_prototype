var chartDom5 = document.getElementById('ep_surface');
var myChart5 = echarts.init(chartDom5);
var option5;
var $j = jQuery.noConflict();

$.get('https://monex-p.github.io/dashboard_prototype/data/ep_surface_data.json', function (data) {
    var symbolSize = 2.3;
    var datas = [];
    for (var x = 1; x < data.length; x++) { //
    datas.push([data[x].x, data[x].y, data[x].z]);
    }  
    option5 = {
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
            name: 'Loan Amount'
        },
        yAxis3D: {
            type: 'value',
            name: 'Term (Months)'
        },
        zAxis3D: {
            type: 'value',
            name: 'Expected Profit'
        },
        visualMap: {
            // min: -1500,
            // max: 1500,
            dimension: 3,
            calculable:true,
            inRange: {
                color: ['#fe0300', '#f09a09', '#f5f811', '#00ff0d', '#00fea8', '#0b9df0', '#1710c0']
            }
        },
        // dataset: {
        //     dimensions: [
        //         'index',
        //         'x',
        //         'y',
        //         'z',
        //     ],
        //     source: data
        // },
        series: [
            {
                type: 'surface',
                // symbolSize: symbolSize,
                // encode: {
                //     x: 'x',
                //     y: 'y',
                //     z: 'z',
                // }
                data: datas
            }
        ]
    };

    myChart5.setOption(option5);
});

option5 && myChart5.setOption(option5);
