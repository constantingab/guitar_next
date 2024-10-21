import React from "react";

const Statistics = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Наши достижения
        </h2>

        <p className="mt-4 text-gray-500 sm:text-xl">
          Любителями и знатоками музыки не рождаются, а становятся... Чтобы
          полюбить музыку, надо прежде всего ее слушать». Дмитрий Шостакович.
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Лет Опыта
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            10
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-gray-200 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Обучившихся
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            180+
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Преподавателей
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            30
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">
            Онлайн уроков
          </dt>

          <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
            6000+
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Statistics;
