import React from 'react';
import Dinner from './Dinner';
import Header from './Header';

function App() {
  return (
    <div className="App">
    <Header/>
     <Dinner dishName="Beef burgers"/>
     <br/>
     <Dinner dishName="Pasta"/>
     <br/>
     <Dinner dishName="Rolls"/>
     <br/>
     <Dinner dishName="Lasagne"/>
    </div>
  );
}

export default App;
