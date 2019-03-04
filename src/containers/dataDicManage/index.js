import React from 'react';
import FrameContext from '../frame/context';
import {Switch, Route, Redirect} from 'react-router-dom';
import './style.scss';

import IndexManage from './indexManage/index.jsx';
import AddIndexTemp from './addIndexTemp/index.jsx';
/**
 * @description 数据字典管理 路由
 */

export default function(props){
    const {match} = props;
    return(
        <FrameContext.Consumer>
            {
                context => {
                    return (
                        <Switch>
                            <Route path={`${match.path}/indexManage`} component={IndexManage}/>
                            <Route path={`${match.path}/addIndexTemp`} component={AddIndexTemp}/>
                            <Redirect path={`${match.path}`} to={{pathname: `${match.path}/indexManage`}}/>
                        </Switch>
                    )
                }
            }
        </FrameContext.Consumer>
    )
}