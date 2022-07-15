import "./App.css"
import Expenses from "./components/Expenses"

const App = () => {
  var arr = [
    {
       date : new Date(2022, 7, 13),
       title : " Car Insurance ",
       price : 200
    },
    {
      date : new Date(2022, 7, 14),
       title : " DBMS Practical",
       price : 500
    },
    {
      date : new Date(2022, 7, 16),
       title : " Semester Back",
       price : 1100
    },
    {
      date : new Date(2022, 7, 15),
       title : " Uncle ji ka kiraya",
       price : 4000
    },
    {
      date : new Date(2022, 7, 15),
       title : " Electricity Bill",
       price : 500
    },
    {
      date : new Date(2022, 7, 15),
       title : " Food",
       price : 1000
    }
  ];
  
    return(
      <div>
        <h1 className="ex">Expense Tracker</h1>
        <Expenses arr ={arr}/>
      </div>
    )
}

export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
