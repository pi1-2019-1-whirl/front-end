import React from "react";
import Navbar from "../components/Navbar/Navbar";

const Instalacao = () => (<div className="App">
<Navbar />
<main className="Main" style = {{marginTop: '64px'}}> 
    <h1>Instalação</h1>
    <form>
        <label>
            Altura da caixa d'água (m):
            <input type="number" step="0.01" name="altura_caixa"/>
        </label>
        <label>
            Capacidade da caixa d'água (l):
            <input type="number" step="0.01" name="altura_caixa"/>
        </label>
        <label>
            Diâmetro da tubulação conectada á caixa (cm):
            <input type="number" step="0.01" name="altura_caixa"/>
        </label>
    </form>
</main>
</div>);

export default Instalacao;