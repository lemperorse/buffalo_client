
const getView = function(page){
    return () => import(`@/views/admin/${page}.vue`)
}

const adminRouter = [
    {
        path: 'profile',
        name: 'profile', 
        component: []
      }
]

module.exports = {
    adminRouter
}