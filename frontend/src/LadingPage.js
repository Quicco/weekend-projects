import { useEffect, useState } from "react";
import "./LadingPage.css";

const candidatosDados = [
  {
    nome: "Mauro Serrano",
    idade: "26",
    dataNascimento: "10/06/1996",
    email: "mauro.serrano@hotmail.com.br",
    tel: "xxx-xxx-xxx",
    notas: ["Trabalhando no momento."],
  },
  {
    nome: "Francisco Sousa",
    idade: "25",
    dataNascimento: "??/??/????",
    email: "?????@hotmail.com",
    tel: "xxx-xxx-xxx",
    notas: [],
  },
  {
    nome: "Ariane Guimarães",
    idade: "28",
    dataNascimento: "??/??/????",
    email: "?????@hotmail.com",
    tel: "xxx-xxx-xxx",
    notas: [],
  },
  {
    nome: "Diogo Sabino",
    idade: "20",
    dataNascimento: "??/??/????",
    email: "?????@hotmail.com",
    tel: "xxx-xxx-xxx",
    notas: [],
  },
  {
    nome: "Elon Musk",
    idade: "51",
    dataNascimento: "??/??/????",
    email: "?????@hotmail.com",
    tel: "xxx-xxx-xxx",
    notas: [],
  },
  {
    nome: "Billie Eilish",
    idade: "20",
    dataNascimento: "??/??/????",
    email: "?????@hotmail.com",
    tel: "xxx-xxx-xxx",
    notas: [],
  },
  {
    nome: "Jaden Smith",
    idade: "24",
    dataNascimento: "??/??/????",
    email: "?????@hotmail.com",
    tel: "xxx-xxx-xxx",
    notas: [],
  },
  {
    nome: "Dua Lipa",
    idade: "27",
    dataNascimento: "??/??/????",
    email: "?????@hotmail.com",
    tel: "xxx-xxx-xxx",
    notas: [],
  },
];

const icons = [
  "./icons/CalandarioCheck.png",
  "./icons/CalandarioX.png",
  "./icons/clock.png",
  "./icons/check.png",
  "./icons/X.png",
];

