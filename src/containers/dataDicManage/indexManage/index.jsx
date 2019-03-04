import React from 'react';
import bind from 'react-autobind';
import {Link} from 'react-router-dom';


/**
 * @description 指标体系
 */

export default class IndexManage extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    指标体系管理
                </div>
                <Link to="/dataDicManage/addIndexTemp">新增</Link>
            </div>
        )
    }
}