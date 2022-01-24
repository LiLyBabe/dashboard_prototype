var riskPricingDom = document.getElementById('payday_risk_pricing');
var riskPricingChart = echarts.init(riskPricingDom);
var riskPricingOption;

riskPricingOption = {
    title: {
        text: 'Risk Pricing',
        textStyle: {
            color: '#ffffff',
            fontSize: 15
        }
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        top: '2%',
        textStyle: {
            color: '#ffffff'
        }
    },
    grid: {
        left: '6%',
        right: '4%',
        bottom: '10%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name: 'Credit Rating',
        nameLocation: 'middle',
        type: 'category',
        boundaryGap: true,
        axisLabel: {
            color: '#ffffff'
        },
        nameTextStyle: {
            color: '#ffffff',
            padding: 15,
        },
        data: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
    },
    yAxis: {
        name: 'APR',
        nameLocation: 'middle',
        type: 'value',
        axisLabel: {
            color: '#ffffff'
        },
        splitLine: {
            lineStyle: {
                color: '#36344E'
            },
            show: true
        },
        nameTextStyle: {
            color: '#ffffff',
            padding: 24,
        },
    },
    series: [
        {
            name: 'PD',
            type: 'line',
            data: [
                0.05, 0.0697, 0.0973, 0.1357, 0.1893, 0.2641, 0.3684, 0.5139, 0.7168,
                0.9999
            ]
        },
        {
            name: 'Current Pricing',
            type: 'line',
            data: ["", 0.5054, 0.5008, 0.5004, 0.496, 0.6952, 0.7422, 0.5745, "", ""]
        },
        {
            name: 'Correct Pricing',
            type: 'line',
            data: [
                0.45, 0.475, 0.5349, 0.6184, 0.7349, 0.8974, 1.1241, 1.2403, 1.4403,
                1.88
            ]
        }
    ]
};

riskPricingOption && riskPricingChart.setOption(riskPricingOption);
