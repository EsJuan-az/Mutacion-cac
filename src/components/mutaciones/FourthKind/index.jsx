import React from "react";
import MutacionTemplate from "../MutacionTemplate";
import samuel from '../../../assets/Samuel.mp3';

function FourthKind() {
  return (
    <MutacionTemplate
    title="Mutaciones de cuarto tipo"
    author="Samuel Colorado"
    audio={samuel}
    >
      <p>
        Las mutaciones de cuarta refieren al reajuste de los avalúos catastrales
        de los predios, ahora bien, ¿A qué se refiere esto? hay dos aspectos a
        tener en cuenta:
      </p>
      <ul className="list-disc pl-3">
        <li>
          El primero se refiere a las{" "}
          <em>
            <b>“Revisiones de avalúo”</b>
          </em>
          , que buscan reducir el valor del impuesto predial que se le aplica a
          una propiedad anualmente. Para realizar este proceso,debes hacer una
          solicitud escrita con las pruebas que demuestren que el avalúo no
          corresponde con las características de la propiedad.
        </li>
        <li>
          El segundo se refiere a las{" "}
          <em>
            <b>“Auto estimaciones del predio”</b>
          </em>
          , que tienen como objetivo que los propietarios de un predio puedan
          presentar una estimación del valor que tiene su propiedad ante las
          autoridades correspondientes. Para este proceso también se tienen que
          suministrar documentos que soporten para la autoestimación que se está
          realizando, como lo pueden ser planos, valorizaciones, etc.
        </li>
      </ul>
    </MutacionTemplate>
  );
}

export default FourthKind;
