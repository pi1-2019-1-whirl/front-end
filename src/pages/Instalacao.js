import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/css/Instalacao.css"


class Instalacao extends Component {
    state = {
        altura_caixa: 0,
        capacidade_caixa: 0,
        tubulacao_caixa: 0,
    }

    handleInput = ({ target }) => {
        this.setState({ [target.name]: target.value })
        console.log(this.state.altura_caixa)
        console.log(this.state.capacidade_caixa)
        console.log(this.state.tubulacao_caixa)
    }


    render() {

        return (
            <div className="App">
                <Navbar />
                <div className="Main">
                    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet"></link>
                    <div>
                        <h1 className="titulo_instalacao">Instalação</h1>
                        <form className="formulario">
                            <div>
                                <div className="radio-item">
                                    <input type="radio" id="ritema" name="ritem" value="ropt1" />
                                    <label htmlFor="ritema">Superior</label>
                                </div>
                                <div className="radio-item">
                                    <input type="radio" id="ritemb" name="ritem" value="ropt2" />
                                    <label htmlFor="ritemb">inferior</label>
                                </div>
                            </div>
                            <br></br>
                            <label className="altura_caixa">
                                Altura da caixa d'água (m):
                        <p></p>
                                <input required type="number" step="0.01" value={this.state.altura_caixa} onChange={this.handleInput} name="altura_caixa" />
                            </label >
                            <p></p>
                            <label className="capacidade_caixa">
                                Capacidade da caixa d'água (l):
                        <p></p>
                                <input required type="number" step="0.01" value={this.state.capacidade_caixa} onChange={this.handleInput} name="capacidade_caixa" />
                            </label>
                            <p></p>
                            <label className="tubulacao_caixa">
                                Diâmetro da tubulação conectada á caixa (cm):
                        <p></p>
                                <input required type="number" step="0.01" value={this.state.tubulacao_caixa} onChange={this.handleInput} name="tubulacao_caixa" />
                            </label>
                            <p></p>
                            <button>Submeter</button>
                        </form>
                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="resultado">
                            <h1>
                                Energia gerada
                            </h1>
                            <br></br>
                            <br></br>
                            <br></br>
                            <h1 className="valor_calculado">
                                "RESULTADO NUMÉRICO"
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Instalacao;