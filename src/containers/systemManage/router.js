export default function(LoadableWrap){
    return [
        {
            name: 'systemManage',
            path: '/systemManage',
            exact: false,
            component: LoadableWrap({
                loader: () => import('./index')
            })
        }
    ]
}