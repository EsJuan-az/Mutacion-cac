import React from 'react';

function Mark() {
  return (
    <span className='z-[-20] flex items-center flex-col pb-20 ml-[-40px]'>
        <h2 className='blackhan text-3xl w-56 mt-7 select-none text-center'>Grupo 9:</h2>
        <p className='text-xs w-full paladark mt-[-10px] text-center'>Cátedra Anticorrupción 2023-2.</p>
        <ul className='self-center pl-4 list-disc [&>li]:text-sm'>
            <li>Juan Esteban Arango</li>
            <li>Yahira Brigitte Iturri</li>
            <li>Samuel Colorado Castrillón</li>
            <li>Juliana Alejandra Ocampo</li>
            <li>Jhonatan Parra</li>
            <li>Laura Suárez</li>
        </ul>
    </span>
  );
}

export default Mark;