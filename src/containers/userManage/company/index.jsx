import React from 'react';
import bind from 'react-autobind';


/**
 * @description 企业用户
 */

export default class CompanyUser extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
                <div className="page-title-name">
                    企业用户管理
                </div>
            </div>
        )
    }
}