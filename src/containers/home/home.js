import styles from './style.scss';
import React from 'react';

import Center from './center/Center';

export default function(props) {
    const { userInfo, setSelectedCountry, country } = props;
    return (
        <div className="home">
            <div className="center">
                <h2 className={styles.blue}>kdjfksjd</h2>
                <Center userInfo={userInfo} setSelectedCountry={setSelectedCountry} country={country} />
            </div>
        </div>
    );
}