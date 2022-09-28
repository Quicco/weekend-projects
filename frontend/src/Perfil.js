import { useEffect } from "react";
import "./Perfil.css";
export default function Perfil() {
  return (
    <div>
      {" "}
      <div className="Titulo">
        {" "}
        <h2 className="tituloPerfilCandidato">Perfil do Candidato</h2>{" "}
        <h2 className="tituloStatus">Status: Placeholder</h2>{" "}
      </div>{" "}
      <div>
        {" "}
        <p className="paragrafoItem">Dados</p>{" "}
        <div className="perfilCandidatos">
          {" "}
          <p>Nome: Placeholder</p> <p>Data de Nascimento: 27:09:2022 </p>{" "}
          <p>Email: Placeholder</p> <p>Telefone: Placeholder</p>{" "}
        </div>{" "}
        <p className="paragrafoItem">Notas</p>{" "}
        <div className="Notas">
          {" "}
          <textarea placeholder="Este candidado não tem notas"></textarea>{" "}
        </div>{" "}
        <div>
          {" "}
          <p className="paragrafoItem">Entrevista</p>{" "}
          <p className="perfilCandidatos">Placeholder</p>{" "}
        </div>{" "}
        <Button>Voltar</Button> <Button>Promover</Button>{" "}
        <Button>Nova entrevista</Button> <Button>Editar</Button>{" "}
      </div>{" "}
    </div>
  );
  function Button({ children, ...props }) {
    return (
      <button {...props} className="bottaoComponent">
        {" "}
        {children}{" "}
      </button>
    );
  }
}
