
const getView = function(page){
    return () => import(`@/views/user/${page}.vue`)
}


const userRouter = [
    {
        path: 'home',
        name: 'home', 
        component: getView('Home')
    },
    {
        path: 'profile',
        name: 'profile', 
        component: getView('Profile')
    },
    {
        path: 'allbuffalo',
        name: 'allbuffalo', 
        component: getView('Allbuffalo')
    },
    {
        path: 'buffalo',
        name: 'buffalo', 
        component: getView('Buffalo')
    },
    {
        path: 'addbuffalo',
        name: 'addbuffalo', 
        component: getView('Addbuffalo')
    },
    {
        path: 'reportsummary',
        name: 'reportsummary', 
        component: getView('Reportsummary')
    },
    {
        path: 'reportgrow',
        name: 'reportgrow', 
        component: getView('Reportgrow')
    }
]

module.exports = {
    userRouter
}