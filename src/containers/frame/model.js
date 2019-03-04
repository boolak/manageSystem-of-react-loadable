import React from 'react';
import bind from 'react-autobind';
// import { getResource } from './service';

import FrameContext from './context';

export default class Frame extends React.Component {
    constructor(props) {
        super(props);
        const { location, history } = props;
        let ticket = location.search.split('ticket=')[1];
        if(ticket) {
            ticket = window.decodeURIComponent(ticket);

            let date = new Date();
            date.setTime(date.getTime() + 30 * 60 * 1000);

            document.cookie = `ticket=${ticket}; path=/; expires=${date.toGMTString()}`;
            // document.cookie = `ticket=${ticket}; path=/`;
            history.replace(`${window.location.pathname}`);
        }else {
            ticket = document.cookie.split('ticket=')[1];
        }

        this.state = {
            country: '',
            ticket,
            userInfo: {
                authResult: {},
                userName: '--'
            }
        };
        bind(this);

        // getResource(ticket).then(response => {
        //     this.setState({
        //         userInfo: response.data
        //     });
        // });
    }
    onCountrySelected(country) {
        this.setState({
            country
        });
    }
    render() {
        return (
            <FrameContext.Provider value={{
                country: this.state.country,
                onCountrySelected: this.onCountrySelected
            }}>
                <this.props.view {...this.props} {...this.state} />
            </FrameContext.Provider>
        );
    }
}
