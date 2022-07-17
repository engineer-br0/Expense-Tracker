import './NewExpense.css';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';

let NewExpense = (props) =>{
    let da = new Date(2022, 7, 14);
    
    let [date , setDate ] = useState("");
    let [title , setTitle ] = useState("");
    let [amount , setAmount ] = useState("");

    let dateFunc = (event) =>{
         setDate(event.target.value);
    }
    let titleFunc = (event) =>{
        setTitle(event.target.value);
   }
   let amountFunc = (event) =>{
        setAmount(event.target.value);
   }


   let clickFunc = (event) => {
    event.preventDefault();
    var obj ={
        title : title,
        date : new Date(date),
        price : amount
    }
    props.recFunc(obj);
    setDate('');
    setTitle('');
    setAmount('');
}

    return(
        <form onSubmit={clickFunc}>
       <div className="container">
            <div>
                <label>Enter Title :</label>
                <input type="text" value={title} onChange={titleFunc}></input>
            </div>
            <div>
                <label for='date'>Enter Date :</label>
                <input type="date" id="date" value={date} onChange={dateFunc}></input>
            </div>
            <div>
                <label> Enter Amount :</label>
                <input type="number" value={amount} onChange={amountFunc}></input>
            </div>
            <button type='submit'  >Add Expense</button>
       </div>
          </form>
    );
}

export default NewExpense;