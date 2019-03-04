import React from 'react';
import bind from 'react-autobind';


/**
 * @description 部门用户
 */

export default class DepartmentUser extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    部门用户管理
                </div>
            </div>
        )
    }
}