"use client";

import Image from "next/image";
import logo from "/public/images/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex w-full py-5 items-center bg-gradient-to-tr from-gray-900 via-gray-700 to-gray-900">
      <div className="container mx-auto">
        <div className="relative flex items-center justify-between">
          <div className="w-24 max-w-full px-4">
            <a href="/" className="block w-full py-5">
              <Image
                className="w-full motion-safe:hover:scale-105"
                src={logo}
                alt="logo"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <div className="right-4 top-full z-10 w-full max-w-[250px] rounded-lg px-6 py-5 shadow hidden lg:block lg:static lg:w-full lg:max-w-full lg:shadow-none">
                <ul className="block lg:flex">
                  <li>
                    <a
                      href="/"
                      className="flex py-2 text-base font-medium uppercase underline-offset-8 lg:ml-12 lg:inline-flex text-guitarGray-100 hover:text-white hover:underline"
                    >
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex py-2 text-base font-medium uppercase underline-offset-8 lg:ml-12 lg:inline-flex text-guitarGray-100 hover:text-white hover:underline"
                    >
                      Цены
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex py-2 text-base font-medium uppercase underline-offset-8 lg:ml-12 lg:inline-flex text-guitarGray-100 hover:text-white hover:underline"
                    >
                      О нас
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="flex py-2 text-base font-medium uppercase underline-offset-8 lg:ml-12 lg:inline-flex text-guitarGray-100 hover:text-white hover:underline"
                    >
                      Контакты
                    </a>
                  </li>
                </ul>
              </div>
              <button
                onClick={onToggleMenu}
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <RxHamburgerMenu
                  name="menu"
                  className="text-4xl text-nalovlu-900 cursor-pointer"
                />
                {isOpen}
              </button>

              {isOpen && (
                <nav className="absolute right-4 top-full z-10 w-full max-w-[250px] rounded-lg bg-green-200 px-6 py-5 shadow lg:hidden lg:static lg:w-full lg:max-w-full lg:shadow-none">
                  <ul className="block lg:flex">
                    <li>
                      <a
                        href="/"
                        className="flex py-2 text-base font-medium lg:ml-12 lg:inline-flex text-gray-700 hover:text-gray-900"
                      >
                        Услуги
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex py-2 text-base font-medium lg:ml-12 lg:inline-flex  text-gray-700 hover:text-gray-900"
                      >
                        Цены
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex py-2 text-base font-medium lg:ml-12 lg:inline-flex text-gray-700 hover:text-gray-900"
                      >
                        О нас
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="flex py-2 text-base font-medium lg:ml-12 lg:inline-flex text-gray-700 hover:text-gray-900"
                      >
                        Контакты
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
