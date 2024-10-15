import React from "react";
import Image from "next/image";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-base lg:text-xl font-medium text-gray-500 uppercase">
       Коллектив
      </p>
      <p className="text-3xl lg:text-5xl font-semibold text-gray-500  mt-3">
      Наши учителя
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-16 py-10 lg:py-20">
        <div className="flex flex-col gap-5 ">
          <Image src="/assets/t1.jpg" alt="v1" width="400" height="500"/>
          <p className="text-2xl font-semibold">Алексей Трошев</p>
          <div className="flex items-center gap-2">
            <img src="/assets/italy.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          Italian teacher
          </p>
          </div>

        </div>
        <div className="flex flex-col gap-5 ">
          <Image src="/assets/t2.jpg" alt="v1" width="400" height="500"/>
          <p className="text-2xl font-semibold">Ирина Колесникова</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">
            Spanish teacher
          </p>
          </div>

        </div>
        <div className="flex flex-col gap-5 ">
          <Image src="/assets/t3.jpg" alt="v1" width="400" height="500"/>
          <p className="text-2xl font-semibold">Егор Протасов</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          English teacher
          </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Teacher;
