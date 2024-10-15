import React from "react";
import Image from "next/image";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Лучшие студенты
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Отзывы наших студентов
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <Image src="/assets/student.jpg" alt="" width="400" height="500" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
            Александр Полянов
          </p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">Программист</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            Давно мечтал научится играть на гитаре. Смотрел ролики на ютубе,
            пытался научиться сам, но прогресс был минимальным. Со школой игры
            "MUSIQA" буквально за месяц я продвинулся в игре, как не продвигался
            за 6 месяцев самостоятельного обучения. Спасибо Вашей школе!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
