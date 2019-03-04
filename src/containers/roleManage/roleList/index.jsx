import React from 'react';
import bind from 'react-autobind';
import {Link} from 'react-router-dom';


/**
 * @description 角色
 */

export default class RoleManage extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    角色管理
                </div>
                    <Link to="/roleManage/roleAdd">新增</Link>
            </div>
        )
    }
}