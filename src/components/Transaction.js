import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function Transaction({transaction}){
    const sign = transaction.amount <0 ? '-' : '+';
    const {deleteTransaction} = useContext(GlobalContext);
    return(
     
        <div >
            
                <li className={ transaction.amount <0 ?'minus':'plus' } style={{width: "90%"}}>

                    {transaction.text} 
                    <span> {sign}${Math.abs(transaction.amount)} </span>
                    <button onClick={() =>deleteTransaction(transaction.id)} className="delete-btn"
                    style={{width:"30px", height:"35px", textAlign:"center"}}
                    >x
                    </button>
                    </li> 
         
        </div>
      
    );

}
export default Transaction;