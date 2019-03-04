import React from 'react';
import bind from 'react-autobind';


/**
 * @description 帮助中心
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
                    帮助中心管理
                </div>
            </div>
        )
    }
}