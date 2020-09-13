
const getView = function(page){
    return () => import(`@/views/user/${page}.vue`)
}


const userRouter = [
    {
        path: 'profile',
        name: 'profile', 
        component: getView('Profile')
      }
]

module.exports = {
    userRouter
}