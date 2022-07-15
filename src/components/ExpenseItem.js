import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css'

let ExpenseItem = (props) => {

    let but = () => {
        alert("clicked");
    }
    return (
      <Card className='expense-item'>
      <ExpenseDate  date = {props.date}/>
      <div className='expense-des'>
        <h2>{props.title}</h2>
        <div className='price'>${props.price}</div>
      </div> 
      <button onClick={but} className='but'>Change Title</button>
    </Card>
    )
}

export default ExpenseItem;