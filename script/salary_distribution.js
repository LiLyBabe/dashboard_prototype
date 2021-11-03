var iRadius = 25;
var iElevationScale = 15;
var map = new maptalks.Map('salary_distribution', {
    center: [105.844960, 20.997763],
    zoom: 10.5,
    layerSwitcherControl: {
        'position': 'top-right',
        // title of base layers
        'baseTitle': 'Base Layers',
        // title of layers
        'overlayTitle': 'Layers',
        // layers you don't want to manage with layer switcher
        'excludeLayers': [],
        // css class of container element, maptalks-layer-switcher by default
        'containerClass': 'maptalks-layer-switcher'
    },
    baseLayer: new maptalks.GroupTileLayer('Base TileLayer', [
        new maptalks.TileLayer('Carto dark', {
            'urlTemplate': 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',
            'subdomains': ['a', 'b', 'c', 'd']
        }),
        new maptalks.TileLayer('Carto light', {
            'visible': false,
            'urlTemplate': 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
            'subdomains': ['a', 'b', 'c', 'd']
        }),
    ]),
    // maxZoom: 18,
    pitch: 50,
});


const deckGlLayer = new maptalks.DeckGLLayer('Point', {});

map.addLayer(deckGlLayer);

const Color_Range = ['blue', 'red'];
function updateTooltip({ x, y, object }) {
    let tooltip = document.getElementById('tooltip');
    try {
        object = object.points[0];
        if (object) {
            tooltip.style.top = `${y}px`;
            tooltip.style.left = `${x}px`;
            tooltip.innerHTML = `
    <div><b>Customer: &nbsp;${object[0]}</b></div>
    <div><b>Latitude: &nbsp;${object[1]}</b></div>
    <div><b>Longtitude: &nbsp;${object[2]}</b></div>
    <div><b>Risk Score: &nbsp;${object[3]}</b></div>
`;
        } else {
            tooltip.innerHTML = '';
        }
    } catch (error) {
        tooltip.innerHTML = '';
    }

}

addHexagonLayer();

function addHexagonLayer() {

    const Color_Range = [
        [1, 152, 189],
        [73, 227, 206],
        [216, 254, 181],
        [254, 237, 177],
        [254, 173, 84],
        [209, 55, 78]
    ];

    const LIGHT_SETTINGS = {
        lightsPosition: [-0.144528, 49.739968, 8000, -3.807751, 54.104682, 8000],
        ambientRatio: 0.4,
        diffuseRatio: 0.6,
        specularRatio: 0.2,
        lightsStrength: [0.8, 0.0, 0.8, 0.0],
        numberOfLights: 2
    };
    const options = {
        radius: iRadius,
        coverage: 1,
        upperPercentile: 100,
        lowerPercentile: 1
    }

    let data = dataGeo;

    let hexagonLayer = {
        layerType: "HexagonLayer",
        id: 'heatmap',
        colorRange: Color_Range,
        data,
        // elevationRange: [min, max],
        elevationScale: iElevationScale,
        getElevationValue: d => {
            try {
                return d[0][3];
            } catch (error) {

            }
            return 0;
        },
        getColorValue: d => {
            try {
                return d[0][3];
            } catch (error) {

            }
            return 0;
        },
        extruded: true,
        pickable: true,
        getPosition: d => [d[1], d[2]],
        onHover: updateTooltip,
        lightSettings: LIGHT_SETTINGS,
        opacity: 1,
        ...options
    };
    deckGlLayer.setProps({
        layers: [hexagonLayer]
    });
}

$(document).ready(function (e) {

    $("#myRadius").change(function () {
        var newval = $(this).val();
        iRadius = newval * 1;
        addHexagonLayer();
    });
    $("#myElevationScale").change(function () {
        var newval = $(this).val();
        iElevationScale = newval * 1;
        addHexagonLayer();
    });
});

document.getElementById("salary_distribution_fs").onclick = function () { SalaryFullscreen() };
var salary = document.getElementById("salary_distribution");
function SalaryFullscreen() {
    if (salary.requestFullscreen) {
        salary.requestFullscreen();
    } else if (salary.webkitRequestFullscreen) { /* Safari */
        salary.webkitRequestFullscreen();
    } else if (salary.msRequestFullscreen) { /* IE11 */
        salary.msRequestFullscreen();
    }
}