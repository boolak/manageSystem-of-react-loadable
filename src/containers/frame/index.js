import React from 'react';
import Model from './model';
import View from './view';

export default function(props) {
    return <Model {...props} view={View} />;
}
