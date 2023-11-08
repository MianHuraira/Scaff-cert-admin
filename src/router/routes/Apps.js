// ** React Imports
import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  // ----------------------------------------------------------
  {
    path: '/dashboard',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/dashboard/dashboard'))
  }, 
  {
    path: '/clients',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/Pages/Clients'))
  }, 
  {
    path: '/inspectionForm',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/Pages/InspectionForm'))
  },
  {
    path: '/Payements',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/Pages/Payements'))
  },
  {
    path: '/Subscriptions',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/Pages/Subscriptions'))
  },
  {
    path: '/Tutorials',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/Pages/Tutorials'))
  },
  {
    path: '/user-detail',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/user/Userpage'))
  },
  {
    path: '/orders/pending-orders',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/orders/pending_orders'))
  },
  {
    path: '/orders/complete-orders',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/orders/complete_orders'))
  },
  {
    path: '/orders/cancel-orders',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/orders/cancel_orders'))
  },
  {
    path: '/orders/accept-orders',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/orders/accept_orders'))
  },
  {
    path: '/orders/all-orders',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/orders/all_orders'))
  },
  {
    path: '/services/create-service',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/services/CreateSeervice'))
  },
  {
    path: '/services/service-list',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/services/ServiceList'))
  },

  // Employees routes
  {
    path: '/employee/create-employee',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/employee/CreateEmployee'))
  },
  {
    path: '/employee/employee-list',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/employee/EmployeeList'))
  },

  // Availibility Routes
  {
    path: '/availability/set-availability',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/Availability/SetAvailability'))
  },
  {
    path: '/availability/availability-list',
    exact: true,
    // appLayout: true,
    // className: 'email-application',
    component: lazy(() => import('../../Admin/Availability/AvailabilityList'))
  },

  {
    path: '/data-list/rider-list',
    exact: true,
    // appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/ui-elements/data-list/RiderList'))
  },
  {
    path: '/data-list/parcel-list',
    exact: true,
    // appLayout: true,
    className: 'email-application',
    component: lazy(() =>
      import('../../views/ui-elements/data-list/ParcelList')
    )
  },
  {
    path: '/data-list/assignParcel-list',
    exact: true,
    // appLayout: true,
    className: 'email-application',
    component: lazy(() =>
      import('../../views/ui-elements/data-list/AssignParcel')
    )
  },
  // ----------------------------------------------------------
  {
    path: '/apps/email',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email'))
  },
  {
    path: '/apps/email/:folder',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/label/:label',
    exact: true,
    appLayout: true,
    className: 'email-application',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/email/:filter',
    component: lazy(() => import('../../views/apps/email')),
    meta: {
      navLink: '/apps/email'
    }
  },
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/todo',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/todo/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/todo/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/todo'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/ecommerce/shop',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/shop'))
  },
  {
    path: '/apps/ecommerce/wishlist',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/wishlist'))
  },
  {
    path: '/apps/ecommerce/product-detail',
    exact: true,
    className: 'ecommerce-application',
    component: () => (
      <Redirect to='/apps/ecommerce/product-detail/apple-i-phone-11-64-gb-black-26' />
    )
  },
  {
    path: '/apps/ecommerce/product-detail/:product',
    exact: true,
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/detail')),
    meta: {
      navLink: '/apps/ecommerce/product-detail'
    }
  },
  {
    path: '/apps/ecommerce/checkout',
    className: 'ecommerce-application',
    component: lazy(() => import('../../views/apps/ecommerce/checkout'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  {
    path: '/apps/roles',
    component: lazy(() => import('../../views/apps/roles-permissions/roles'))
  },
  {
    path: '/apps/permissions',
    component: lazy(() =>
      import('../../views/apps/roles-permissions/permissions')
    )
  }
]

export default AppRoutes
