$(document).ready(function () {
    $.get('https://monex-p.github.io/dashboard_prototype/data/quantitative_data.json', function (my_data) {  
        $.get('https://monex-p.github.io/dashboard_prototype/data/quantitative_schema.json', function (schema) {
            var dataSize = 400;
            var CATEGORY_DIM_COUNT = schema.length - 14;
            var GAP = 1;
            var BASE_LEFT = 5;
            var BASE_TOP = 10;
            // var GRID_WIDTH = 220;
            // var GRID_HEIGHT = 220;
            var GRID_WIDTH = (100 - BASE_LEFT - GAP) / CATEGORY_DIM_COUNT - GAP;
            var GRID_HEIGHT = (100 - BASE_TOP - GAP) / CATEGORY_DIM_COUNT - GAP;
            var CATEGORY_DIM;
            for (var i = 0; i < schema.length; i++) {
                if (schema[i].name === 'default') {
                    CATEGORY_DIM = i;
                }
            }
            var SYMBOL_SIZE = 3;

            var data0 = [];
            for (let i = 0; i < dataSize; i++) {
                const element = my_data[i];
                data0.push(element);
            }

            var parallel_list = [];
            for (var i = 1; i < schema.length; i++) {
                var my_dict = {
                    dim: i,
                    name: schema[i].text,
                    nameLocation: 'end',
                    axisLabel: { color: '#ffffff' },
                    nameTextStyle: { color: '#ffffff' }
                };
                parallel_list.push(my_dict);
            }

            var chart = echarts.init(document.getElementById('parallel_all'));
            console.time('render');
            var myOption = getOption();
            chart.setOption(myOption);
            console.timeEnd('render');
            function getOption() {
                return {
                    toolbox: {
                        feature: {
                            brush: {
                                type: ['rect', 'polygon', 'keep', 'clear'],
                                title: {
                                    rect: 'Box Select',
                                    polygon: 'Lasso Select',
                                    keep: "Multiple Select",
                                    clear: 'Clear Selections'
                                }
                            },
                        }
                    },
                    animation: false,
                    brush: {
                        brushLink: 'all',
                        xAxisIndex: [],
                        yAxisIndex: [],
                        inBrush: {
                            opacity: 1
                        }
                    },
                    visualMap: {
                        type: 'piecewise',
                        categories: ["0", "1"],
                        dimension: CATEGORY_DIM,
                        orient: 'horizontal',
                        top: 0,
                        left: 'center',
                        textStyle:{
                            color: '#FFFFFF'
                        },
                        inRange: {
                            color: ['#1167b1', '#c23531']
                        },
                        outOfRange: {
                            color: '#292929'
                        },
                        seriesIndex: [0]
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: '{c}'
                    },
                    title: {
                        text: 'Parallel Diagram',
                        textStyle: { color: '#ffffff' }
                    },
                    parallelAxis: parallel_list,
                    parallel: {
                        bottom: '5%',
                        left: '5%',
                        height: '70%',
                        width: '90%',
                    },
                    grid: [],
                    xAxis: [],
                    yAxis: [],
                    series: [
                        {
                            smooth: true,
                            name: 'parallel',
                            type: 'parallel',
                            lineStyle: {
                                width: 1,
                                opacity: 0.3
                            },
                            data: data0,
                        },
                    ]
                };
            }
        });
    });
});