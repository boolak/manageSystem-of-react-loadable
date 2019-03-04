import React from 'react';
import bind from 'react-autobind';


/**
 * @description 投诉建议
 */

export default class ComplianAdvice extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    投诉建议管理
                </div>
            </div>
        )
    }
}