import React from 'react';
import bind from 'react-autobind';


/**
 * @description 日志
 */

export default class LogManage extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    日志管理
                </div>
            </div>
        )
    }
}