import './style.scss';
import React from 'react';

import Center from './center/Center';

export default function(props) {
    const { userInfo, setSelectedCountry, country } = props;
    return (
        <div className="home">
            <div className="center">
                <Center userInfo={userInfo} setSelectedCountry={setSelectedCountry} country={country} />
            </div>
        </div>
    );
}