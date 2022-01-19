var chartDomEPSurface = document.getElementById('ep_surface');
var myChartEPSurface = echarts.init(chartDomEPSurface);
var option_ep_surface;
// var $j = jQuery.noConflict();

$.get('https://monex-p.github.io/dashboard_prototype/data/ep_surface_data.json', function (ep_surface_data) {
    var symbolSize = 2.3;
 
    option_ep_surface = {
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
            // viewControl: {
            //     // autoRotate: true,
            //     projection: 'orthographic'
            // }
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
            dimension: 2,
            calculable:true,
            inRange: {
                color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                  ]
            }
        },

        series: [
            {
                type: 'line3D',
                // symbol: 'arrow',
                // symbolSize: 15,
                lineStyle: {
                  width:25
                },
                // wireframe: {
                //   show:false
                // },
                // shading: 'color',
                itemStyle: {
                  opacity:1
                },
                data: ep_surface_data
            }
        ]
    };

    myChartEPSurface.setOption(option_ep_surface);
});

option_ep_surface && myChartEPSurface.setOption(option_ep_surface);
