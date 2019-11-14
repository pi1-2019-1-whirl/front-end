import React from "react";
import logo from "../components/Navbar/logo.png"

const Main = () => (
<div className="App">
      <main className="Main" style = {{marginTop: '64px'}}> 
      <dir className="Logo"><img src={logo} alt="Logo" /></dir>
      <div className="button-main">
      <a className ="butinst" href="/instalacao"> Instalação</a>
      <a className ="butmanu" href="/manutencao">Manutenção </a>   
      </div>
      </main>
</div>
);

export default Main;