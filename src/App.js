import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { useSelector , useDispatch} from 'react-redux';
// import { withdraw } from './store/actions/bank-actions';
// import { deposit } from './store/actions/bank-actions';
import { withdraw  , deposit} from './rtk/Slice/bank-Slice';
import Products from './compoents/products';

function App() {
const state = useSelector(state => state.bank);
console.log(state);

const dispatch = useDispatch();

  return (
    <div className="App">
   <>
        <h1>
          bank account: {state}
        </h1>
        <p id="value" />
        <input type="number" placeholder="amount" id="amount" />
        <button id="withdrow" onClick={()=> dispatch(withdraw(100))}>withdrow</button>
        <button id="withdrow" onClick={()=> dispatch(deposit(100))}>deposit</button>
        <Products/>
  </>
 
     </div>
  );
}

export default App;
