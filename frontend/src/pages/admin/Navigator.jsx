import React, { useState } from 'react';
import ADashboard from './Dashboard';
import { Link, Outlet } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineTags,
  AiOutlineOrderedList,
  AiOutlineComment,
  AiOutlineMessage,
  AiOutlineDollarCircle,
  AiOutlineBell,
  AiOutlineSearch,
} from 'react-icons/ai';
import { TbLogout } from "react-icons/tb";
import { LuShapes } from "react-icons/lu";
// Import ikon khusus
import { FaUser, FaBell } from "react-icons/fa";
import dashboardGrey from '../../assets/icons/dashboard-grey.png';
import dashboardBlue from '../../assets/icons/dashboard-blue.png';
import UnifyIcon from '../../assets/icons/logo_univy.svg';

import { FiSearch } from 'react-icons/fi';
import ACustomer from './Customer';
import AEditCustomer from './CustomerEdit';
import AProduct from './Product';
import ACategory from './Category';
import AProductadd from './Productadd';
import ProductEdit from './ProductEdit';

const ANavi = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [activeItem, setActiveItem] = useState('Dashboard'); // State untuk item aktif
  const handleLogout = () => {
    enqueueSnackbar('Logout', { variant: 'error' });
    localStorage.removeItem('token');
  }

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: dashboardGrey, activeIcon: dashboardBlue },
    { name: 'Customers', path: '/admin/customers', icon: <AiOutlineUser />, activeIcon: <AiOutlineUser className="text-blue-800" /> },
    { name: 'Products', path: '/admin/products', icon: <AiOutlineShoppingCart />, activeIcon: <AiOutlineShoppingCart className="text-blue-800" /> },
    { name: 'Kategori', path: '/admin/category', icon: <AiOutlineTags />, activeIcon: <AiOutlineTags className="text-blue-800" /> },
    { name: 'Orders', path: '/admin/orders', icon: <AiOutlineOrderedList />, activeIcon: <AiOutlineOrderedList className="text-blue-800" /> },
    { name: 'Reviews', path: '/admin/reviews', icon: <AiOutlineComment />, activeIcon: <AiOutlineComment className="text-blue-800" /> },
    { name: 'Messages', path: '/admin/messages', icon: <AiOutlineMessage />, activeIcon: <AiOutlineMessage className="text-blue-800" /> },
    { name: 'Profit', path: '/admin/profit', icon: <AiOutlineDollarCircle />, activeIcon: <AiOutlineDollarCircle className="text-blue-800" /> },
  ];


  return (
    <div className="flex min-h-screen max-h-screen">
      {/* Sidebar */}
      <aside className="w-56 font-poppins bg-white shadow-lg flex flex-col justify-between">
        <div>
          {/* Logo */}
          <div className="mx-6 text-xl font-bold text-blue-500 flex items-center">
            <img src={UnifyIcon} alt="Unify Logo" className="w-16" />
          </div>

          {/* Navigation */}
          <nav className="mx-4">
            <ul className="space-y-2 font-poppins font-semibold text-gray-400">
                {menuItems.map((item) => (
                  <Link to={item.path}>
                  <li to
                    key={item.name}
                    className={`px-6 py-2 my-2  flex items-center space-x-3 cursor-pointer ${activeItem === item.name ? 'bg-blue-100 rounded-lg text-blue-800' : 'hover:bg-gray-200 rounded-lg'
                      }`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    {item.name === 'Dashboard' ? (
                      <img
                        src={activeItem === 'Dashboard' ? item.activeIcon : item.icon}
                        alt={item.name}
                        className="w-6 h-6"
                      />
                    ) : (
                      activeItem === item.name ? item.activeIcon : item.icon
                    )}
                    <span>{item.name}</span>
                  </li>
                  </Link>
                ))}
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <Link to="/login">
            <button 
            onClick={handleLogout}
            className="w-full p-3 font-poppins text-red-500 rounded-md flex items-center justify-center space-x-2">
              <TbLogout />
              <span className="font-poppins font-semibold">Logout</span>
            </button>
          </Link>
        </div>
      </aside>

      {/* Navbar */}
      <div className="flex-grow max-h-screen">
        <nav className="bg-white shadow-md p-4 flex items-center justify-between">
          {/* Search Box */}
          <div className=" 
          
              hidden lg:flex items-center w-full bg-transparent border-2  border-gray-100 focus-within  :border-blue-500 rounded-md px-2 py-1 space-x-6 mr-6">
            <FiSearch className="text-gray-500 w-6 h-6" />
            <input

              type="text"
              placeholder="Search Products"
              className="bg-transparent focus:outline-none flex-grow text-gray-700 font-poppins ml-2"
            />

          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <FaBell className="text-black text-2xl cursor-pointer hover:text-blue-500" />
            <FaUser className="text-black text-2xl cursor-pointer hover:text-blue-500" />
          </div>
        </nav>

        {/* Content */}
        <div className="flex max-h-screen">
          <div className="flex-grow bg-gray-100 p-6 overflow-auto scrollbar-hide">
          <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ANavi;  