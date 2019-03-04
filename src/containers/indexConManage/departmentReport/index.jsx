import React from 'react';
import bind from 'react-autobind';


/**
 * @description 部门填报
 */

export default class DepartmentReport extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    部门填报管理
                </div>
            </div>
        )
    }
}