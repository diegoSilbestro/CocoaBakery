import React from 'react'
import data, { data2, data3} from './Componentes/db';
import './App.css';
import Rutas from './Componentes/Rutas'

function App() {
  const {productItems} = data
  const {productItem} = data2
  const {products} = data3
  return (
    <>
      <Rutas productItems={productItems} productItem={productItem} products={products} />

    </>
  );
}

export default App;