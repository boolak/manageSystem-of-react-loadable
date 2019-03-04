import React from 'react';
import bind from 'react-autobind';


/**
 * @description 政策指南
 */

export default class PolicyGuide extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    政策指南管理
                </div>
            </div>
        )
    }
}