import React from 'react'

const Navbar = () => {
  return (
    <div className=''>
        <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
            <img src="/assets/logo.svg" alt="logo" />
            <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5">
                <p>Курсы</p>
                <p>О нас</p>
                <p>Учителя</p>
                <p>Цены</p>
                <p>Карьера</p>
                <p>Блог</p>
            </div>
            <button className='btn bg-white text-[#7270dd] border-none hover:bg-[#7270dd] hover:text-white capitalize rounded-full'>
                Начните сейчас
            </button>
        </div>
    </div>
  )
}

export default Navbar