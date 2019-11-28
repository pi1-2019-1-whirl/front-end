import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/css/Instalacao.css"

class Instalacao extends Component {


    state = {
        altura_caixa: 0,
        capacidade_caixa: 0,
        tubulacao_caixa: 0,
        verifica_posicao: true,
        vazao_bomba: 0,
    }

    handleInput = ({ target }) => {
        this.setState({ [target.name]: target.value })
        
        console.log(this.state.altura_caixa)
        console.log(this.state.capacidade_caixa)
        console.log(this.state.tubulacao_caixa)
        console.log(this.state.verifica_posicao)
    }


    render() {

        return (
            <div className="App">
                <Navbar />
                <div className="Main">
                    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet"></link>
                    <div>
                        <h1 className="titulo_instalacao">Instalação</h1>
                        <br></br>
                        <div className="posicao_caixa">

                        <label>Em que parte está localizada a sua caixa d'água ?</label>
                                    <div>
                                        <div className="radio-item">
                                            <input defaultChecked={this.state.verifica_posicao} type="radio" id="ritema" name="verifica_posicao" onClick={this.handleInput} value={true} />
                                            <label htmlFor="ritema">Superior</label>
                                        </div>
                                        <div className="radio-item">
                                            <input type="radio" id="ritemb" name="verifica_posicao" onClick={this.handleInput} value={false} />
                                            <label htmlFor="ritemb">inferior</label>
                                        </div>
                                    </div>
                        </div>
                        <div>
                            {this.state.verifica_posicao ? (
                                console.log("em cima"),
                                <form className="formulario">
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
                                    <p></p>
                                    <button>Submeter</button>
                                </form>
                            ) : (
                                console.log("embaixo"),
                                <form className="formulario">
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
                                    <label className="vazao_bomba">
                                        Vazão da bomba:
                                <p></p>
                                        <input required type="number" step="0.01" value={this.state.vazao_bomba} onChange={this.handleInput} name="vazao_bomba" />
                                    </label>
                                    <p></p>
                                    <p></p>
                                    <button>Submeter</button>
                                </form>
                                    )}
                        </div>


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