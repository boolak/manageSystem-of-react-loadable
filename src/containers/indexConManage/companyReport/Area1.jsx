/**
 * @desc 外迁企业概览页-右侧分区域风险企业数
 */
import "./style.scss";
import React, { Component } from "react";
import EchartBase from "../../../components/echarts/base/EchartBase";
import NoData from "../../../components/common/NoData";

export default class Area extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  shouldComponentUpdate(props, nextState) {
    return (
      JSON.stringify(props.data.countryStat3) !==
        JSON.stringify(this.props.data.countryStat3) ||
      JSON.stringify(props.data.riskTop3) !==
        JSON.stringify(this.props.data.riskTop3)  
    )
  }

  
  getOption(ratio) {
    let r = Math.round(ratio * 100);
    return {
      tooltip: {
        show: false,
        trigger: "none"
      },
      series: [
        {
          type: "pie",
          radius: ["70%", "90%"],
          hoverAnimation: false,
          avoidLabelOverlap: false,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: r,
              name: `${r}%`,
              label: {
                normal: {
                  show: true,
                  color: "#0293DC",
                  position: "center"
                }
              },
              itemStyle: {
                color: "#7cbbde"
              }
            },
            {
              name: "",
              value: 100 - r,
              itemStyle: {
                color: "#114773"
              }
            }
          ]
        }
      ]
    };
  }

  render() {
    const {
      riskTop3,
      countryStat3,
      selectedCity,
      selectedCountry
    } = this.props.data;
    let title = selectedCountry === "" ? "分区域风险企业数" : "分区域企业稳定性监测";
    const data = selectedCountry !== "" ? countryStat3 : riskTop3;
    return (
      <div className="chart-list containerBox">
        <div className="chart-title">
          <i className="iconfont icon-qiye" />
          {selectedCountry || selectedCity}-{title}
        </div>
        <div className="chart-content">
          {data !== null ? (
            data.map((o, index) => {
              let country = o.country;
              let emigrationCount = o.emigrationCount;
              if (selectedCountry !== "") {
                country = o.code;
                emigrationCount = o.value;
              }
              return (
                <div className="pie-chart-item" key={index}>
                  <div className="item-bar">
                    <span className="label">{country}</span>
                    <div className="bar">
                      <i style={{ width: `${o.ratio * 100}%` }} />
                      <em>{emigrationCount}</em>
                    </div>
                  </div>
                  <div className="item-pie">
                    <div className="pie">
                      <EchartBase option={this.getOption(o.ratio)} />
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <NoData />
          )}
        </div>
      </div>
    );
  }
}
