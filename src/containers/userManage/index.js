import React from 'react';
import FrameContext from '../frame/context';
import {Switch, Route, Redirect} from 'react-router-dom';
import './style.scss';

import CompanyUser from './company';
import DepartmentUser from './department';
import GovernmentUser from './government';
import Manager from './manager';
/**
 * @description 用户管理 路由
 */

export default function(props){
    const {match} = props;
    return(
        <FrameContext.Consumer>
            {
                context => {
                    return (
                        <Switch>
                            <Route path={`${match.path}/company`} component={CompanyUser}/>
                            <Route path={`${match.path}/department`} component={DepartmentUser}/>
                            <Route path={`${match.path}/government`} component={GovernmentUser}/>
                            <Route path={`${match.path}/manager`} component={Manager}/>
                            <Redirect path={`${match.path}`} to={{pathname: `${match.path}/company`}}/>
                        </Switch>
                    )
                }
            }
        </FrameContext.Consumer>
    )
}