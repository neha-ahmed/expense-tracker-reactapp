import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import Transaction from './Transaction';

function TransactionList(){
  const {transactions, deleteAll} = useContext(GlobalContext);
    return(
        <div >
          
        <h3>History
        <button className="deletex"
        onClick={() => deleteAll()}
        >Delete All</button>
      
        </h3>
        
        <ul className="list">
          {transactions.map(transaction => (
           <Transaction transaction={transaction} key = {transaction.id}/>

          ))}
        </ul>
        </div>
    );

}
export default TransactionList;