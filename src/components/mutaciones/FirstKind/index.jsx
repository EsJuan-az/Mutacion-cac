import React from "react";
import MutacionTemplate from "../MutacionTemplate";
import laura from '../../../assets/Laura.mp3';
function FirstKind() {
  return (
    <MutacionTemplate
        title="Mutación de primer tipo"
        author="Laura Suárez"
        audio={laura}>
      <p>
        La mutación de primera se da cuando se realiza un cambio de propietario,
        poseedor u ocupante del predio; esto sin que se vea afectado el avalúo
        catastral o valor del predio. Es decir, cuando se efectúa una venta, se
        liquida una sucesión, se adjudica o titula un predio.
      </p>
      <b>Existen diferentes casos:</b>
      <ul className="list-disc p-3">
        <li>
          <em>
            <b>Mejora en predio ajeno:</b>
          </em>{" "}
          Donde se debe presentar la carta Venta o escritura pública u otro
          documento que demuestre la transferencia de propiedad (ej. Constancia
          de pago de impuestos, de servicios públicos. Contribuciones,
          valorización, acta de colindancia, etc.).
        </li>
        <li>
          <em>
            <b>El cambio de poseedor:</b>
          </em>{" "}
          Documentos que establezcan la posesión como constancias de pago de
          impuestos, servicios públicos, contribuciones, valorización etc.{" "}
        </li>
        <li>
          <em>
            <b>Propiedad Horizontal:</b>
          </em>{" "}
          Requisitos generales y copia de la escritura del Reglamento de
          Propiedad Horizontal y sus modificaciones y planos en escala original.
        </li>
      </ul>
      <p>
        Debe tener en cuenta que las copias de escritura y actos administrativos
        o sentencias judiciales que se presenten, deben estar registrados.{" "}
      </p>
    </MutacionTemplate>
  );
}

export default FirstKind;
