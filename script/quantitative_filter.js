// Note: Change the dataset to make default the last index 

$(document).ready(function () {
    $.get('https://lilybabe.github.io/dashboard_prototype/data/quantitative_data.json', function (my_data) {
        $.get('https://lilybabe.github.io/dashboard_prototype/data/quantitative_schema.json', function (schema) {
            var dataSize = 400;
            // $('.dropdown-item').click(function () {
            //     $("#dropdownMenuButton").html(this.innerHTML.trim());
            //     dataSize = this.innerHTML.trim().split(" ")[2] * 1;
            //     data0 = [];
            //     // var data1 = [];
            //     for (let i = 0; i < dataSize; i++) {
            //         const element = quantitatives[i];
            //         data0.push(element);
            //     }
            //     console.time('render');
            //     var update = [{
            //         name: 'parallel',
            //         data: data0
            //     }];
            //     var index = 0;
            //     for (var i = 0; i < CATEGORY_DIM_COUNT; i++) {
            //         for (var j = 0; j < CATEGORY_DIM_COUNT; j++) {
            //             if (CATEGORY_DIM_COUNT - i + j >= CATEGORY_DIM_COUNT) {
            //                 continue;
            //             }
            //             update.push({
            //                 name: `scatter ${i} ${j}`,
            //                 data: retrieveScatterData(data0, i, j),
            //             });
            //             index++;
            //         }
            //     }
            //     chart.setOption({

            //         series: update
            //     });
            //     console.timeEnd('render');
            // });

            // var schema = [
            //     { name: "id", text: 'Loan ID', index: 0 },
            //     { name: "monthly_income", text: 'Monthly Income', index: 1 },
            //     { name: "loan_amount", text: 'Loan Amount', index: 2 },
            //     { name: "loan_cover", text: 'Loan Cover', index: 3 },
            //     { name: "customer_duration_months", text: 'Customer Duration Months', index: 4 },
            //     { name: "prior_loan_count", text: 'Prior Loan Count', index: 5 },
            //     { name: "duration_in_address", text: 'Duration in address (months)', index: 6 },
            //     { name: "duration_of_income", text: 'Duration of Income (months)', index: 7 },
            //     { name: "pd", text: 'PD', index: 8 },
            //     { name: "default", text: 'Default', index: 9 }
            // ];
            var CATEGORY_DIM_COUNT = schema.length - 15;
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
            // var data1 = [];
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

            var chart = echarts.init(document.getElementById('quantitative_filter'));
            console.time('render');
            var myOption = getOption();
            myOption = generateGrids(myOption);
            chart.setOption(myOption);
            console.timeEnd('render');

            function retrieveScatterData(data, dimX, dimY) {
                var result = [];
                for (var i = 0; i < data.length; i++) {
                    var item = [data[i][dimX + 1], data[i][dimY + 1]];
                    item[CATEGORY_DIM] = data[i][CATEGORY_DIM];
                    item[5] = data[i][0]; // for ID
                    result.push(item);
                }
                return result;
            }

            function generateGrids(option) {
                var index = 0;

                for (var i = 0; i < CATEGORY_DIM_COUNT; i++) {
                    for (var j = 0; j < CATEGORY_DIM_COUNT; j++) {
                        if (- i + j >= 0) {
                            continue;
                        }

                        option.grid.push({
                            left: BASE_LEFT + i * (GRID_WIDTH + GAP) + '%',
                            top: BASE_TOP + j * (GRID_HEIGHT + GAP) + '%',
                            width: GRID_WIDTH + '%',
                            height: GRID_HEIGHT + '%'
                        });

                        option.brush.xAxisIndex && option.brush.xAxisIndex.push(index);
                        option.brush.yAxisIndex && option.brush.yAxisIndex.push(index);

                        option.xAxis.push({
                            splitNumber: 3,
                            position: 'top',
                            axisLine: {
                                show: j === 0,
                                onZero: false
                            },
                            axisTick: {
                                show: j === 0,
                                inside: true
                            },
                            axisLabel: {
                                show: j === 0,
                                color: '#ffffff'
                            },
                            type: 'value',
                            gridIndex: index,
                            scale: true
                        });

                        option.yAxis.push({
                            splitNumber: 3,
                            position: 'right',
                            axisLine: {
                                show: i === CATEGORY_DIM_COUNT - 1,
                                onZero: false
                            },
                            axisTick: {
                                show: i === CATEGORY_DIM_COUNT - 1,
                                inside: true
                            },
                            axisLabel: {
                                show: i === CATEGORY_DIM_COUNT - 1,
                                color: '#ffffff'
                            },
                            type: 'value',
                            gridIndex: index,
                            scale: true
                        });
                        option.series.push({
                            name: `scatter ${i} ${j}`,
                            type: 'scatter',
                            symbolSize: SYMBOL_SIZE,
                            xAxisIndex: index,
                            yAxisIndex: index,
                            data: retrieveScatterData(data0, i, j),
                            tooltip: {
                                formatter: function (params) {
                                    let indexs = params.seriesName.split(" ");
                                    return `ID ${params.data[5]}<br/>
                                    X (${schema[indexs[1]*1 + 1].text}) : ${params.data[0]}<br/>
                                    Y (${schema[indexs[2]*1 + 1].text}) : ${params.data[1]} <br/> 
                                    Default: ${params.data[CATEGORY_DIM]} `;
                                }
                            },
                        });

                        option.visualMap.seriesIndex.push(option.series.length - 1);

                        index++;
                    }
                }

                return option;
            }


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
                        inRange: {
                            color: ['#1167b1', '#c23531']
                        },
                        outOfRange: {
                            color: '#292929'
                        },
                        seriesIndex: [0]
                    },
                    tooltip: {
                        trigger: 'item'
                    },
                    title: {
                        text: 'Parallel Diagram',
                        textStyle: { color: '#ffffff' }
                    },
                    parallelAxis: parallel_list,
                    parallel: {
                        bottom: '1%',
                        left: '5%',
                        height: '35%',
                        width: '55%',
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