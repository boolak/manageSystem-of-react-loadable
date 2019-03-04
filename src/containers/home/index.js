import React from 'react';
import Home from './home';
// import { getPatentIndustry, getRecruitIndustry, getToday, getPatentRank, getRecruitRank } from './service';

import FrameContext from '../frame/context';

export default function(props) {
    return (
        <FrameContext.Consumer>
            {
                context => {
                    return <Home
                        {...props}
                        setSelectedCountry={context.onCountrySelected}
                        country={context.country}
                    />;
                }
            }
        </FrameContext.Consumer>
    );
}