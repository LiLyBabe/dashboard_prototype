var chartDom_tsne1 = document.getElementById('tsne');
var myChart_tsne1 = echarts.init(chartDom_tsne1, 'dark');
var option19;
var $j = jQuery.noConflict();


$.get('https://ntmy99.github.io/db_data.io/tsne.json', function (data) {
    var symbolSize = 3;
    option19 = {
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
                projection: 'orthographic'
            }
        },
        xAxis3D: {
            type: 'value',
            name: 'X'
        },
        yAxis3D: {
            type: 'value',
            name: 'Y'
        },
        zAxis3D: {
            type: 'value',
            name: 'Z'
        },
        visualMap: {
            min: 0,
            max: 1,
            dimension: 4,
            calculable:true,
            inRange: {
                color: ['#C63B34','#fff000']
            }
        },
        dataset: {
            dimensions: [
                'index',
                'x',
                'y',
                'z',
                'default'
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
    myChart_tsne1.setOption(option19);
});
option19 && myChart_tsne1.setOption(option19);
document.getElementById("tsne_fs").onclick = function () { TSNEFullscreen() };
var tsnefs = document.getElementById("tsne");
function TSNEFullscreen() {
    if (tsnefs.requestFullscreen) {
        tsnefs.requestFullscreen();
    } else if (tsnefs.webkitRequestFullscreen) { /* Safari */
        tsnefs.webkitRequestFullscreen();
    } else if (tsnefs.msRequestFullscreen) { /* IE11 */
        tsnefs.msRequestFullscreen();
    }
}