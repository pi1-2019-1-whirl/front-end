import React from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/css/Instalacao.css"

const Instalacao = () => (<div className="App">
<Navbar />
<main className="Main" style = {{marginTop: '64px'}}> 
<link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet"></link>
    <body>
    <h1 class="titulo_instalacao">Instalação</h1>
    <form class="formulario">
        <label class="altura_caixa">
            <a>Altura da caixa d'água (m):</a>
            <p></p>
            <input type="number" step="0.01" name="altura_caixa"/>
        </label >
        <p></p>
        <label class="capacidade_caixa">
            Capacidade da caixa d'água (l):
            <p></p>
            <input type="number" step="0.01" name="capacidade_caixa"/>
        </label>
        <p></p>
        <label class="tubulacao_caixa">
            Diâmetro da tubulação conectada á caixa (cm):
            <p></p>
            <input type="number" step="0.01" name="tubulacao_caixa"/>
        </label>
        <p></p>
        <button>Submeter</button>
    </form>
    </body>
</main>
</div>);

export default Instalacao;