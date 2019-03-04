import React from 'react';
import FrameContext from '../frame/context';
import {Switch, Route, Redirect} from 'react-router-dom';
import './style.scss';

import HelpCenter from './helpCenter/index.jsx';
import LogManage from './logManage/index.jsx';
/**
 * @description 系统管理 路由
 */

export default function(props){
    const {match} = props;
    return(
        <FrameContext.Consumer>
            {
                context => {
                    return (
                    <Switch>
                        <Route path={`${match.path}/helpCenter`} component={HelpCenter}/>
                        <Route path={`${match.path}/logManage`} component={LogManage}/>
                        <Redirect path={`${match.path}`} to={{pathname: `${match.path}/helpCenter`}}/>
                    </Switch>
                    )
                }
            }
        </FrameContext.Consumer>
    )
}