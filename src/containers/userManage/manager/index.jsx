import React from 'react';
import bind from 'react-autobind';


/**
 * @description 管理员管理
 */

export default class Manager extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
                <div className="page-title-name">
                    管理员管理
                </div>
            </div>
        )
    }
}