var chartDom7 = document.getElementById('APR');
var myChart7 = echarts.init(chartDom7);
var option7;
var $j = jQuery.noConflict();


        $.get('https://lilybabe.github.io/dashboard_files/LoanSizePDAPR_theirPD.json', function (data) {
            var symbolSize = 2.3;
            var total_return = 0;
            for (var i = 0; i < data.length; i++) {
                total_return += parseFloat(data[i].z);
            }
            option7 = {
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
                    name: 'PD'
                },
                yAxis3D: {
                    type: 'value',
                    name: 'Loan Amount'
                },
                zAxis3D: {
                    type: 'value',
                    name: 'APR'
                },
                // graphic: [
                //     {
                //         type: 'group',
                //         right: '10%',
                //         top: '10%',
                //         draggable: true,
                //         children: [
                //             {
                //                 type: 'rect',
                //                 z: 1,
                //                 left: 'center',
                //                 top: 'middle',
                //                 shape: {
                //                     width: 200,
                //                     height: 90
                //                 },
                //                 style: {
                //                     fill: '#fff',
                //                     // stroke: '#555',
                //                     // lineWidth: 1,
                //                     // shadowBlur: 6,
                //                     // shadowOffsetX: 3,
                //                     // shadowOffsetY: 3,
                //                     // shadowColor: 'rgba(0,0,0,0.2)'
                //                 }
                //             },
                //             {
                //                 type: 'text',
                //                 z: 100,
                //                 left: 'center',
                //                 top: 'middle',
                //                 style: {
                //                     // fill: '#333',
                //                     text: [
                //                         "Portfolio Risk-adjusted \n\n Return: " + parseInt(total_return)
                //                     ].join('\n'),
                //                     font: '14px Microsoft YaHei'
                //                 }
                //             }
                //         ]
                //     }
                // ],
                visualMap: {
                    min: 0.1,
                    max: 2,
                    dimension: 3,
                    calculable:true,
                    inRange: {
                        color: ['#fe0300', '#f09a09', '#f5f811', '#00ff0d', '#00fea8', '#0b9df0', '#1710c0']
                    }
                },
                dataset: {
                    dimensions: [
                        'index',
                        'x',
                        'y',
                        'z',
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

            myChart7.setOption(option7);
        });

        option7 && myChart7.setOption(option7);