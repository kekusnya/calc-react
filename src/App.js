import React,{ useState } from 'react';
import './App.css';


function App() {
  const [result,setResult]=useState('');
  const handleClick = (e) => {
    setResult(result + e.target.name);
    };
    
    const calculate = () => {
    try {
    setResult(eval(result).toString());
    } catch (error) {
    setResult('Error');
    }
    };

    const clear=()=>{
      setResult('');
    };
    
    const backspace = () => {
      setResult(result.slice(0, -1));
      };
      
      const calculatePercentage = () => {
        try {
        setResult((eval(result) / 100).toString());
        } catch (error) {
        setResult('Error');
        }
        };
  return (
    <div className="App">
      <div className="calc">
        <input type="text"  className="calc-screen" value={result}></input>
        <div className="buttons"> 
          <button onClick={clear} className="btn ac bg-grey">ac</button>
          <button  className="btn bg-grey" onClick={backspace}>c</button>
          <button name="%" className="btn  bg-grey" onClick={calculatePercentage}>%</button>
          <button name="/" className="btn delenie bg-green" onClick={handleClick}>/</button>

          <button name="7" className="btn seven" onClick={handleClick}>7</button>
          <button name="8" className="btn eight" onClick={handleClick}>8</button>
          <button name="9" className="btn nine" onClick={handleClick}>9</button>
          <button name="*" className="btn ymnoj bg-green" onClick={handleClick}>*</button>

          <button name="4" className="btn four" onClick={handleClick}>4</button>
          <button name="5" className="btn five" onClick={handleClick}>5</button>
          <button name="6" className="btn six" onClick={handleClick}>6</button>
          <button name="-" className="btn minus bg-green" onClick={handleClick}>-</button>

          <button name="1" className="btn one" onClick={handleClick}>1</button>
          <button name="2" className="btn two" onClick={handleClick}>2</button>
          <button name="3" className="btn three" onClick={handleClick}>3</button>
          <button name="+" className="btn plus bg-green" onClick={handleClick}>+</button>
          
          <button name="0" className="btn zero " onClick={handleClick}>0</button>
          <button name="." className="btn dot" onClick={handleClick}>.</button>
          <button onClick={calculate} className="btn equal bg-green">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
