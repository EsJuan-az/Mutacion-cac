import React from "react";
import MutacionTemplate from "../MutacionTemplate";

function FifthKind() {
  return (
    <MutacionTemplate title="Mutación de quinto tipo" author="Brigitte Iturri">
      <p>
        Las mutaciones de quinta implican cambios en los registros catastrales
        debido a la inclusión de información sobre propiedades o edificaciones
        que no fueron previamente declaradas o fueron omitidas en procesos de
        actualización. Esto asegura que los registros estén al día y reflejen
        con precisión la situación de los bienes inmuebles.
      </p>
      <p>
        Por ejemplo, si se construye una edificación en un terreno y esta
        construcción no fue declarada en el proceso de actualización catastral o
        en los registros oficiales según la condición del predio, los documentos
        requeridos son:{" "}
      </p>
      <b>Mejora en predio ajeno o informales:</b>
      <ul className="list-disc pl-3">
        <li>Solicitud escrita </li>
        <li>Carta venta </li>
        <li>
          Constancia de pago de servicios públicos, contribuciones,
          valorizaciones y demás.{" "}
        </li>
        <li>Acreditar existencia y propiedad de la mejora. </li>
        <li>
          Para el caso de mejoras en municipios fiscales, el solicitante deberá
          indicar el área y el avalúo del predio.
        </li>
      </ul>
      <b>Eliminados por accidente - omitidos:</b>
      <ul className="list-disc pl-3">
        <li>
          Una copia de la escritura pública u otro documento que confirme tu
          derecho de propiedad.
        </li>
        <li>
          Una copia del impuesto predial actualizado para el periodo en el que
          estás solicitando la corrección.
        </li>
        <li>
          Cualquier otro documento que pruebe que estas mejoras realmente
          existen físicamente.
        </li>
      </ul>
      <b>Aquí están los documentos adicionales:</b>
      <ul className="list-disc pl-3">
        <li>
          Una copia de la escritura pública u otro documento que confirme tu
          derecho de propiedad.
        </li>
        <li>
          Un acto administrativo o una sentencia judicial oficialmente
          registrada, en caso de que sea aplicable.
        </li>
        <li>
          Un plano oficial que muestre la ubicación exacta del terreno, su
          tamaño y límites, con los nombres e identificaciones de los terrenos
          adyacentes.
        </li>
        <li>
          Si la propiedad está en áreas donde no hay un registro oficial de
          propiedades según la ley 14 de 1983, debes demostrar la existencia y
          propiedad del terreno o mejora a través de una solicitud detallada,
          incluyendo información sobre su tamaño y valor estimado.
        </li>
      </ul>
    </MutacionTemplate>
  );
}

export default FifthKind;
