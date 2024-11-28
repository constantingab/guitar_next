import React from "react";

const Cta = () => {
  return (
    <div className="flex mx-auto px-4 py-16 my-10 sm:px-6 lg:px-8 rounded-3xl justify-center">
      <div id="cta" className="max-w-5xl px-16 py-36 bg-gradient-to-tr from-gray-700 to-gray-900 rounded-3xl">
        <h1 className="text-center text-2xl pb-10 font-bold text-yellow-300 sm:text-3xl">
          Получи бесплатный урок игры уже сегодня!
        </h1>
        <div className="flex mx-auto max-w-7xl justify-center">
          <div className="bg-gradient-to-tr from-white to-gray-50 p-4 rounded-3xl">
            <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
              Начни воплощать свои музыкальные мечты в жизнь с нашей школой
            </p>

            <form
              action="#"
              className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            >
              <div>
                <div className="w-full mx-auto">
                  <select
                    id="tool"
                    className="mb-3 bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option>Выберите инструмент</option>
                    <option>скрипка</option>
                    <option>гитара</option>
                    <option>флейта</option>
                    <option>баян</option>
                  </select>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    className="w-full bg-gray-300 rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm hover:px-3"
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
                className="block w-full transition rounded-lg bg-gray-700 hover:bg-gray-500 px-5 py-3 text-sm font-medium text-white"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
