import React from "react";
import MutacionTemplate from "../MutacionTemplate";
function ThirdKind() {
  return (
    <MutacionTemplate
      title="Mutación de tercer tipo"
      author="Juliana Alejandra Ocampo"
    >
      <p>
        La mutación de tercera se trata de cambios importantes en las políticas
        que regulan la construcción, demolición, modificaciones y usos de
        propiedades. Estos cambios deben ser respaldados por una serie de
        documentos específicos dependiendo de la naturaleza de la propiedad y el
        tipo de modificación que se busca.
      </p>
      <b>
        Se dividen en dos categorías principales: métodos directos e indirectos.
      </b>
      <ul className="list-disc pl-3">
        <li>
          Los métodos directos se aplican cuando no se tiene certeza sobre la
          existencia de una construcción o si esta afecta a terceros, en esos
          casos se requieren pruebas más concretas.
        </li>{" "}
        <li>
          Por otro lado, los métodos indirectos, declarativos o colaborativos
          aplican cuando se presentan documentos que respalden la solicitud, lo
          cual puede incluir una variedad de elementos como fotografías, planos
          aprobados por las autoridades, licencias de construcción, entre otros.
        </li>
      </ul>
      <b>
        En situaciones donde haya errores administrativos, como registros
        duplicados, la mutación de tercera se utiliza como mecanismo para
        corregir estas inconsistencias
      </b>
    </MutacionTemplate>
  );
}

export default ThirdKind;
