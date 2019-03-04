import React, {Component} from 'react';
import echarts from 'echarts';
import EchartBase from '../base/EchartBase';
import './map.scss';
// let TongRenJson = require('./../铜仁.json');
export default class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount = () => {
        // this.loadMapData();
    };

    // loadMapData = () => {
    //     echarts.registerMap('铜仁', TongRenJson);
    //     TongRenJson.features.forEach(feature => {
    //         let townGeo = {
    //             UTF8Encoding: true,
    //             type: 'FeatureCollection',
    //             features: copyFeatures([feature])
    //         };
    //         echarts.registerMap(feature.properties.name, townGeo);
    //     });
    //     function copyFeatures(features) {
    //         return features.map(function(f) {
    //             return JSON.parse(JSON.stringify(f));
    //         });
    //     }
    // };

    defaultOption = (mapData, area) => {
        mapData.scatterdata = mapData.scatterdata.map((item) => {
            item['selected'] = false;
            return item;
        });
        for(let i = 0, elem; (elem = mapData.scatterdata[i]) !== undefined; i++) {
            if(elem.name === area) {
                mapData.scatterdata[i].selected = true;
            }
        }
        return {
            tooltip: {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                padding: [10, 10, 20, 10],
                trigger: 'item',
                borderWidth: 0,
                extraCssText: 'box-shadow: -3px 3px 14px 4px #053a6b',
                textStyle: {
                    color: '#333333',
                    fontSize: '14'
                },
                formatter: function (param) {
                    let data = param.data.value;
                    return `<div class = "mapTooltip">
                                    <p class = "title"><b>${param.name}</b></p>
                                    <p>高外迁风险企业数<span class = "color-blue">${data[3]}</span>家</p>
                                    <p>监控企业数<span class = "color-blue">${data[4]}家</p>
                                <div>`;
                }
            },
            geo: {
                type: 'map',
                map: '',
                mapType: '',
                label: {
                    normal: {
                        show: mapData.labelShow,
                        textStyle: {
                            color: mapData.textColor ? mapData.textColor : '#fff'
                        }
                    },
                    emphasis: {
                        show: mapData.labelShow,
                        textStyle: {
                            color: mapData.textColor ? mapData.textColor : '#fff'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: mapData.areaColor ? mapData.areaColor : 'none',
                        borderColor: mapData.borderColor ? mapData.borderColor : 'none'
                    },
                    emphasis: {
                        areaColor: mapData.areaColorEmp ? mapData.areaColorEmp : 'none' // 鼠标放上去的效果
                    }
                }
            },
            series: [
                {
                    name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: mapData.scatterdata,
                    symbolSize: function (val) {
                        // 任意一点的半径为a+（b-a）/（最大企业量-最小企业量）*（该点企业量-最小点企业量）
                        // 最大点半径限制为b，最小为a
                        let simple = 0;
                        if(val[3]){
                            simple = mapData.highMax === mapData.highMin ? 10 : 10 + (30 - 10) / (mapData.highMax - mapData.highMin) * ( val[3] - mapData.highMin);
                        }
                        return simple;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#fdde62',
                            shadowBlur: 10,
                            shadowColor: '#ECDA6B'
                        }
                    },
                    zlevel: 999
                },
                {
                    type: 'map',
                    map: '',
                    data: mapData.scatterdata,
                    aspectScale: 1.3,
                    selectedMode: 'single',
                    zoom: 1,
                    label: {
                        normal: {
                            show: true,
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 14
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: '#0F84C2',
                            borderColor: 'rgb(99,178,218)',
                            borderWidth: 1
                        },
                        emphasis: {
                            areaColor: 'rgb(99,178,218)',
                            borderColor: 'rgb(99,178,218)',
                            borderWidth: 1,
                            shadowColor: 'rgba(0, 0, 0, 0.8)',
                            shadowBlur: '3px'
                        }
                    },
                    tooltip: {
                        show: true,
                        formatter: function (param) {
                            let data = param.data.value;
                            if(param.name === '江口县') {
                                return `<div class = "mapTooltip">
                                    <p class = "title"><b>${param.name}</b></p>
                                <div>`;
                            }
                            return `<div class = "mapTooltip">
                                    <p class = "title"><b>${param.name}</b></p>
                                    <p>高外迁风险企业数<span class = "color-blue">${data[3]}</span>家</p>
                                    <p>监控企业数<span class = "color-blue">${data[4]}家</p>
                                <div>`;
                        }
                    }
                // selectedMode: 'single'
                }
            ]
        };
    };

    goBack = () => {
        this.props.onAreaSelect('铜仁');
    };

    render(){
        let {mapData} = this.props, {area} = this.props;
        let options = this.defaultOption(mapData, area);
        let sery = options.series[1];
        let geo = options.geo;
        geo.map = geo.mapType = sery.map = '铜仁';
        let onEvents = {
            click: ({data}) => {
                this.props.onAreaSelect(data.name);
            }
        };
        return(
            <div className="IEE-map">
                <div className="map-title">
                    <span className = "icon-bg"><i className = "iconfont icon-qushi"/></span>
                    <span className = "title">
                            <h3 className = "font20">高外迁风险企业</h3>
                        </span>
                </div>
                <div className="map-chart">
                    <EchartBase chartFrom="IEEHomeMap" onEvents={onEvents} option={options}/>
                </div>
                <em style = {{display: this.props.area === '铜仁' ? 'none' : 'block'}}  onClick = {this.goBack} className="go-Back iconfont icon-fanhui">
                </em>
            </div>
        );
    }
}