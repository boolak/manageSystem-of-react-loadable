import React from 'react';
import FrameContext from '../frame/context';
import {Switch, Route, Redirect} from 'react-router-dom';
import './style.scss';

import RoleList from './roleList/index.jsx';
import RoleAdd from './roleAdd/index.jsx';
/**
 * @description 角色管理 路由
 */

export default function(props){
    const {match} = props;
    return(
        <FrameContext.Consumer>
            {
                context => {
                    return (
                        <Switch>
                            <Route path={`${match.path}/roleList`} component={RoleList}/>
                            <Route path={`${match.path}/roleAdd`} component={RoleAdd}/>
                            <Redirect path={`${match.path}`} to={{pathname: `${match.path}/roleList`}}/>
                        </Switch>
                    )
                }
            }
        </FrameContext.Consumer>
    )
}