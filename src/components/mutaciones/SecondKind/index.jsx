import React from "react";
import MutacionTemplate from "../MutacionTemplate";

function SecondKind() {
  return (
    <MutacionTemplate title="Mutación de Segundo Tipo" author="Jhonatan Parra">
      <p>
        Las mutaciones de segunda son cambios en la descripción de un terreno,
        como correcciones de errores o ajustes por cambios en carreteras u otros
        servicios públicos. Estos cambios, que ocurren por englobe o desenglobe
        de predios, no afectan la propiedad en sí ni quién es el dueño del
        terreno. Más bien, ayudan a mantener información precisa en los
        registros.
      </p>
      <p>
        Para completar el formulario y hacer cambios, debes usar la sección
        llamada &lsquo;mutación de segunda&rsquo; y adjuntar los documentos
        necesarios. Dependiendo de tu necesidad, aquí están los documentos que
        debes adjuntar:
      </p>

      <ul>
        <li>
          <em>
            <b>Desenglobe:</b>
          </em>
          <p>
            Necesitas los planos aprobados por la entidad correspondiente y
            protocolizados. Esto es esencial cuando divides o unes terrenos.
            También, se requiere un documento oficial de asignación o una
            decisión judicial debidamente registrada, junto con sus anexos.
          </p>
        </li>
        <li>
          <em>
            <b>Propiedad horizontal:</b>
          </em>
          <p>
            Debes adjuntar una copia de la escritura del reglamento de Propiedad
            Horizontal, incluyendo cualquier modificación, y los planos
            originales a escala.
          </p>
        </li>
        <li>
          <em>
            <b>Englobe:</b>
          </em>
          <p>
            Obtén una copia de la escritura pública que haya sido registrada
            oficialmente.
          </p>
        </li>
      </ul>
    </MutacionTemplate>
  );
}

export default SecondKind;
