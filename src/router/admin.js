
const getView = function(page){
    return () => import(`@/views/admin/${page}.vue`)
}

const adminRouter = [
    {
        path: 'home',
        name: 'admin-home', 
        component: getView('Home')
    },
    {
        path: 'profile',
        name: 'admin-profile', 
        component: getView('Profile')
    },
    {
        path: 'allfarmer',
        name: 'admin-allfarmer', 
        component: getView('Allfarmer')
    },
    {
        path: 'farmer',
        name: 'admin-farmer', 
        component: getView('Farmerdetail')
    },
    {
        path: 'buffalo',
        name: 'admin-buffalo', 
        component: getView('Buffalo')
    },
    {
        path: 'alladmin',
        name: 'admin-alladmin', 
        component: getView('Alladmin')
    },
    {
        path: 'resetpass',
        name: 'admin-resetpass', 
        component: getView('Resetpass')
    },
    {
        path: 'reportbuffalo',
        name: 'admin-reportbuffalo', 
        component: getView('Reportbuffalo')
    },
    {
        path: 'reportmap',
        name: 'admin-reportmap', 
        component: getView('Reportmap')
    },
    {
        path: 'reportsystem',
        name: 'admin-reportsystem', 
        component: getView('Reportsystem')
    },
    {
        path: 'export',
        name: 'admin-export', 
        component: getView('Export')
    },
    {
        path: 'addadmin',
        name: 'addadmin', 
        component: getView('Addadmin')
    },
    {
        path: 'editadmin',
        name: 'editadmin', 
        component: getView('Admindetail')
    },
    {
        path: 'addfarmer',
        name: 'addfarmer', 
        component: getView('Addfarmer')
    },
    {
        path: 'addbuffalo',
        name: 'addbuffalo', 
        component: getView('Addbuffalo')
    },
    {
        path: 'addage',
        name: 'addage', 
        component: getView('Addage')
    },


]

module.exports = {
    adminRouter
}