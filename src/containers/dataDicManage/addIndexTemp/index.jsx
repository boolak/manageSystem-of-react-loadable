import React from 'react';
import bind from 'react-autobind';


/**
 * @description 指标体系
 */

export default class AddIndexTemp extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    指标体系管理/新增
                </div>
            </div>
        )
    }
}