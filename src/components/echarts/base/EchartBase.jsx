/*
* @desc 图标公共部分
* @author xuyao
*/
import echarts from 'echarts';
import React, { Component } from 'react';
import elementResizeEvent from 'element-resize-event';

const whiteList = ['IEEHomeMap'];
class EchartBase extends Component {
    componentDidMount() {
        this.echartObj = this.renderEchartDom();
        let onEvents = this.props.onEvents || [];
        for (let eventName in onEvents) {
            if (typeof eventName === 'string' && typeof onEvents[eventName] === 'function') {
                this.echartObj.on(eventName, function(param) {
                    onEvents[eventName](param, this.echartObj);
                });
            }
        }
        elementResizeEvent(this.echartsDom, () => {
            this.echartObj.resize();
            this.props.onRender && this.props.onRender(this.echartObj);
        });
        // $(window).resize(function(){
        //  echartObj.resize();
        // });
        this.props.onRender && this.props.onRender(this.echartObj);
    }
    shouldComponentUpdate(nextProps) {
        // console.log(this.props.option, nextProps.option);
        if(whiteList.includes(this.props.chartFrom || '')) {
            return true;
        }else if(JSON.stringify(this.props.option) === JSON.stringify(nextProps.option)) {
            return false;
        }
        return true;
    }
    componentDidUpdate() {
        // this.renderEchartDom();
        this.echartObj.setOption(this.props.option, !this.props.noEnforce);
        if (this.props.showLoading) {
            this.echartObj.showLoading();
        } else {
            this.echartObj.hideLoading();
        }
    }
    componentWillUnmount() {
        echarts.dispose(this.echartObj);
    }
    renderEchartDom() {
        let echartObj = this.getEchartsInstance();
        echartObj.setOption(this.props.option);
        if (this.props.showLoading) {
            echartObj.showLoading();
        } else {
            echartObj.hideLoading();
        }
        return echartObj;
    }
    getEchartsInstance() { // echarts.getInstanceByDom(this.echartsDom) || 
        return echarts.init(this.echartsDom, 'echartTheme');
    }
    render() {
        let style = this.props.style || {
            height: '100%', 
            width: '100%'
        };
        return ( 
            <div className={this.props.className || ''} ref = {(echartsDom) => {this.echartsDom = echartsDom;}} style = {style} />
        );
    }
}
export default EchartBase;