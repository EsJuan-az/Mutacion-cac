import React, { useState } from "react";
import { useEffect } from "react";
import WhatIs from "../mutaciones/WhatIs";
import Content from "../Content";
import { BsFillCaretDownFill } from "react-icons/bs";
import MutacionTemplate from "../mutaciones/MutacionTemplate";
import SecondKind from "../mutaciones/SecondKind";
import Mark from '../Mark';
const mutaciones = [
    WhatIs,
    MutacionTemplate,
    SecondKind,
    MutacionTemplate,
    MutacionTemplate,
    MutacionTemplate,
]

const contenidos = [
  <>Significado de Mutación.</>,
  <>
    Primer tipo.
    <p>Cambio de propietario.</p>
  </>,
  <>
    Segundo tipo.
    <p>Englobe o desenglobe.</p>
  </>,
  <>
    Tercer tipo.
    <p>Construcción de mejoras.</p>
  </>,
  <>
    Cuarto tipo.
    <p>Cambio de uso.</p>
  </>,
  <>
    Quinto tipo.
    <p>Predios y construcción no registrados.</p>
  </>,
]

function TableOfContents({ setContent }) {
    const [ open, setOpen ] = useState( false );
    const [current, setCurrent] = useState( 0 );
    useEffect(() => {
        setContent(mutaciones[current])
    } ,[ current ]);

    const Contents = contenidos.map( (c, i) => (
            <Content
              key={i}
              click={ () => { setCurrent( i ) } }
              current={ current == i }
            >
              {c}
            </Content>
      ));
  return (
    <section className="relative w-1/3">
    <Mark/>
    <div className={`absolute z-[15] transition-all duration-500 w-5/6 flex flex-col mr-5 bg-[#443D4A] rounded-t-md select-none ${!open ? ' bottom-[-290px]' : 'bottom-0'}`}>
      <header
        onClick={ () => setOpen(!open) }
        className="flex justify-between items-center paladark text-[#e1e1e1] bg-black rounded-t-md border-b border-b-[#e1e1e1] p-2 cursor-pointer">
        <h2 >Contenidos</h2>
        <BsFillCaretDownFill className={`transition-all duration-500 ${!open ? 'rotate-180' : ''}`}/>
      </header>
      <ul className="text-[#e1e1e1]">
        { Contents }
      </ul>
    </div>

    </section>
  );
}

export default TableOfContents;