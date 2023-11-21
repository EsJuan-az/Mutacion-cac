import MutacionTemplate from "../MutacionTemplate";
import juanes from '../../../assets/Juanes.mp3';
function WhatIs() {
  return (
    <MutacionTemplate
      title="Significado de Mutación"
      author="Juan Esteban Arango"
      audio={ juanes }
    >
      <p>
        La mutación de un predio, ya sea una finca, terreno u otra propiedad
        inmueble, abarca cualquier modificación que pueda experimentar, ya sea
        en su apariencia, en aspectos legales o económicos. Un ejemplo de esto
        sería el cambio de propietario del predio.
      </p>
      <br />
      <b>Existen cinco tipos de mutaciones: </b>
      <p>
        La primera mutación señala el cambio en de propietario del predio. La
        segunda para el agrupamiento o desagrupamiento de propiedades. La
        tercera se relaciona con la construcción o mejoras en el predio. La
        cuarta ocurre cuando la clasificación de una propiedad cambia debido a
        un cambio en su uso, como la transición de uso agrícola a residencial o
        industrial. Por último, la quinta se emplea para indicar el
        descubrimiento de predios no registrados en el catastro o para notificar
        construcciones o mejoras en propiedades ajenas.
      </p>
    </MutacionTemplate>
  );
}

export default WhatIs;
