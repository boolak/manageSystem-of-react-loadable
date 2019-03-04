import React from 'react';
import Loadable from 'react-loadable';
// import { Divider } from 'antd';
// import LoadingPage from '../loadingPage/LoadingPage';
export default function LoadableWrap(opts) {
    return Loadable(Object.assign({
        loading: LoadingPage,
        delay: 200,
        timeout: 300000 // 加载超过5分钟就超时 
    }, opts));
}

function LoadingPage(props) {
    return (
        <div>加载中。。。。。。。</div>
    )
}