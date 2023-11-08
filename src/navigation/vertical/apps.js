/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
// ** Icons Import
import inspection from "../../Admin/assests/side_icon/inspection_forms.svg";
import Logout from "../../Admin/assests/side_icon/logout.svg";
import subscriptions from "../../Admin/assests/side_icon/subscriptions_icon.svg";
import Payements from "../../Admin/assests/side_icon/payments.svg";
import Tutorials from "../../Admin/assests/side_icon/tutorials.svg";
import client from "../../Admin/assests/side_icon/client_icon.svg";
import { Circle, User, LogOut, Video } from "react-feather";
import Clients from "../../Admin/Pages/Clients";


const iconsize = {
  width: '20px',
  height: '20px',
  marginRight: '1.1rem',

};

export default [
  // {
  //   header: 'Apps & Pages'
  // },
  //------------------------------------------
  // {
  //   id: 'orders',
  //   title: 'Orders',
  //   icon: <FileText size={20} />,
  //   children: [
  //     {
  //       id: 'pendingOrders',
  //       title: 'Pending Orders',
  //       icon: <Circle size={12} />,
  //       navLink: '/orders/pending-orders'
  //     },
  //     {
  //       id: 'completeOrders',
  //       title: 'Complete Orders',
  //       icon: <Circle size={12} />,
  //       navLink: '/orders/complete-orders'
  //     },
  //     {
  //       id: 'cancelOrders',
  //       title: 'Cancel Orders',
  //       icon: <Circle size={12} />,
  //       navLink: '/orders/cancel-orders'
  //     },
  //     {
  //       id: 'acceptOrders',
  //       title: 'Acceped Orders',
  //       icon: <Circle size={12} />,
  //       navLink: '/orders/accept-orders'
  //     },
  //     {
  //       id: 'allOrders',
  //       title: 'All Orders',
  //       icon: <Circle size={12} />,
  //       navLink: '/orders/all-orders'
  //     },
  //   ]
  // },
  // {
  //   id: 'services',
  //   title: 'Services',
  //   icon: <Settings size={20} />,
  //   children: [
  //     {
  //       id: 'create service',
  //       title: 'Create Service',
  //       icon: <Circle size={18} />,
  //       navLink: '/services/create-service'
  //     },
  //     {
  //       id: 'serviceList',
  //       title: 'Service List',
  //       icon: <Circle size={18} />,
  //       navLink: '/services/service-list'
  //     },
  //   ]
  // },
  // {
  //   id: 'BarChart',
  //   title: 'Chart',
  //   icon: <Settings size={20} />,
  //   children: [
  //     {
  //       id: 'create service',
  //       title: 'Create Service',
  //       icon: <Circle size={18} />,
  //       navLink: '/services/create-service'
  //     },
  //     {
  //       id: 'serviceList',
  //       title: 'Service List',
  //       icon: <Circle size={18} />,
  //       navLink: '/services/service-list'
  //     },
  //   ]
  // },
  // {
  //   id: 'employees',
  //   title: 'Employees',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'createEmployees',
  //       title: 'Create Employees',
  //       icon: <Circle size={18} />,
  //       navLink: '/employee/create-employee'
  //     },
  //     {
  //       id: 'employeeList',
  //       title: 'Employee List',
  //       icon: <Circle size={18} />,
  //       navLink: '/employee/employee-list'
  //     },
  //   ]
  // },
  // {
  //   id: 'availability',
  //   title: 'Availability',
  //   icon: <CheckCircle size={20} />,
  //   children: [
  //     {
  //       id: 'setAvailability',
  //       title: 'Set Availability',
  //       icon: <Circle size={18} />,
  //       navLink: '/availability/set-availability'
  //     },
  //     {
  //       id: 'availabilityList',
  //       title: 'Availability List',
  //       icon: <Circle size={18} />,
  //       navLink: '/availability/availability-list'
  //     },
  //   ]
  // },
  // {
  //   id: 'services',
  //   title: 'Services',
  //   icon: <Box size={20} />,
  //   children: [
  //     {
  //       id: 'main_sevices',
  //       title: 'Main Services',
  //       icon: <Circle size={12} />,
  //       navLink: '/services/main-service'
  //     },
  //     {
  //       id: 'sub_sevices',
  //       title: 'Sub Sevices',
  //       icon: <Circle size={12} />,
  //       navLink: '/services/sub-service'
  //     },

  //   ]
  // },
  // {
  //   id: 'users',
  //   title: 'Users',
  //   type: 'item',
  //   icon: <User size={20} />,
  //   badge: 'primary',
  //   // badgeText: "new",
  //   // permissions: ['admin', 'editor'],
  //   navLink: '/user-detail'
  // },
  // {
  //   id: 'Orders',
  //   title: 'Orders',
  //   type: 'item',
  //   icon: <Users size={22} />,
  //   badge: 'primary',
  //   // badgeText: "new",
  //   // permissions: ['admin', 'editor'],
  //   navLink: '/total-order'
  // },
  // {
  //   id: 'Boxes',
  //   title: 'Boxes',
  //   type: 'item',
  //   icon: <Box size={20} />,
  //   badge: 'primary',
  //   // badgeText: "new",
  //   // permissions: ['admin', 'editor'],
  //   navLink: '/boxes'
  // },
  // {
  //     id: 'AssignParcels',
  //     title: 'Assign Parcels',
  //     type: 'item',
  //     icon: <Briefcase size={20} />,
  //     // badge: 'primary',
  //     // badgeText: "new",
  //     permissions: ['admin', 'editor'],
  //     navLink: '/data-list/assignParcel-list'
  //   }
  //   //------------------------------------------
  // ,
  //   {
  //     id: 'email',
  //     title: 'Email',
  //     icon: <Mail size={20} />,
  //     navLink: '/apps/email'
  //   },
  //   {
  //     id: 'chat',
  //     title: 'Chat',
  //     icon: <MessageSquare size={20} />,
  //     navLink: '/apps/chat'
  //   },
  //   {
  //     id: 'todo',
  //     title: 'Todo',
  //     icon: <CheckSquare size={20} />,
  //     navLink: '/apps/todo'
  //   },
  //   {
  //     id: 'calendar',
  //     title: 'Calendar',
  //     icon: <Calendar size={20} />,
  //     navLink: '/apps/calendar'
  //   },

  //   {
  //     id: 'roles-permissions',
  //     title: 'Roles & Permissions',
  //     icon: <Shield size={20} />,
  //     children: [
  //       {
  //         id: 'roles',
  //         title: 'Roles',
  //         icon: <Circle size={12} />,
  //         navLink: '/apps/roles'
  //       },
  //       {
  //         id: 'permissions',
  //         title: 'Permissions',
  //         icon: <Circle size={12} />,
  //         navLink: '/apps/permissions'
  //       }
  //     ]
  //   },
  // {
  //   id: 'eCommerce',
  //   title: 'eCommerce',
  //   icon: <ShoppingCart size={20} />,
  //   children: [
  //     {
  //       id: 'shop',
  //       title: 'Shop',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/shop'
  //     },
  //     {
  //       id: 'detail',
  //       title: 'Details',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/product-detail'
  //     },
  //     {
  //       id: 'wishList',
  //       title: 'Wish List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/wishlist'
  //     },
  //     {
  //       id: 'checkout',
  //       title: 'Checkout',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/ecommerce/checkout'
  //     }
  //   ]
  // },
  // {
  //   id: 'users',
  //   title: 'User',
  //   icon: <User size={20} />,
  //   children: [
  //     {
  //       id: 'list',
  //       title: 'List',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/user/list'
  //     },
  //     {
  //       id: 'view',
  //       title: 'View',
  //       icon: <Circle size={12} />,
  //       navLink: '/apps/user/view'
  //     }
  //   ]
  // },
  //   {
  //     title: 'Clients',
  //     icon: <Circle size={12} />,
  //     navLink: '/orders/pending-orders'
  //   }
  {
    title: "Clients",
    icon: <img style={iconsize} src={client} alt="" />,
    navLink: "/Clients",
  },
  {
    title: "Subscriptions",
    icon: <img style={iconsize} src={subscriptions} alt="" />,
    navLink: "/Subscriptions",
  },
  {
    title: "InspectionForm",
    icon: <img style={iconsize} src={inspection} alt="" />,
    navLink: "/InspectionForm",
  },
  {
    title: "Payements",
    icon: <img style={iconsize} src={Payements} alt="" />,
    navLink: "/Payements",
  },
  
  {
    title: "Tutorials",
    icon: <img style={iconsize} src={Tutorials} alt="" />,
    navLink: "/Tutorials",
  },
  {
    title: "LogOut",
    icon: <img style={iconsize} src={Logout} alt="" />,
    navLink: "/Logout",
  },
];
