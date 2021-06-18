import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
 
export default class produto extends Component {
    state = {
        produto: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`${process.env.REACT_APP_API_URL}/${id}`)
            .then(produto =>
                produto.json().then(produto => this.setState({ produto }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { produto, index } = this.state;
        
        return (
            <div className="produto-info">
                <h1> Produto: {produto.Nome} </h1>
                <h1> Descrição: {produto.Descricao} </h1>
                <h1> Preço: R${produto.Preco},00 </h1>
                <h1> Quantidade em estoque: {produto.QuantidadeEstoque} </h1>
                <br/>
                <Link to={`/produto`}> Voltar </Link> <br />
                <Link to={`/editarproduto/${produto.id}`}> Editar </Link> <br />
                <Link to={`/deletarproduto/${produto.id}`}> Deletar </Link> <br />
            </div >
        );
    }
}
