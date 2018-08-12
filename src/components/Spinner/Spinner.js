import React from 'react';
import './Spinner.scss';

function Spinner () {
  return (
    <div className='spinner'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
        <path fill='#e5e5e5' d='M64,32A32,32,0,1,0,32,64,32,32,0,0,0,64,32ZM8,32A24,24,0,1,1,32,56,24,24,0,0,1,8,32Z' />
        <path fill='#008080' d='M9.37,9.37,15,15A24,24,0,0,1,49,15l5.66-5.66a32,32,0,0,0-45.25,0Z' />
      </svg>
    </div>
  );
}

export default Spinner;
