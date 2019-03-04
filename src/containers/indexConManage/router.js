export default function(LoadableWrap){
    return [
        {
            name: 'indexConManage',
            path: '/indexConManage',
            exact: false,
            component: LoadableWrap({
                loader: () => import('./index')
            })
        }
    ]
}