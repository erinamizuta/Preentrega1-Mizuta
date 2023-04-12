import { useState } from "react";
//import './App.css'

import { NavBar } from "./componentes/navbar/NavBar";
import Titulo from "./componentes/titulo/titulo";

import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Titulo />
      <ItemListContainer greeting={'Bienvenidos a Folklore - Shop!'}/>
    </div>
  );
}

export default App;
