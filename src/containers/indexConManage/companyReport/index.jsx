import React from 'react';
import bind from 'react-autobind';


/**
 * @description 企业问卷填报
 */

export default class CompanyReport extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    企业问卷填报管理
                </div>
            </div>
        )
    }
}