export default function(LoadableWrap){
    return [
        {
            name: 'contentManage',
            path: '/contentManage',
            exact: false,
            component: LoadableWrap({
                loader: () => import('./index')
            })
        }
    ]
}