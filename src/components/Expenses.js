import ExpenseItem from "./ExpenseItem";
function Expenses(props){
    return (
        <div>
      <ExpenseItem date ={props.arr[3].date} title ={props.arr[3].title} price={props.arr[3].price}></ExpenseItem>
      <ExpenseItem date ={props.arr[1].date} title ={props.arr[1].title} price={props.arr[1].price}></ExpenseItem>
      <ExpenseItem date ={props.arr[2].date} title ={props.arr[2].title} price={props.arr[2].price}></ExpenseItem>
      <ExpenseItem date ={props.arr[4].date} title ={props.arr[4].title} price={props.arr[4].price}></ExpenseItem>
      <ExpenseItem date ={props.arr[5].date} title ={props.arr[5].title} price={props.arr[5].price}></ExpenseItem>
      <ExpenseItem date ={props.arr[0].date} title ='a' price='100'></ExpenseItem>
      </div>
    );
}

export default Expenses;