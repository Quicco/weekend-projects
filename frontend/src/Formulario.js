import { useEffect } from "react";

export default function Formulario() {
  return (
    <div>
      <h2 className="titulo__candidato">Candidato ao PowerUp.9</h2>
      <p>
        Nome<input></input>
      </p>
      <p>
        Data de Nascimento<input></input>
      </p>
      <p>
        Email<input></input>
      </p>
      <p>
        Telefone<input></input>
      </p>
      <button>+ Adicionar Nota</button>
      <button>Agendar Entrevista</button>
      <button>Confirmar</button>
      <button>Cancelar</button>
    </div>
  );
}
