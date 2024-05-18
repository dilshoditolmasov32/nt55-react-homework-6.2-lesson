import { useState } from "react";

import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [taskCounter, setTaskCounter] = useState([0]);

  const handeBtnLogin = () => {
    setLogin(!login);
  };

  const handeClickPlus = () => {
    setCount(count + 1);
  };

  const handeClickPlusMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("qadam kattaligi 0 dan katta bo'ladi");
    }
  };

  const handeAdd = () => {
    if (count == 0) {
      alert("Jamshidbek ustoz, qadam kattaligini kiriting!👨‍💻👨‍💻");
    } else {
      setCounter(counter + count);
    }
  };

  const handeAddClick = () => {
    let item = taskCounter[taskCounter.length - 1] + 1;
    taskCounter.push(item);
    setTaskCounter([...taskCounter]);
  };

  const incBtnCount = (index) => {
    taskCounter[index] = taskCounter[index] + 1;
    setTaskCounter([...taskCounter]);
  };

  const decBtnCount = (index) => {
    taskCounter[index] = taskCounter[index] - 1;
    setTaskCounter([...taskCounter]);
  };

  return (
    <>
      <div className="row">
        <div className="col-4 bg-success">
          <h1>Task-1</h1>
          <button className="btn btn-dark m-3 " onClick={handeBtnLogin}>
            {login ? "Logout" : "Login"}
          </button>

          {login ? <h3>Xush Kelibsiz</h3> : <h3>Login</h3>}
        </div>

        <div className="col-4 bg-info">
          <h1>Task-2</h1>

          <h2>Qadam kattaligi : {count} </h2>
          <div className="g-1">
            <button
              className="btn btn-primary m-2"
              onClick={handeClickPlusMinus}
            >
              qadam kengligini kamaytirish
            </button>
            <button className="btn btn-warning m-3" onClick={handeClickPlus}>
              qadam kengligini kengaytirish
            </button>
          </div>

          <div className="qadamlar">
            <h2>Jami qadamlar soni:{counter}</h2>
            <button onClick={handeAdd} className="btn btn-success m-5">
              Yurish
            </button>
          </div>
        </div>

        <div className="col-4  text-center bg-primary ">
          <h1>Task-3</h1>
          <button className="btn btn-danger m-2" onClick={handeAddClick}>
            Add counter
          </button>

          {taskCounter?.map((value, index) => (
            <div className="d-flex align-items-center m-5 " key={index}>
              <button
                class="btn btn-info m-3"
                onClick={() => incBtnCount(index)}
              >
                +
              </button>
              <h5>{value}</h5>
              <button
                class="btn btn-dark m-3 "
                onClick={() => decBtnCount(index)}
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
