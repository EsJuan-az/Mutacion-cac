import React from 'react'
import { FaLaptop } from "react-icons/fa";
function ScreenRestriction() {
  return (
    <div className='paladark absolute top-0 left-0 w-full h-screen bg-slate-900 flex flex-col justify-center items-center z-50 text-white lg:hidden '>
        <FaLaptop className='text-8xl animate-pulse'/>
        <section className='px-3 text-center text-md'>
            Te recomendamos ingresar desde tu computador para una mejor experiencia. Asegurate de tener tu zoom al 100%.
        </section>
    </div>
  );
}

export default ScreenRestriction;