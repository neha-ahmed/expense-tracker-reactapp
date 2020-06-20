import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function Balance(){
  const {transactions} = useContext(GlobalContext);
 
  var amounts = transactions.map(transaction => transaction.amount);
  var total = amounts.reduce((acc, item) => (acc+=item) ,0 ).toFixed(2);
  const sign = total <0 ? '-' : '+';
  
    return(
    <div className="balance">
      <h4 style={{paddingTop:"9px" ,fontFamily: 'Montserrat'}}>Your Balance</h4>
      <h1>{sign}${Math.abs(total)}</h1>
      </div>
    );

}
export default Balance;