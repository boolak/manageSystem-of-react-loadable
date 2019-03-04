import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import FrameContext from '../frame/context';
import './style.scss';

import PolicyGuide from './policyGuide/index.jsx';
import ClassicCase from './classicCase/index.jsx';
import ComplianAdvice from './complianAdvice/index.jsx';
import AnalysisReport from './analysisReport/index.jsx';
/**
 * @description 内容管理 路由
 */

export default function(props){
    const {match} = props;
    return(
        <FrameContext.Consumer>
            {
                context => {
                    return (
                        <Switch>
                            <Route path={`${match.path}/policyGuide`} component={PolicyGuide}/>
                            <Route path={`${match.path}/classicCase`} component={ClassicCase}/>
                            <Route path={`${match.path}/complianAdvice`} component={ComplianAdvice}/>
                            <Route path={`${match.path}/analysisReport`} component={AnalysisReport}/>
                            <Redirect path={`${match.path}`} to={{pathname: `${match.path}/policyGuide`}}/>
                        </Switch>
                    )
                }
            }
        </FrameContext.Consumer>
    )
}