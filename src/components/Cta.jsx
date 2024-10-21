import React from "react";
import Image from "next/image";
import micImage from "/public/images/microphone.png";

const Cta = () => {
  return (
    <div className="mx-auto px-4 py-16 my-10 sm:px-6 lg:px-8 rounded-3xl">
      <div className="flex mx-auto max-w-7xl">
        <div className="block w-1/2 py-5">
          <Image className="w-full" src={micImage} alt="violin" />
        </div>
        <div className="bg-gray-300 w-1/2 p-4 rounded-3xl">
          <h1 className="text-center text-2xl font-bold text-yellow-300 sm:text-3xl">
            Получи бесплатный урок игры уже сегодня!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Начни воплощать свои музыкальные мечты в жизнь с нашей школой
          </p>

          <form
            action="#"
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <div>
              <form className="max-w-sm mx-auto">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Выберите инструмент
                </label>
                <select
                  id="tool"
                  className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option>Выберите инструмент</option>
                  <option>скрипка</option>
                  <option>гитара</option>
                  <option>флейта</option>
                  <option>баян</option>
                </select>
              </form>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm hover:px-3"
                  placeholder="Введите email"
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-guitarBlue-500 hover:bg-guitarBlue-800 px-5 py-3 text-sm font-medium text-white"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cta;
