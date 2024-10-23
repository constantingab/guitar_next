import React from "react";
import ExportedImage from "next-image-export-optimizer";
import heroImage from "/public/images/violin.jpg";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <ExportedImage
                src={heroImage}
                alt="hero image"
                fill
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="-z-10 relative flex items-center bg-gray-100">
            <span className=" hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">ШКОЛА ОБУЧЕНИЯ</h2>
              <p>игры на музыкальных инструментах</p>

              <p className="mt-4 text-gray-600 text-justify">
                Мечтаете овладеть музыкальным инструментом? Это удивительное
                путешествие начинается с момента, когда вы впервые берете его в
                руки и чувствуете, как он оживает под вашими пальцами. Музыка
                дарит непередаваемую радость и удовлетворение — эмоции, которые
                испытывают все, кто начинает свой путь в мире звуков. Скрипка,
                фортепиано, гитара — выбор огромен! У нас вы сможете найти тот
                инструмент, звучание которого вам ближе всего и вызывает
                вдохновение. Не каждый сможет стать выдающимся профессионалом,
                но каждый может развить свои способности. Главное — это упорство
                и любовь к музыке. Начните свой путь к самовыражению уже
                сегодня!
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Записаться
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
