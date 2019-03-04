import './noData.scss';
import noData from '../../images/empty.png';
import React, { Component } from 'react';

export default class NoData extends Component {
    render() {
        return (
            <div className="no-data">
                <div>
                    <img src={ noData } alt="暂无数据" />
                    <p>{this.props.text || '暂无数据'}</p>
                </div>
            </div>
        );
    }
}