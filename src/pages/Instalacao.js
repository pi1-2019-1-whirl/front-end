import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import "../components/css/Instalacao.css"

class Instalacao extends Component {


    state = {
        altura_caixa: 0,
        capacidade_caixa: 0,
        tubulacao_caixa: 0,
        verifica_posicao: 1,
        vazao_bomba: 0.2,
    }

    handleInput = ({ target }) => {
        this.setState({ [target.name]: parseFloat(target.value) })
    }

    render() {

        return (
            <div className="App">
                <Navbar />
                <div className="Main">
                    <link href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap" rel="stylesheet"></link>
                    <div>
                        <br></br>
                        <br></br>
                        <h1 className="titulo_instalacao">Instalação</h1>
                        <br></br>
                        <div className="posicao_caixa">

                            <label>Em que parte está localizada a sua caixa d'água ?</label>
                            <div>
                                <div className="radio-item">
                                    <input defaultChecked={this.state.verifica_posicao} type="radio" id="ritema" name="verifica_posicao" onClick={this.handleInput} value="1" />
                                    <label htmlFor="ritema">Superior</label>
                                </div>
                                <div className="radio-item">
                                    <input type="radio" id="ritemb" name="verifica_posicao" onClick={this.handleInput} value="0" />
                                    <label htmlFor="ritemb">inferior</label>
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.state.verifica_posicao ? (
                                <form className="formulario">
                                    <br></br>
                                    <label className="altura_caixa">
                                        Altura da caixa d'água (m):
                                <p></p>
                                        {this.state.altura_caixa ? (
                                            <input required type="number" step="0.01" value={this.state.altura_caixa} onChange={this.handleInput} name="altura_caixa" />
                                        ) : (
                                                <input required type="number" step="0.01" value="null" onChange={this.handleInput} name="altura_caixa" />
                                            )}
                                    </label >
                                    <p></p>
                                    <label className="capacidade_caixa">
                                        Capacidade da caixa d'água (l):
                                <p></p>
                                        {this.state.capacidade_caixa ? (
                                            <input required type="number" step="0.01" value={this.state.capacidade_caixa} onChange={this.handleInput} name="capacidade_caixa" />
                                        ) : (
                                                <input required type="number" step="0.01" value="null" onChange={this.handleInput} name="capacidade_caixa" />
                                            )}
                                    </label>
                                    <p></p>
                                </form>
                            ) : (
                                    <form className="formulario">
                                        <br></br>
                                        <label className="altura_caixa">
                                            Altura da caixa d'água (m):
                                <p></p>
                                            {this.state.altura_caixa ? (
                                                <input required type="number" step="0.01" value={this.state.altura_caixa} onChange={this.handleInput} name="altura_caixa" />
                                            ) : (
                                                    <input required type="number" step="0.01" value="null" onChange={this.handleInput} name="altura_caixa" />
                                                )}
                                        </label >
                                        <p></p>
                                        <label className="capacidade_caixa">
                                            Capacidade da caixa d'água (l):
                                <p></p>
                                            {this.state.capacidade_caixa ? (
                                                <input required type="number" step="0.01" value={this.state.capacidade_caixa} onChange={this.handleInput} name="capacidade_caixa" />
                                            ) : (
                                                    <input required type="number" step="0.01" value="null" onChange={this.handleInput} name="capacidade_caixa" />
                                                )}
                                        </label>
                                        <p></p>
                                        <label className="vazao_bomba">
                                            Vazão da bomba:
                                <p></p>
                                            {this.state.vazao_bomba ? (
                                                <input required type="number" step="0.01" value={this.state.vazao_bomba} onChange={this.handleInput} name="vazao_bomba" />
                                            ) : (
                                                    <input required type="number" step="0.01" value="null" onChange={this.handleInput} name="vazao_bomba" />
                                                )}
                                        </label>
                                        <p></p>
                                    </form>
                                )}
                        </div>


                        <br></br>
                        <br></br>
                        <br></br>
                        <div className="resultado">
                            <div className="valor_calculado">
                                <h1 >
                                    Energia gerada
                                    <br></br>
                                    {parseFloat(this.state.vazao_bomba * this.state.altura_caixa * 9.81*(this.state.capacidade_caixa/this.state.vazao_bomba)).toFixed(2) + " KW"}
                                </h1>
                                <br></br>
                                <h1 >
                                    Potência útil
                                    <br></br>
                                    {parseFloat(this.state.altura_caixa * 9.81 * 0.8*(this.state.capacidade_caixa/this.state.vazao_bomba)).toFixed(2) + " KW"}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Instalacao;