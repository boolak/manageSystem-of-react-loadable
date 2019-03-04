import './style.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Menu from '../menu';
import Header from '../header/index.jsx';
import Home from '../home/router.js';// 首页
import UserManage from '../userManage/router.js';// 用户管理
import ContentManage from '../contentManage/router.js';// 内容管理
import IndexConManage from '../indexConManage/router.js';// 指数内容管理
import RoleManage from '../roleManage/router.js';// 角色权限管理
import DataDicManage from '../dataDicManage/router.js';// 数据字典管理
import SystemManage from '../systemManage/router.js';// 系统管理

import loadableWrap from '../../components/loadableWrap/index';
/**
 * @desc 页面整体框架组件
 */

const routers = [
    ...UserManage(loadableWrap),
    ...ContentManage(loadableWrap),
    ...IndexConManage(loadableWrap),
    ...RoleManage(loadableWrap),
    ...DataDicManage(loadableWrap),
    ...SystemManage(loadableWrap),
    ...Home(loadableWrap),
]


export default function(prop) {
    const { match } = prop;
    return (
        <div className="frame">
            <Menu {...prop}/>
            <Header {...prop}/>
            {/*<Switch>
                <Route exact path={`${match.url}`} render={
                    props => {
                        return [ <Home key="2" {...prop} {...props} />];
                    }
                } />
                <Route path={`${match.url}userManage`} render={
                    props => {
                        return [ <UserManage key="2" {...prop} {...props} />];
                    }
                } />
                <Route path={`${match.url}contentManage`} render={
                    props => {
                        return [ <ContentManage key="2" {...prop} {...props} />];
                    }
                } />
                <Route path={`${match.url}indexConManage`} render={
                    props => {
                        return [ <IndexConManage key="2" {...prop} {...props} />];
                    }
                } />
                <Route path={`${match.url}roleManage`} render={
                    props => {
                        return [ <RoleManage key="2" {...prop} {...props} />];
                    }
                } />
                <Route path={`${match.url}dataDicManage`} render={
                    props => {
                        return [ <DataDicManage key="2" {...prop} {...props} />];
                    }
                } />
                <Route path={`${match.url}systemManage`} render={
                    props => {
                        return [ <SystemManage key="2" {...prop} {...props} />];
                    }
                } />
            </Switch>*/}
            <Switch>
                {
                    routers.map((item,index)=>{
                        let {path, name, component: Component} = item;
                        return (
                            <Route key={name} path={path} render={props => [<Component {...props}/>]}/>
                        )
                    })
                }
            </Switch>
        </div>
    );
}