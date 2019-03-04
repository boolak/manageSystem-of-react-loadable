export default function(LoadableWrap){
    return [
        {
            name: 'roleManage',
            path: '/roleManage',
            exact: false,
            component: LoadableWrap({
                loader: () => import('./index')
            })
        }
    ]
}