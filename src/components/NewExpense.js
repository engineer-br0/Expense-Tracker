import './NewExpense.css';
import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
let NewExpense = () =>{
    let da = new Date(2022, 7, 14);
    
    let [date , setDate ] = useState()
    // let func = () => {
    //     <ExpenseItem date = {da} title = 's' price = '200'></ExpenseItem>
    // }
    // let dfunc = (event) =>{
    //     setDate(event.target.value);
    // }
    return(
        <form onSubmit={func}>
       <div className="container">
            <div>
                <label for='date'>Enter Date :</label>
                <input type="date" id="date" value={date} onChange={dfunc}></input>
            </div>
            <div>
                <label>Enter Title :</label>
                <input type="text"></input>
            </div>
            <div>
                <label> Enter Amount :</label>
                <input type="number"></input>
            </div>
            <button type='submit'  >Add Expense</button>
       </div>
          </form>
    );
}

export default NewExpense;