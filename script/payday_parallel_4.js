
$(document).ready(function () {
    $.get('https://monex-p.github.io/dashboard_prototype/data/payday_parallel_data.json', function (my_data) {
        $.get('https://monex-p.github.io/dashboard_prototype/data/payday_parallel_schema.json', function (schema) {
            var dataSize = 400;

            var CATEGORY_DIM;
            for (var i = 0; i < schema.length; i++) {
                if (schema[i].name === 'default') {
                    CATEGORY_DIM = i;
                }
            }

            var subset_data = [];
            // var data1 = [];
            for (let i = 0; i < dataSize; i++) {
                const element = my_data[i];
                subset_data.push(element);
            }

            var parallel_list = [];
            var my_dict = {
                dim: 5,
                name: schema[5].text,
                nameLocation: 'end',
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' },
            };
            parallel_list.push(my_dict);

            var my_default = {
                dim: CATEGORY_DIM,
                name: schema[CATEGORY_DIM].text,
                nameLocation: 'end',
                axisLabel: { color: '#ffffff' },
                nameTextStyle: { color: '#ffffff' },
                type: 'category'
            };
            parallel_list.push(my_default);

            var chart = echarts.init(document.getElementById('parallel4'));
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
                    // legend: {

                    // },
                    visualMap: {
                        type: 'piecewise',
                        categories: ["0", "1"],
                        dimension: CATEGORY_DIM,
                        orient: 'horizontal',
                        top: 0,
                        left: 'center',
                        textStyle: {
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
                        textStyle: { color: '#ffffff',fontSize:15 }
                        
                    },
                    parallelAxis: parallel_list,
                    parallel: {
                        bottom: '5%',
                        left: '8%',
                        height: '70%',
                        width: '87%',
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
                            data: subset_data,
                        },
                    ]
                };
            }
        });
    });
});