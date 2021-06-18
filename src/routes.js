import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Mainproduto from './pages/produto/main';
import Detalhesproduto from './pages/produto/detalhes';
import CriarProduto from './pages/produto/criar';
import EditarProduto from './pages/produto/editar';
import Deletarproduto from './pages/produto/deletar';
 
const Routes = () => (
 
    <BrowserRouter>
        <Switch>
            <Route exact path="/produtos" component={Mainproduto} />
            <Route path="/produtos/:id" component={Detalhesproduto} />
            <Route path="/Criarproduto" component={CriarProduto} />
            <Route path="/editarproduto/:id" component={EditarProduto} />
            <Route path="/deletarproduto/:id" component={Deletarproduto} />
        </Switch>
    </BrowserRouter>
)
 
export default Routes;