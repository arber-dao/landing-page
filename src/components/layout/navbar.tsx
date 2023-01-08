import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "@/assets/images/logo.png";
import ThemeSwitch from "@/components/common/themeSwitch";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "Learn", href: "#", current: false },
  { name: "Help", href: "#", current: false },
  { name: "Docs", href: "#", current: false },
];

const Navbar: React.FC = () => {
  return (
    <Disclosure
      as="nav"
      className="bg-white dark:bg-gray-900 fixed w-screen shadow-md z-10"
    >
      {({ open }) => (
        <>
          <div className="mx-auto container">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white z-50">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-shrink-0 items-center justify-center sm:justify-start absolute w-full sm:w-min">
                <img
                  className="block h-12 w-auto"
                  src={logo}
                  alt="Your Company"
                />
                <div className="font-bold dark:text-white text-3xl mb-1 ml-1 tracking-wider">
                  arber
                </div>
              </div>
              <div className="flex flex-1 items-center sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={`${
                          item.current
                            ? "bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white"
                            : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white"
                        }
                          px-3 py-2 rounded-md text-sm font-medium`}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                    <ThemeSwitch />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${
                    item.current
                      ? "bg-gray-300 dark:bg-gray-800 text-gray-800 dark:text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-white"
                  }
                    block px-3 py-2 rounded-md text-base font-medium`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
