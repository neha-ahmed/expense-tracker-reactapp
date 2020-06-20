import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

function AddTransaction(){
    const [textIncome,setIncomeText] = useState('');
    const [textExpense,setExpenseText] = useState('');
    
    const [amountExp,setExpenseAmount] = useState(0);
    const [amountInc,setIncomeAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);

    const onIncomeSubmit = e => {
      e.preventDefault();
      const newTransaction ={
        id: Math.floor(Math.random() * 100000000),
        text:textIncome,
        amount: + Math.abs(amountInc)  //to convert to int
        
      }

      addTransaction(newTransaction);
    }

    const onExpenseSubmit = e => {
      e.preventDefault();
      const newTransaction ={
        id: Math.floor(Math.random() * 100000000),
        text:textExpense,
        amount: -(+ Math.abs(amountExp))
        
      }

      addTransaction(newTransaction);
    }
    return(
      <div className="form-group mb-10px" >
        <div className="row">
     
          <div className="col-md-6" style={{width:"40%"}}>
         <h3>Add income</h3>
      <form onSubmit={onIncomeSubmit}>
       
          <label htmlFor="text">Text</label>
          <input type="text" value={textIncome} onChange= {(e)=> setIncomeText(e.target.value)} placeholder="Enter text..." />
       
          <label htmlFor="amount"
            >Add Amount <br />
            </label>
          <input type="number" value={amountInc} onChange= {(e)=> setIncomeAmount(e.target.value)} placeholder="Enter amount..." />
     
        <button className="btn" style={{fontFamily:'Montserrat'}}>Add transaction</button>
      </form>
      </div>

      <div className="col-md-6" style={{width:"40%"}}>
      <h3>Add expense</h3>
      <form onSubmit={onExpenseSubmit}>
        
          <label htmlFor="text">Text</label>
          <input type="text" value={textExpense} onChange= {(e)=> setExpenseText(e.target.value)} placeholder="Enter text..." />
        
          <label htmlFor="amount"
            >Add Amount <br />
            </label>
          <input type="number" value={amountExp} onChange= {(e)=> setExpenseAmount(e.target.value)} placeholder="Enter amount..." />
       
        <button className="btn" style={{fontFamily: 'Montserrat'}}>Add transaction</button>
      </form>
      </div>
        </div>
        </div>
    );

}
export default AddTransaction;