export default function LadingPage() {
  const [candidatos, setCandidatos] = useState(candidatosDados);
  const [pagina, setPagina] = useState(0);
  const [profileName, setProfileName] = useState("");
  const [profileEmail, setProfileEmail] = useState("");
  const [profileDate, setProfileData] = useState("");
  const [profileTel, setProfileTel] = useState("");
  const [profileNotas, setProfileNotas] = useState([]);
  const [filtros, setFiltros] = useState(false);
  const [editando, setEditando] = useState(false);
  const [promoverPop, setPromoverPop] = useState(false);

  function adicionarCandidato(candidato) {
    setCandidatos((prev) => [...prev, candidato]);
  }

  function alterarCandidato(candidatoEdit, index) {
    setCandidatos((prev) =>
      prev.filter((candidato, i) => (i === index ? candidatoEdit : candidato))
    );
  }

  function handleCandidatoClick(candidado) {
    setProfileName(candidado.nome);
    setProfileEmail(candidado.email);
    setProfileData(candidado.dataNascimento);
    setProfileTel(candidado.tel);
    setProfileNotas(candidado.notas);
    setPagina(2);
  }
  function handleDeleteNota(notaIndex) {
    const userIndex = candidatos.findIndex(
      (candidato) => candidato.nome === profileName
    );
    console.log(userIndex);
    setCandidatos((prev) =>
      prev.map((candidato, i) =>
        i === userIndex
          ? {
              ...candidato,
              notas: candidato.notas.filter((nota, j) => j !== notaIndex),
            }
          : candidato
      )
    );
    setProfileNotas((prev) => prev.filter((nota, j) => j !== notaIndex));
  }

  useEffect(() => {
    setFiltros(false);
    setPromoverPop(false);
  }, [pagina]);

  return (
    <div className="main">
      <div className="menu">
        <div className="menuItem">
          <img src="./img/Logo_Branco.png" alt="logo do bytes" />
        </div>
        <div className="menuItem">
          <p>Perfil</p>
          <p>Candidaturas</p>
          <p>PowerUp</p>
          <p>Bootcamp</p>
        </div>
        <div className="menuItem bottomItem">
          <Button>Sair</Button>
        </div>
      </div>
      {pagina === 0 && (
        <div className="plataforma">
          <div className="cabecalho">
            <h1>Power UP</h1>
            <h1>Candidatos</h1>
            <div className="calendario">
              <img src="./icons/calendario.png" alt="calendario" />
            </div>
          </div>
          <div className="listagem">
            <div className="listagemTop">
              <Button onClick={() => setPagina(1)}>ADICIONAR</Button>
              <Button>PESQUISAR</Button>
              <Button>CANDIDATOS POR PAGINA</Button>
              <Button onClick={() => setFiltros((prev) => !prev)}>
                {filtros ? "FILTRAR" : "FILTROS"}
              </Button>
              <Button>Selec. All</Button>
              <Button>Selec. None</Button>
            </div>
            <div className="candidatosLP">
              {candidatos.map((candidato, i) => (
                <div
                  onClick={() => handleCandidatoClick(candidato)}
                  className={`candidato`}
                  key={`candidato ${i}`}
                >
                  <div className="icons">
                    <img
                      src={icons[Math.floor(Math.random() * icons.length)]}
                      className="candidatoLeft"
                      alt="icons"
                    />
                  </div>
                  <div className="candidatoRight">
                    <span className="nomeLP item2">{candidato.nome}</span>
                    <span className="idadeLP item2">
                      {candidato.idade} anos
                    </span>
                    <div className="checkboxLPitem">
                      <input className="test" type="checkbox"></input>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="listagemBotton">
              <Button>Enviar</Button>
            </div>
          </div>
        </div>
      )}
      {pagina === 1 && (
        <div className="cadastro">
          <h2>Candidato ao PowerUp 9</h2>
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
          <Button>Adicionar Nota</Button>
          <Button>Agendar Entrevista</Button>
          <Button>Confirmar</Button>
          <Button onClick={() => setPagina(0)}>Cancelar</Button>
        </div>
      )}
      {pagina === 2 && (
        <div className="perfil">
          <div>
            <h2>Perfil do Candidato</h2> <h2>Status: Placeholder</h2>
          </div>
          <p>Dados</p>
          <div>
            <p>
              Nome:{" "}
              {editando ? (
                <input placeholder={profileName}></input>
              ) : (
                profileName
              )}
            </p>
            <p>
              Data de Nascimento:{" "}
              {editando ? (
                <input placeholder={profileDate}></input>
              ) : (
                profileDate
              )}
            </p>
            <p>
              Email:{" "}
              {editando ? (
                <input placeholder={profileEmail}></input>
              ) : (
                profileEmail
              )}
            </p>
            <p>
              Telefone{" "}
              {editando ? <input placeholder={profileTel}></input> : profileTel}
            </p>
          </div>
          <span>
            Notas{" "}
            {profileNotas.map((nota, i) => (
              <p key={i}>
                Nota {i + 1}: {nota}
                {editando && (
                  <Button onClick={() => handleDeleteNota(i)}>Excluir</Button>
                )}
              </p>
            ))}
          </span>
          {editando && (
            <div>
              <textarea placeholder="Este candidado nÃ£o tem notas"></textarea>
            </div>
          )}
          <p>Entrevista: Placeholder</p>
          <Button onClick={() => setPagina(0)}>Voltar</Button>
          <Button onClick={() => setPromoverPop(true)}>Promover</Button>
          <Button>Nova entrevista</Button>
          <Button onClick={() => setEditando((prev) => !prev)}>
            {editando ? "Confirmar" : "Editar"}
          </Button>
        </div>
      )}
      {filtros && (
        <div className="filtros">
          <p>
            <input type="checkbox"></input>Aguardando Resposta
          </p>
          <p className="filtroSectionName">Agendamento:</p>
          <p>
            <input type="checkbox"></input>Agendado
          </p>
          <p>
            <input type="checkbox"></input>NÃ£o agendado
          </p>
          <p className="filtroSectionName">SeleÃ§Ã£o:</p>
          <p>
            <input type="checkbox"></input>Selecionado
          </p>
          <p>
            <input type="checkbox"></input>NÃ£o selecionado
          </p>
        </div>
      )}
      {promoverPop && (
        <div className="filtros">
          <p>
            <input name={"powerUp"} type="radio" /> Power UP 9 Vagas: 30/30
          </p>
          <p>
            <input name={"powerUp"} type="radio" /> Power UP 10 Vagas: 20/30
          </p>
          <p>
            <input name={"powerUp"} type="radio" /> Power UP 11 Vagas: 7/30
          </p>
          <p>
            <Button onClick={() => setPromoverPop(false)}>Cancelar</Button>
            <Button onClick={() => setPromoverPop(false)}>Confirmar</Button>
          </p>
        </div>
      )}
    </div>
  );
}
function Button({ children, ...props }) {
  return (
    <button {...props} className="bottaoComponent">
      {children}
    </button>
  );
}
