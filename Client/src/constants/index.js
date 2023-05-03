//import svgs for name from assets folder
import { createCampaign, dashboard, logout, payment, profile, withdraw } from '../assets';


export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/dashboard',
  },
  {
    name: 'maps',
    imgUrl: createCampaign,
    link: '/dashboard/maps',
  },
  {
    name: 'transaction',
    imgUrl: payment,
    link: '/dashboard/transaction',
    // disabled: true,
  },
  // {
  //   name: 'withdraw',
  //   imgUrl: withdraw,
  //   link: '/',
  //   // disabled: true,
  // },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/dashboard/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/logout',
    // disabled: true,
  }
];
