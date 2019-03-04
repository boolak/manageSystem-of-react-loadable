import React from 'react';
import bind from 'react-autobind';
import './style.scss';
import {Icon} from 'antd';
/**
 * @description 页面头部
 */

export default class Header extends React.Component{
    constructor(p){
        super(p);
        bind(this);
    }

    render(){
        return (
            <header>    
                <span>
                    <Icon type="user" style={{fontSize: 18}}/> admin
                </span>
                <i className="iconfont icon-exit"></i>
            </header>
        )
    }
}