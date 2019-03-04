import './loading.scss';
import React from 'react';
import { Spin, Icon } from 'antd';

export default function Loading(props) {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
    return (
        <div className="loading">
            <Spin indicator={antIcon} />
        </div>
    );
}