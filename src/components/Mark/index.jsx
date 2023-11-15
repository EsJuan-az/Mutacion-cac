import React from 'react';

function Mark() {
  return (
    <span className='absolute bottom-32 right-6 z-[-1] flex items-center flex-col'>
        <h2 className='blackhan text-3xl w-56 mt-7 select-none'>Grupo 9:</h2>
        <ul className='list-disc [&>li]:text-sm w-[100%]'>
            <li>Juan Esteban Arango</li>
            <li>Samuel Colorado Castrillón</li>
            <li>Yahira Brigitte Iturri</li>
            <li>Laura Suárez</li>
            <li>Jhonatan Parra</li>
            <li>Juliana Alejandra Ocampo</li>
        </ul>
    </span>
  );
}

export default Mark;