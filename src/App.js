import './App.css';
import './utils/constants'
import { useState } from "react";
import { BOLSA, CANTIDAD_GRAMOS, COSTO_X_FILAMENTO, COURIER_X_FILAMENTO, STICKER, TARJETA } from './utils/constants';

function App() {
  
  const [value, setValue] = useState(0);

  var gramosFilamento =  value * CANTIDAD_GRAMOS;
  var courier = (COURIER_X_FILAMENTO * gramosFilamento) / 100 ;
  var costoFilamento = (COSTO_X_FILAMENTO * gramosFilamento) / 100 ;  
  var bolsa = BOLSA;
  var tarjeta = TARJETA;
  var sticker = STICKER;
  var total =  courier + costoFilamento + bolsa + tarjeta + sticker; 
  
  return (
    <div className="App">
          <br/>
          <br/>
            <h1>Cotizador</h1>
          <br/>
        
        <hr/>
        
        <div className="container text-center">
        
        <div className="row row-cols-2">
            <div className="col">Courier</div>
            <div className="col">{'RD$' + Math.round(courier)}</div>
            <div className="col">Filamento</div>
            <div className="col">{'RD$' + Math.round(costoFilamento)}</div>

            <div className="col">Electricidad</div>
            <div className="col"> - </div>
            <div className="col">Bolsa</div>
            <div className="col">{'RD$' + bolsa}</div>

            <div className="col">Tarjeta</div>
            <div className="col">{'RD$' + tarjeta}</div>
            <div className="col">Sticker</div>
            <div className="col">{'RD$' + sticker}</div>

            <div className="col" id='total' >Total</div>
            <div className="col" id='total'>{'RD$' + Math.round(total)}</div>
          </div>
        </div>
        <br/>
        <div className="input-group mb-3">
          <input 
            type="text" 
            className="form-control" 
            value={'%' + Math.round(gramosFilamento)} 
            placeholder='% de gramos' 
            disabled
          />
        </div>
        <br/>
        <div className="input-group mb-3">
          <input 
            type="number" 
            onChange={e => {setValue(Number(e.target.value))}}
            className="form-control" 
            placeholder='Inserta la cantidad de gramos'
          />
        </div>

    </div>
  );
}

export default App;
