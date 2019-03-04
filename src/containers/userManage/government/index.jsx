import React from 'react';
import bind from 'react-autobind';


/**
 * @description 政府用户
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
                    政府用户管理
                </div>
            </div>
        )
    }
}