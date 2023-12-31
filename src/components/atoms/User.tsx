import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { FaUserLock } from 'react-icons/fa';
import { CiUser } from 'react-icons/ci';
export default function User() {
  const isLoggedIn = false;

  const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ];

  const signup = [
    { href: '/register', label: 'Register', icon: <FaUserLock /> },
    { href: '/login', label: 'Login', icon: <CiUser /> },
  ];
  return (
    <div className='text-right'>
      <Menu
        as='div'
        className='relative inline-block text-left'
      >
        <div>
          <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-500 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75'>
            <span className="text-[1.3rem]">{!isLoggedIn ? <CiUser /> : ''}</span>
            <ChevronDownIcon
              className='-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100'
              aria-hidden='true'
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none'>
            <div className='px-1 py-1 '>
              {isLoggedIn
                ? links.map((link, i) => (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <Link
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-[1.25rem]`}
                          href={link.href}
                        >
                          {/* <span>{link.icon}</span> */}
                          {link.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))
                : signup.map((link, i) => (
                    <Menu.Item key={i}>
                      {({ active }) => (
                        <Link
                          className={`${
                            active
                              ? 'bg-violet-500 text-white'
                              : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-[1rem] gap-4`}
                          href={link.href}
                        >
                          <span>{link.icon}</span>
                          {link.label}
                        </Link>
                      )}
                    </Menu.Item>
                  ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
