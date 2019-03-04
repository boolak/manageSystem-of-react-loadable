import './style.scss';
import React from 'react';
import bind from 'react-autobind';
import EchartBase from '../../../components/echarts/base/EchartBase';
import '../../../components/echarts/tongren';

function getOption(selectedRegion) {
    return {
        geo: {
            map: '铜仁',
            aspectScale: 1,
            label: {
                show: true,
                // color: '#454D6B',
                color: '#eee',
                fontWeight: 500,
                fontSize: 14,
                position: ['50%', '50%']
            },
            itemStyle: {
                // areaColor: '#121B3B',
                areaColor: '#293F6F',
                borderColor: '#486EB2',
                borderWidth: 1
            },
            regions: [
                {
                    name: selectedRegion,
                    selected: true
                }
            ],
            emphasis: {
                label: {
                    color: '#fff'
                },
                itemStyle: {
                    // areaColor: '#293F6F',
                    borderColor: '#63b2da',
                    areaColor: '#28b6fb'
                }
            }
        }
    }
}

export default class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRegion: '',
            option: getOption()
        }
        bind(this);
    }
    static getDerivedStateFromProps(nextProps, state) {
        return {
            selectedRegion: nextProps.country,
            option: getOption(nextProps.country)
        };
    }
    onEvents(e) {
        const region = e.region;

        const { selectedRegion } = this.state;
        let regionName = '';
        if(region.name !== selectedRegion) {
            regionName = region.name;
        } else {
            return;
        }
        this.props.setSelectedCountry(regionName);
    }
    onBack() {
        this.props.setSelectedCountry('');
    }

    render() {
        const { option, selectedRegion } = this.state;
        return (
            <div className="center-map">
                <EchartBase
                    onRender={this.onRender}
                    onEvents={{click: this.onEvents}}
                    option={option}
                />
                {
                    selectedRegion ?
                        <div className="back-btn" onClick={this.onBack}>
                            <i className="iconfont icon-fanhui" />返回
                        </div> :
                        null
                }
            </div>
        );
    }
}
