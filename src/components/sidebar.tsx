'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '../../public/Logo.png';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import {
  faBorderAll,
  faLayerGroup,
  faTimeline,
  faMagnifyingGlass,
  faRightFromBracket,
  faGear,
  faUser,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const sidebarItems = [
    {
      label: 'Search CV',
      href: '../',
      icon: <FontAwesomeIcon icon={faBorderAll} className="h-6" />,
    },
    {
      label: 'Shortlist',
      href: '/pages/shortlist',
      icon: <FontAwesomeIcon icon={faLayerGroup} className="h-6" />,
    },
    {
      label: 'Transaction History',
      href: '/pages/transactionHistory',
      icon: <FontAwesomeIcon icon={faTimeline} className="h-5" />,
    },
    {
      label: 'Search History',
      href: '/pages/searchHistory',
      icon: <FontAwesomeIcon icon={faMagnifyingGlass} className="h-6" />,
    },
    {
      label: 'Profile',
      href: '/pages/profile',
      icon: <FontAwesomeIcon icon={faUser} className="h-6" />,
    },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 min-h-screen w-64  lg:w-64 sm:w-48 bg-white flex flex-col py-6  items-center transform transition-transform duration-300 z-50 ${
          isOpen ? 'translate-x-0' : '-translate-x-full '
        } md:translate-x-0 md:relative`}
        onTransitionEnd={() => !isOpen && setIsOpen(false)}
      >
        <Image src={Logo} alt="Logo" className="pb-8 px-4" />
        <ul className="flex flex-col gap-12 flex-1 relative px-4">
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex justify-between h-12 ">
              <li
                className={`flex gap-4 py-1 px-2 hover:text-blue-600 ${
                  pathname === item.href ? 'text-blue-600' : ''
                }`}
              >
                {item.icon}
                <Link href={item.href}>{item.label}</Link>
              </li>
              <div
                className={`${
                  pathname === item.href
                    ? 'bg-blue-600 w-2 absolute right-0 h-12 rounded-lg'
                    : 'hidden'
                }`}
              ></div>
            </div>
          ))}
          <li className={`flex gap-6 hover:text-blue-600 py-1 px-2 mt-auto`}>
            <FontAwesomeIcon icon={faGear} className="h-6" />
            <Link href="/pages/settings">Settings</Link>
          </li>
          <li className={`flex gap-6 hover:text-blue-600 py-1 px-2`}>
            <FontAwesomeIcon icon={faRightFromBracket} className="h-6" />
            <Link href="/pages/signOut">Signout</Link>
          </li>
        </ul>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div className="fixed top-0 left-0 ml-4 mt-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden bg-blue-600 text-white p-2 rounded"
        >
          <FontAwesomeIcon icon={faBars} className="h-6" />
        </button>
      </div>
    </>
  );
}
