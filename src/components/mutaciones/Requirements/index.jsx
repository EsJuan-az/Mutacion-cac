import React from "react";
import MutacionTemplate from "../MutacionTemplate";
import juanes from '../../../assets/Juanes2.mp3';

function Requirements() {
  return (
    <MutacionTemplate
      title="Documentos necesarios"
      author="Juan Esteban Arango"
      audio={juanes}>
      <ol className="list-decimal p-3">
        <li>
          <em>
            <b>Solicitud escrita</b>
          </em>{" "}
          personal o por intermedio de apoderado.
        </li>
        <li>
          <em>
            <b>Copia de certificado de libertad y tradición</b>
          </em>{" "}
          no mayor a 30 días. <em>(opcional)</em>
          <p>
            En caso que la Dirección Territorial cuente con acceso a la
            ventanilla Única de Registro - VUR, no será necesario presentarlo.
          </p>
        </li>
        <li>
          <em>
            <b>Copia de la escritura pública</b>
          </em>
          , acto administrativo o sentencia judicial debidamente registrada con
          sus anexos.
        </li>
        <li>
          <em>
            <b>Copia de la cédula de ciudadanía</b>
          </em>{" "}
          o documento de Identidad del propietario, poseedor y/o apoderado.
        </li>
        <li>
         <em>
            <b>
             Informar al usuario
            </b>
         </em>
 qué otros documentos puede aportar para agilizar
          su trámite.{" "}
        </li>
      </ol>
    </MutacionTemplate>
  );
}

export default Requirements;
