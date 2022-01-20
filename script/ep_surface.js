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
                    color: '#36344E'
                }
            },
            axisPointer: {
                lineStyle: {
                    color: '#ffbd67'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#36344E',
                    width: 0.5
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            }
            // viewControl: {
            //     // autoRotate: true,
            //     projection: 'orthographic'
            // }
        },
        xAxis3D: {
            type: 'value',
            name: 'Loan Amount',
            nameTextStyle: {
                color: "#ffffff"
            }
        },
        yAxis3D: {
            type: 'value',
            name: 'Term (Months)',
            nameTextStyle: {
                color: "#ffffff"
            }
        },
        zAxis3D: {
            type: 'value',
            name: 'Expected Profit',
            nameTextStyle: {
                color: "#ffffff"
            }
        },
        visualMap: {
            // min: -1500,
            // max: 1500,
            dimension: 2,
            calculable:true,
            inRange: {
                color: ['#fe0300', '#f09a09', '#f5f811', '#00ff0d', '#00fea8', '#0b9df0', '#1710c0']
            }
        },

        series: [
            {
                type: 'line3D',
                // symbol: 'arrow',
                // symbolSize: 15,
                lineStyle: {
                  width:2
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
