import React from 'react';
import bind from 'react-autobind';
import Menu from './menu';
import { logout } from './service';
import { getResource } from '../frame/service';
import moment from 'moment';

import FrameContext from '../frame/context';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
        bind(this);
    };
    componentDidMount() {
        
    }
    componentWillUnmount() {
    }
    onLogout (ticket) {
       
    }
    render() {
        return (
            <FrameContext.Consumer>
            {
                context => {
                    return <Menu {...this.props} {...this.state} logout={this.onLogout} country={context.country} />;
                }
            }
            </FrameContext.Consumer>
        );
    }
}