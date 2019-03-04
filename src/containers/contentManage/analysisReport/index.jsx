import React from 'react';
import bind from 'react-autobind';


/**
 * @description 营商环境分析报告
 */

export default class AnalysisReport extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    营商环境分析报告管理
                </div>
            </div>
        )
    }
}