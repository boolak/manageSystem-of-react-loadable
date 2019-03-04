import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/common.css';
import "./styles/reset.scss";
import Router from './Router';
// import registerServiceWorker from './registerServiceWorker';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

ReactDOM.render(<LocaleProvider locale={zhCN}><Router /></LocaleProvider>, document.getElementById('root'));
// registerServiceWorker();
