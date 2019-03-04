import React from 'react';
import bind from 'react-autobind';


/**
 * @description 指标考评
 */

export default class GovernmentUser extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    指标考评管理
                </div>
            </div>
        )
    }
}