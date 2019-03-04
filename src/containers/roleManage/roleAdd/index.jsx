import React from 'react';
import bind from 'react-autobind';


/**
 * @description 角色
 */

export default class RoleAdd extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    角色管理/创建角色
                </div>
            </div>
        )
    }
}