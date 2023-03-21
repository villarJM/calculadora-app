import { useState } from 'react';
import './App.css'
import Button from './components/Button';

const buttonsClasses = 'btn btn-primary w-75 mt-2';

function App() {
  const [operator, setOperator] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [clearScreen, setClearScreen] = useState(false);
  const [screen, setScreen] = useState('0');

  const handleButtonClick = (e) => {
    const value = e.target.value;
    if(value === '.'){
      if(screen.indexOf('.') !== -1) return;
    }
    if(value === 'C') {
      setScreen('0');
      return;
    }
    if (clearScreen){
      setScreen(value);
      setClearScreen(false);
      return
    }
    if (screen === '0' && value !== '.') {
      setScreen(value);
    } else {
      setScreen(`${screen}${value}`)
    }
  };
  const handleDelButtonClick = () => {
    if(screen.length === 1){
      setScreen('0')
    } else {
      setScreen(screen.slice(0,-1));
    }
  }
  const handleOperationButtononClick = (e) => {
    setClearScreen(true);
    setPreviousValue(screen);
    setOperator(e.target.value);
  }
  const handleEqualsButtonClick = () => {
    let result = '0';
    let a = +previousValue;
    let b = +screen;
    switch (operator) {
      case '+':
        result = a + b;
        break;
      case '-':
        result = a - b;
        break;
      case '*':
        result = a * b;
        break;
      case '/':
        if(b === 0){
          result = 'Infinito'
          setClearScreen(true);
        } else {
          result = a / b;
        }
        break;
      default:
        break;
    }
    setScreen(result.toString());
  }

  const infoButtons = [
    [
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: 'C' 
      },
      {
        classes: buttonsClasses,
        handleClick: handleOperationButtononClick,
        rows: 1,
        style: {},
        value: '/'
      },
      {
        classes: buttonsClasses,
        handleClick: handleOperationButtononClick,
        rows: 1,
        style: {},
        value: '*'
      },
      {
        classes: buttonsClasses,
        handleClick: handleOperationButtononClick,
        rows: 1,
        style: {},
        value: '-'
      }
    ],
    [
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '7' 
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '8'
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '9'
      },
      {
        classes: buttonsClasses,
        handleClick: handleOperationButtononClick,
        rows: 2,
        style: {height: "85px"},
        value: '+'
      }
    ],
    [
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '4'
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '5'
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '6'
      }
    ],
    [
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '1' 
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '2'
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '3'
      },
      {
        classes: buttonsClasses,
        handleClick: handleEqualsButtonClick,
        rows: 2,
        style: {height: "85px"},
        value: '='
      }
    ],
    [
      {
        classes: buttonsClasses,
        handleClick: handleDelButtonClick,
        rows: 1,
        style: {},
        value: 'DEL'
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '0'
      },
      {
        classes: buttonsClasses,
        handleClick: handleButtonClick,
        rows: 1,
        style: {},
        value: '.'
      }
    ]
  ]

  return (
    <div className="app">
      <h1>Calculator</h1>
      <hr />
      <table style={{
        width: '400px', margin: 'auto'
      }}>
        {/*FIRT ROW*/}
        <tr>
          <td colSpan={4} style={{
            border: '1px solid black', textAlign: 'end'
            }}><h2>{screen}</h2></td>
        </tr>
        {/*SECOND ROW*/}
        {
          infoButtons.map((row) => {
            return (
              <tr>
                {row.map((btn) => {
                  return (
                    <Button 
                      Classes = {btn.classes}
                      handleClick = {btn.handleClick}
                      rows = {btn.rows}
                      style = {btn.style}
                      value = {btn.value}
                    />
                  )
                })}
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default App;