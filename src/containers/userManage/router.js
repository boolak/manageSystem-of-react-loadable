
export default function(LoadableWrap){
    return [
        {
            name: 'userManage',
            path: '/userManage',
            exact: false,
            component: LoadableWrap({
                loader: () => import('./index')
            })
        }
    ]
}