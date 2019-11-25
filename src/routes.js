import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from "./pages/Main";
//import Manutencao from "./pages/Manutencao";
import Instalacao from "./pages/Instalacao";


const Routes = () =>(
<BrowserRouter>
 <Switch>
   <Route exact path="/" component={Main}/>
   <Route path="/consultoria" component={()=> <h1>consultoria </h1>}/>
   {/* <Route path="/manutencao" component={Manutencao}/> */}
   <Route path="/instalacao" component={Instalacao}/>
 </Switch>
</BrowserRouter>
);

export default Routes;