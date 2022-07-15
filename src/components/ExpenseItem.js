import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'
import { useState } from 'react';

let ExpenseItem = (props) => {
    let [input, setInput] = useState("");
    let inp = (event) => {
        setInput(event.target.value);
    }
    var [title, setTitle] = useState(props.title);
    let but = () => {
         setTitle(input);
    }

    /*getElementByClass('but').onClick.setTitle(input);*/
    return (
      <Card className='expense-item'>
      <ExpenseDate  date = {props.date}/>
      <div className='expense-des'>
        <h2 id='title'>{title}</h2>
        <div className='price'>${props.price}</div>
      </div> 
      <input type="text" value={input} onChange={inp}></input>
      <button onClick={but} className='but'>Change Title</button>
    </Card>
    )
}

export default ExpenseItem;