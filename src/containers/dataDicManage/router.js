export default function(LoadableWrap){
    return [
        {
            name: 'dataDicManage',
            path: '/dataDicManage',
            exact: false,
            component: LoadableWrap({
                loader: () => import('./index')
            })
        }
    ]
}