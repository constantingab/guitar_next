import React from "react";

const Values = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 text-center">
        Почему мы?
      </p>
      <p className=" text-3xl lg:text-5xl font-semibold text-gray-500 text-center mt-3">
        Наши преимущества
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-20">
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Speaking clubs</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just get <br /> a
            lot of positive emotions!
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Quality control</p>
          <p className="text-gray-500 text-center">
            Очень много практики <br /> Теория закрепляется практикой <br /> очень много позитивных эмоций
          </p>
        </div> <div className="flex flex-col gap-5 items-center">
          <img src="/assets/v3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Анализ Вашего прогресса</p>
          <p className="text-gray-500 text-center">
            In our school you will practice <br /> your speaking skills and just get <br /> a
            lot of positive emotions!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Values;
