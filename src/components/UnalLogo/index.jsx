import React from 'react';
import unal from '../../assets/unal.svg';
function UnalLogo() {
  return (
    <figure className='absolute top-0 right-0 w-20 p-2 z-10 opacity-30'>
        <img src={unal} alt="unal" />
    </figure>
  );
}

export default UnalLogo;