import React from 'react';
import bind from 'react-autobind';


/**
 * @description 世界经典案例
 */

export default class ClassicCase extends React.Component{
    constructor(props){
        super(props);
        bind(this);
    }

    render(){
        return (
            <div>
               <div className="page-title-name">
                    世界经典案例管理
                </div>
            </div>
        )
    }
}