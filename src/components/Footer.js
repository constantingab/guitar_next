import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { GiGuitarHead } from "react-icons/gi";

const Footer = () => {
  return (
    <div className="container mx-auto my-10">
      <div className="bg-[#f8fafe] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-10 px-10 py-10 rounded-3xl items-center justify-center ">
        <div className="flex flex-col items-center lg:items-start gap-5">
          <div className="flex items-center">
            <GiGuitarHead className="text-4xl pr-3 text-yellow-400"/>
            <h1 className="">MUSIQA</h1>
          </div>
          <p className="text-center lg:text-start">
            ул Ленина, 26, г. Москва, Тел: +7 (916) 562-25-58
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Компания</p>
          <p className="text-base">Карьера</p>
          <p className="text-base">Учителя</p>
          <p className="text-base">Поддержка</p>
          <p className="text-base">Контакты</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Услуги</p>
          <p className="text-base">Курсы</p>
          <p className="text-base">Цена</p>
          <p className="text-base">Блог</p>
        </div>
        <div className="flex flex-col items-center lg:items-start gap-5">
          <p className="text-xl font-medium">Legal</p>
          <p className="text-base">Условия и положения</p>
          <p className="text-base">Политика Политика конфиденциальности</p>
        </div>
        <div className="flex items-center gap-5">
          <BsFacebook className="text-3xl text-gray-500" />
          <BsTwitter className="text-3xl text-gray-500" />
          <BsInstagram className="text-3xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
