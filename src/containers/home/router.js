import React from 'react';

export default function(LoadableWrap){
    return [
        {
            name: 'home',
            path: '/',
            exact: true,
            component: LoadableWrap({
                loader: () => import('./index')
            })
        }
    ]
}