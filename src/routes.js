import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Main from "./pages/Main";
<<<<<<< HEAD
//import Manutencao from "./pages/Manutencao";
=======
import Manutencao from "./pages/Manutencao";
>>>>>>> 7d779735cdb92816f291006ea04c91c44246a188
import Instalacao from "./pages/Instalacao";


const Routes = () =>(
<BrowserRouter>
 <Switch>
   <Route exact path="/" component={Main}/>
   <Route path="/consultoria" component={()=> <h1>consultoria </h1>}/>
<<<<<<< HEAD
   {/* <Route path="/manutencao" component={Manutencao}/> */}
=======
   <Route path="/manutencao" component={Manutencao}/>
>>>>>>> 7d779735cdb92816f291006ea04c91c44246a188
   <Route path="/instalacao" component={Instalacao}/>
 </Switch>
</BrowserRouter>
);

export default Routes;