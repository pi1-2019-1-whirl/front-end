import React from "react";
import "../components/css/Main.css"
import logo from "../components/imagens/logo2.png"

const Main = () => (
<div className="App">
      <main className="Main"> 
      <img className="Logo" src={logo} alt="Logo" />
      <h1 className="Nome">WHIRL</h1>
      <div className="button-main">
      <a className ="butinst" href="/instalacao"> Instalação</a>{" "}
      <a className ="butmanu" href="/manutencao">Manutenção </a>   
 
      </div>
      </main>
</div>
);
export default Main;