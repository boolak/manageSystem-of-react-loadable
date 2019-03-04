import React from 'react';
import FrameContext from '../frame/context';
import {Switch, Route, Redirect} from 'react-router-dom';
import './style.scss';

import CompanyReport from './companyReport/index.jsx';
import DepartmentReport from './departmentReport/index.jsx';
import IndexManage from './indexManage/index.jsx';
/**
 * @description 指数内容管理 路由
 */

export default function(props){
    const {match} = props;
    return(
        <FrameContext.Consumer>
            {
                context => {
                    return (
                        <Switch>
                            <Route path={`${match.path}/companyReport`} component={CompanyReport}/>
                            <Route path={`${match.path}/departmentReport`} component={DepartmentReport}/>
                            <Route path={`${match.path}/indexManage`} component={IndexManage}/>
                            <Redirect path={`${match.path}`} to={{pathname: `${match.path}/companyReport`}}/>
                        </Switch>
                    )
                }
            }
        </FrameContext.Consumer>
    )
}